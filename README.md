# URL shortener 短網址產生器
![URL shortener image](/public/image/URL_shortener.png)

## 介紹
將原本冗長的網址化為簡短的網址

## 功能
- 輸入網址轉換成短網址
- 點擊按鈕複製網址
- 透過短網址，轉址到原始網址

## 開始使用
1. 請先確認是否有安裝 Node.js 與 npm

2. 將專案 clone 到本地端

3. 透過終端機進入專案資料夾，安裝 npm 套件
ˋˋˋ
  npm install
ˋˋˋ

4. 安裝完成後，設定環境變數，連線 MongoDB
```
  MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
```

5. 執行專案
```
  npm run start
```

6. 若看到此行訊息表示運行成功，開啟瀏覽器到以下網址
```
Listening on http://localhost:3000
mongodb connected!
```

7. 若想暫停使用，請在終端機輸入以下指令
```
ctrl + c
```

## 開發工具
- Node.js ^18.14.2
- Nodemon
- Express ^4.18.2
- Express-handlebars ^7.0.1
- MongoDB
- Mongoose ^7.0.0
- dotenv ^16.0.3
- Bootstrap
