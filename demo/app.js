const app = require('express')();
const config = require('./common/config');

// 连接mysql数据库
require('./common/db');

// router(app);
app.listen(config.PORT);
console.log(`listening port in ${config.PORT}...`);
