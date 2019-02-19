const express = require("express");
const app = express();
const config = require("./common/config");
const router = require("./router");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");

// 连接mysql数据库
// require('./common/db');
// require('./common/model_load'); // 载入数据库模型
// require('./common/model_relation'); // 载入模型关系

app.set("views", path.join(__dirname, "view")); //设置模板目录
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

// 静态资源
app.use("/static", express.static("static"));
//bodyParser设置
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

// 载入所有中间件
const middleware = require("./middleware");
middleware(app);

// 设置路由
router(app);

// 错误处理
app.use(function(err, req, res, next) {
  console.error(err);
  res.status(500).send({
    status: 500,
    msg: err.message
  });
});

app.use((req, res, next) => {
  let endTime = new Date().getTime();
  console.log(
    `<-- ${req.method} :  path: ${req.originalUrl}   to: ${
      req.ip
    }   time: ${endTime - req.time}ms`
  );
});

app.listen(config.PORT);
console.log(`listening port in ${config.PORT}...`);
