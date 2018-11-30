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
  global[model] = db.import(`${__dirname}/../model/${item}`)
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