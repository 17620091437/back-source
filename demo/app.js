// const express = require('express');
// const app = express();
const config = require("./common/config");
const router = require("./router");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const Koa = require("koa");
const app = new Koa();

// 连接mysql数据库
// require('./common/db');
// require('./common/model_load'); // 载入数据库模型
// require('./common/model_relation'); // 载入模型关系

// app.set('views', path.join(__dirname, 'view')); //设置模板目录
// app.set('view engine', 'html');
// app.engine('html', ejs.renderFile);

// // 静态资源
// app.use('/static', express.static('static'));
// //bodyParser设置
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

// 载入所有中间件
const middleware = require("./middleware");
middleware(app);

// 设置路由
app.use(router.routes()).use(router.allowedMethods());

// app.listen(config.PORT);
// console.log(`listening port in ${config.PORT}...`);

app.listen(config.PORT, () => {
  console.log(`==================================`);
  console.log(`   ${config.APP_NAME} has launched`);
  console.log(`   listening port in ${config.PORT}...`);
  console.log(`==================================`);
});
