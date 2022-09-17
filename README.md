專案網站:http://13.234.239.11:5000/native/templates/index.html

因為專案是前後端分離網站，這是前端部分，後端部分在:

https://github.com/class83108/native_backend

原本在上架前我是直接用flask啟動，上架後改用nginx來處理前端的靜態資源

動態請求則是用80端口，透過nginx再反向代理給後端處理數據
