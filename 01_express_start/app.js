// 1.引入
const express = require("express");
// 2.构建
let app = express();
// 3.开启服务监听端口
app.listen(8888);
// 4.处理响应
app.use((req, res) => {
  res.end("hello world");
});
