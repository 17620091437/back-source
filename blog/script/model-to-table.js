// 同步所有model到数据库表

const db = require('../common/db');

require('../common/model_load');

db.sync({
  force: true,
})
  .then(() => {
    console.log(`已同步所有 model 到数据库表`);
    process.exit();
  });