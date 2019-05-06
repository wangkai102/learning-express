const express = require("express");

const app = express();

app.listen(8888, () => {
  console.log("服务器启动");
});

app.use('sucai',(req,res,next) => {
  console.log("萝卜");
  next();
});
app.use('sucai',(req,res,next) => {
  console.log("青菜");
  next();
});
app.use('huncai',(req,res,next) => {
  console.log("牛肉");
  next();
});
app.use('huncai',(req,res,next) => {
  console.log("咸鱼");
  next();
});
