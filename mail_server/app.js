const config = require("./common/config");
require('colors');
require("ejs");

const Koa = require("koa");
const bodyParser = require('koa-bodyparser');
const middleware = require("./middleware");
const view = require('koa-views');
const static = require('koa-static');
const multer=require('koa-multer')
const router = require("./router");

const app = new Koa();

// 连接mysql数据库
require('./common/db');
require('./common/model_load'); // 载入数据库模型
require('./common/model_relation'); // 载入模型关系

app.use(bodyParser());
//设置模板目录
app.use(view('./view', { map: { html: 'ejs' } }));
// 载入所有中间件
middleware(app);
// 静态资源
// app.use(static('./static'));
// let storage = multer.diskStorage({
//   //文件保存路径
//   destination: function (req, file, cb) {
//     cb(null, '/Users/nero/Desktop')
//   },
//   //修改文件名称
//   filename: function (req, file, cb) {
//     var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
//     cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
//   }
// })
// //加载配置
// let upload = multer({ storage: storage });
// 设置路由
// router.post('/upload',upload.single('file'),async(ctx,next)=>{
//   console.log('abc')
//   ctx.body = {
//     filename: ctx.req.file.filename//返回文件名
//   }
// })
app.use(router.routes()).use(router.allowedMethods());


app.listen(config.PORT, () => {
  console.log(`==================================`);
  console.log(`   ${config.APP_NAME} has launched`);
  console.log(`   listening port in ${config.PORT}...`);
  console.log(`==================================`);
});
