# 110306068 張奕奇 HW6

## Trouble Shooting

1. 在建立好環境之後，我直接先打以下 curl: `curl localhost`
   發現系統給了以下回覆：
   ![image](https://hackmd.io/_uploads/Bk3NMpbG1x.png)
   此時的我知道是另一個服務把 80 佔住了，但我決定先檢查 nginx 的運行狀況。

2. 我透過 `sudo systemctl status nginx` 來檢查 nginx 的狀況，並發現 nginx 沒有在運行，於是執行 `sudo systemctl start nginx` 發現沒有辦法啟動：
   ![image](https://hackmd.io/_uploads/Sknn7TWf1e.png)
   於是我照著系統的建議執行 `systemctl status nginx.service` 檢查錯誤：
   ![image](https://hackmd.io/_uploads/rktPXpWMkl.png)
   發現問題出在 nginx.conf 這個檔案裡面：
   ![image](https://hackmd.io/_uploads/rkCCXp-Myg.png)
   把多的分號刪除之後，nginx 終於能正常啟動。

3. 確認 nginx 有在運行之後，先把擋住 80 的服務關掉，執行 `sudo lsof -i :80` 之後 `sudo kill {佔用的 pid}` 成功把擋住 80 的服務關掉。

4. 再度執行 `curl localhost` 來檢查，發現有新的問題如下：
   ![image](https://hackmd.io/_uploads/H1jiVpbzJl.png)
   當下我的想法是先看看 var/myweb 裡面的檔案是否有問題，其實這裡的 Error 應該跟此無關，但我剛好解決了另個問題如下：
   - 先檢查 html 檔案，發現無錯誤
   - 執行 `ls -la /var/myweb/index.html` 檢查檔案權限，發現該 html 檔案並沒有給 www-data 權限，於是執行 `sudo chown www-data:www-data /var/myweb/index.html` 解決了檔案權限的問題
   - 但就算解決此問題，上面那張圖的 error 也還在，於是我開始思考還可能有甚麼問題

5. 接下來我開始思考還有甚麼問題，然後發現他上面寫的文字是 "Couldn't connect" 代表是在連線的時候就有問題，高機率是防火牆的問題，但我跟防火牆實在不太熟，所以上網查了很多資料之後決定用 iptable 來嘗試解決這個問題：
   ![image](https://hackmd.io/_uploads/SyMhLaZz1e.png)
   可以發現上面的 input 並沒有允許 80 流量進來，再度上網查了一番之後執行 `sudo iptables -I INPUT -p tcp --dport 80 -j ACCEPT`。

6. 做完上面這些之後，就成功解決所有問題了！

## Reboot 後

在聽老師的建議，對 EC2 執行 reboot 之後，主要發現三個問題：

1. 擋住 80 的 srv 又回來了
2. 雖然設定檔這次沒有 typo 了，但 nginx 並未自動執行
3. 防火牆問題還是在

於是我開始著手解決上述問題：

1. 首先，要先讓 srv 不在開機時自動啟動，執行 `sudo systemctl stop srv` 以及 `sudo systemctl disable srv` 後，再度 reboot，確定這個問題被解決。

2. 簡單的執行 `sudo systemctl enable nginx`，讓 nginx 可以自動啟動。

3. 我問了 gpt 要如何讓防火牆設定永久儲存，他給我以下解法：
   ![image](https://hackmd.io/_uploads/HkpnO6bzke.png)
   我想照著執行，卻發現系統是滿的，安裝不下新的東西。

4. 於是我想著要清除系統內多餘的檔案，先用 `sudo find / -type f -size +100M -ls` 來找大檔案：
   ![image](https://hackmd.io/_uploads/HkOQKpZMkl.png)
   發現系統裡面放了很多大檔案，把 largefile 逐一刪除後，再度執行第三步，成功解決所有問題！

## 心得

這是我第一次做這種 troubleshooting 的工作，我覺得一步一步找錯誤然後想解決方法真的是很好玩的一件事情，不過這個好玩可能是建立在沒有一個問題花我超過 10 分鐘上，如果有解決不了的事情，我感覺就會很生氣，所以雖然很好玩，但希望未來的實務上，troubleshooting 的次數還是少一點吧！