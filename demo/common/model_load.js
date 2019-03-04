const db = require('./db');
const fs = require('fs');

let modelList = fs.readdirSync(__dirname + '/../model');

modelList.forEach(item => {
  if (!/\.js/.test(item)) {
    throw new Error('确保Model文件夹全部是js文件')
  }
  let model = formatModel(item);
  if (global[model]) {
    throw new Error(`Node 全局已存在 ${model} 变量`);
  }
  let modelConfig = require(`${__dirname}/../model/${item}`);
  global[model] = db.define(
    modelConfig.tableName,
    modelConfig.tableStruct,
    {
      timestamps: true, // 添加时间戳属性(updatedAt, createdAt)
      paranoid: true,  // 不删除数据库条目，但将新添加的属性deletedAt设置为当前日期
      underscored: true, // 将自动设置所有属性的字段选项为下划线命名方式。
      freezeTableName: true, // 禁用修改表名,不加复数
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      version: true // 乐观锁
    });
})

function formatModel(fileName) {
  fileName = fileName.replace(/\.js/, '');
  fileName = fileName.replace(/_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
  fileName = fileName.replace(/^(\w){1}/, function (letter) {
    return letter.toUpperCase();
  })
  return fileName;
}