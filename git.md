# 110306068 張奕奇 作業一

## 1. git 基本名詞

1. Blob
   - blob 為 git 存文件的基本單位
   - 每次 add 新的檔案時都會創建新的 blob
   - blob 會紀錄檔案的內容，但不會記檔名
   - 相同內容的文件，無論文件名如何，都會共用同一個 blob
2. Tree
   - tree 代表的是目錄，會紀錄資料的結構以及檔名
   - tree 會包含 tree 跟 blob
3. Commit
   - commit 是專案某個時刻的紀錄
   - 會紀錄作者、commit 的人以及 commit message
   - 可以追蹤專案的歷史
4. Branch
   - 用來平行開發的工具
   - 實際上是指向某個 commit 的指針
5. HEAD
   - 指向目前分支的指針
   - 決定下一個 commit 的節點
   - checkout 新的 branch 時，HEAD 會改變

## 2. .git 觀察

1. 執行 git add README.md
   - object 資料夾裡面多了一個目錄，裡面有 hash 值
2. 執行 git add git.md
   - object 資料夾裡面多了另一個目錄，裡面一樣有 hash 值
3. 執行 git remote add
   - config 檔案裡面多了 remote
4. 執行第一次 commit
## 3. commit message

我自己的經驗裡，無論是專案或是工作，我們都習慣會在 commit message前面加上前綴來區分 commit 的類別，例如開發新功能就是  
feature: new feature.....  
修正 bug 就是  
fix: fix the I/O problem  
以此類推，我覺得有前綴的情況下會更好區分、尋找特定的 commit.
e