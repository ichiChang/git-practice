# backend

## 1. dependencies vs devDependencies

1. `dependencies` : 在 production 環境會用到的 dependency
2. `devDependencies`: 只在開發跟測試的時候會用到的 dependency

## 2. scripts 區塊的使用方法

scripts 區塊可以自定義腳本，就可以用 npm run 來執行 例如我如果懶得打 `node app.js`, 我就可以設置一個：

```json
"scripts": {
    "start": "node app.js"
  }
```

這樣一來就可以打 npm run start 來執行了（好像沒有比較簡單）

## 3. 使用環境變數設定 Port number

我自己在開發其他語言的時候用過的方式是用 .env, 所以我也搜尋了一下 JS 有沒有相似的做法，於是我找到了 dotenv 這個套件，操作步驟如下：

1. 新增.env檔案

```
PORT = 3000
```

2. 在 app.js 裡面

```JavaScript
require("dotenv").config();
const port = process.env.PORT || 3000;
```

## 4. GitHub repo 管理

我上傳的依據主要是以下幾點：

1. 是否是 code 的一部分
2. 是否一定需要該 檔案/資料夾 才能跑
3. 是否有機密文件 （例如：資料庫密碼）

像是 .env 就是因為會有機密，所以不上傳。
node_modules/ 的部分，則是因為每次在執行之前都應該先透過 package.json 來重建一次，所以沒有上傳的必要。

## 5. CJS (CommonJS) vs ESM (ECMAScript Modules)

CJS 是比較舊的 module 系統，使用方式是用 require 來操作，例如：

```javascript
const express = require('express');
module.exports = Function;
```

ESM則是比較新的系統，我覺得有比較簡化，用的是 import, export 的方式，例如：

```javascript
import express from 'express';
export default Function;
```

兩者最大的差別是 ESM 是採用靜態載入，也就是在 compile 的時候就會確定 module 之間的關係了，這樣比較有效率

## 6. localhost 是什麼？

localhost 是一個特別的主機名稱，指向自己的電腦，通常是127.0.0.1，也就是說，目的地為 localhost 的請求實際上不會離開自己的電腦，允許我們跟自己通信，常用在測試程式或是環境

## 7. curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？

curl 是 "Client URL" 的意思，主要功能有發送 HTTP request, 下載資料、上傳資料。

基本的語法：

```
curl https://www.google.com
```

常用的語法：

1. -x 設定 HTTP method

```
curl -x POST https://www.google.com
```

2.  -H 設定 HTTP header

```
curl -H "Content-Type: application/json" https://www.google.com
```

3.  -i 顯示 header

```
curl -i https://www.google.com
```
