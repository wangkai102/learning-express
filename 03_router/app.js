const express = require("express");

const app = express();

// 1.获取路由中间件对象
const router = express.Router();
// 2.配置路由规则 
router.get('/login',(req,res)=>{
  res.end('login page');
})
.get('/register',(req,res)=>{
  res.end('register page');
})
// 3.将router加入应用中
app.use(router);

app.listen(8888);