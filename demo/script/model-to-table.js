/*
 * 同步所有model到数据库表
 */

const db = require('../common/db');     // 数据库实例
require('../common/model_load');    // 数据库表对象

db.sync({
  force: true,
})
  .then(() => {
    console.log(`已同步所有 model 到数据库表`);
    process.exit();
  });