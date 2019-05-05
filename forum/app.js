const config = require("./common/config");
require('colors');
require("ejs");

const Koa = require("koa");
const bodyParser = require('koa-bodyparser');
const middleware = require("./middleware");
const view = require('koa-views');
const static = require('koa-static');
const router = require("./router");

const app = new Koa();
app.use(bodyParser());
// 连接mysql数据库
require('./common/db');
require('./common/model_load'); // 载入数据库模型
require('./common/model_relation'); // 载入模型关系
require('./common/service_load')  // 载入service全局对象

// CROS设置
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  //指定服务器允许进行跨域资源访问的请求方法列表，一般用在响应预检请求上
  ctx.set("Access-Control-Allow-Methods", "OPTIONS,POST,GET,HEAD,DELETE,PUT");
  //必需。指定服务器允许进行跨域资源访问的请求头列表，一般用在响应预检请求上
  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
  next();
});

//设置模板目录
app.use(view('./view', { map: { html: 'ejs' } }));
// 载入所有中间件
middleware(app);
// 静态资源
app.use(static('./static'));
// 设置路由
app.use(router.routes()).use(router.allowedMethods());


app.listen(config.PORT, () => {
  console.log(`==================================`);
  console.log(`   ${config.APP_NAME} has launched`);
  console.log(`   listening port in ${config.PORT}...`);
  console.log(`==================================`);
});
