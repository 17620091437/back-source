const express = require('express');
const bodyParser = require('body-parser');
const config = require('./common/config');
const router = require('./router');
const path = require('path');
const ejs = require('ejs');

// 连接mysql数据库
require('./common/db');
require('./common/model_load'); // 载入数据库模型
require('./common/model_relation'); // 载入模型关系

const app = express();

app.set('views', path.join(__dirname, 'view')); //设置模板目录
// app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');

// 静态资源
app.use('/static', express.static('static'));

//bodyParser设置
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

//CROS设置
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   next();
// });

app.use(function (req, res, next) {
  console.log(`${req.method}---${req.originalUrl}`);
  next();
});
app.use(function (req, res, next) {
  for (let key in req.body) {
    if (req.body[key] === '') req.body[key] = null;
  }
  next();
});
router(app);
app.listen(config.PORT);
console.log(`listening port in ${config.PORT}...`);
