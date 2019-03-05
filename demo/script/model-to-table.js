/*
 * 同步所有model到数据库表
 */
require('colors');
const db = require('../common/db');     // 数据库实例
require('../common/model_load');    // 数据库表对象

db.sync({
  force: true,
})
  .then(() => {
    console.log(`Updated all model to table successfully!`.green.bold);
    process.exit();
  })
  .catch(err => {
    console.log(`Updated all model to table failed!`.red.bold);
    process.exit();
  });