const express = require("express");

const app = express();
// 1.注册一个模板引擎
app.engine(".html", require("express-art-template"));
// 2.配置默认渲染引擎
app.set("view engine", ".html");
const router = express.Router();
router.get("/lolhero", (req, res) => {
  res.render("list.html", {
    heros: [{ name: "李青" }, { name: "薇恩" }, { name: "亚索" }]
  });
});
app.use(router);

app.listen(8888);
