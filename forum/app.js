const config = require("./common/config");
require('colors');
require("ejs");

const Koa = require("koa");
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const middleware = require("./middleware");
const view = require('koa-views');
const static = require('koa-static');
const router = require("./router");
const koaBody = require('koa-body');

const app = new Koa();

// 连接mysql数据库
require('./common/db');
require('./common/model_load'); // 载入数据库模型
require('./common/model_relation'); // 载入模型关系
require('./common/service_load')  // 载入service全局对象

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
  }
}));
app.use(bodyParser());
app.use(cors());


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
