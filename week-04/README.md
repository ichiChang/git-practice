# 110306068 資管四 張奕奇 HW4

1. 52.193.19.206, 但我在用 Arc 連接的時候大概五次才會成功一次，用 curl 則是沒有問題（清除瀏覽器 cache 之後已解決）
2. 我還沒去查的時候自己的理解： EC2 主機的硬體規格，每一種不同的 instance type 會有不同的 CPU, 記憶體、儲存空間跟網路。  
我查完之後的結論：大致上正確，但不是每個 type 都會有儲存空間，另外， instance type 還有分類型，每個 type 都有他們適合執行的工作。
3. Nginx 是一個 web server, 常常被當作 Reverse Proxy server ，比較常用的功能是拿來做 load balancing, cache, 隱藏真實的後端 ip 以及拿來架設靜態的前端
4. pm2 主要是拿來管理 NodeJS 的 process, 讓你可以一次執行很多不同的 NodeJS 專案，並且可以設定自動重啟、 load balance 以及 log 的管理
5. Forward proxy 主要是代替使用者對網站進行 access, 可以匿名使用網站，有時也會 cache 網站的內容，減少 access 資料需要的時間。而 reverse proxy 則是放在 server 端，可以進行 load balance 以及隱藏實際的後端架構，一定程度上可以防止 DDos
6. nginx 配置：

   ```nginx
    server {
        listen 80;
        server_name 52.193.19.206;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

7. Security Group 是一種虛擬防火牆，主要用來控制進出 ec2 的網路流量，可以控制要開哪些 port, 允許哪些 ip 進來之類的設定，還會分成 inbound and outbound, 分別管理進來 ec2 跟 ec2 送出去的網路流量。
8. sudo 是超級使用者指令，通常拿來執行一些跟系統相關的指令，當沒有涉及跟系統相關的操作，就可以不用 sudo 。
9. 我是問 chatGPT 如何查看 nginx log 之後他給我的指令： `cat /var/log/nginx/access.log`, 同時讓我知道怎麼看跟在哪裡。
10. 我每個問題幾乎都有上網查一下，有時候是為了確認我想得正確，有時候是不熟指令，但幾乎沒有卡在什麼問題。
11. 我查蠻多資料的，網站如下：
    1. <https://aws.amazon.com/tw/ec2/instance-types/>
    2. <https://pm2.keymetrics.io/docs/usage/quick-start/>
    3. <https://docs.aws.amazon.com/zh_tw/vpc/latest/userguide/vpc-security-groups.html>
    4. 生成式 AI: ChatGPT, Claude
