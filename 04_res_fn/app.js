const express = require("express");

const app = express();

// res.json() 响应数据,最常用,返回ajax数据 
// redirect() 重定向
// download() 下载
// jsonp() 跨域处理

// 1.获取路由中间件对象
const router = express.Router();
// 2.配置路由规则 
router.get('/json',(req,res)=>{
  res.json([{name:'jack',age:18}]);
})
.get('/redirect',(req,res)=>{
  res.redirect('http://www.taobao.com');
})
.get('/download',(req,res)=>{
  res.download('./app.js');
})
.get('/jsonp',(req,res)=>{
  res.jsonp('I love you');
})
// 3.将router加入应用中
app.use(router);

app.listen(8888);