/**
 * 从文件夹中载入所有service
 */

const fs = require('fs');
const baseService = require('./base_service');

let serviceList = fs.readdirSync(__dirname + '/../service');

serviceList.forEach(item => {
  if (!/\.js/.test(item)) {
    throw new Error('确保Service文件夹全部是js文件')
  }
  let service = require(`${__dirname}/../service/${item}`);
  let serviceName = service.serviceName || formatService(item);
  let modelName = service.modelName || formatModel(item);
  if (global[serviceName]) {
    throw new Error(`Node 全局已存在 ${serviceName} 变量`);
  }
  if (global[modelName]) {
    global[serviceName] = Object.assign(baseService, service);
    global[serviceName].model = global[modelName];
  } else {
    throw new Error(`当前${serviceName} Service 没有对应的Model ${modelName}`);
  }
});

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


function formatService(fileName) {
  fileName = fileName.replace(/\.js/, '');
  fileName = fileName.replace(/_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
  fileName = fileName.replace(/^(\w){1}/, function (letter) {
    return letter.toUpperCase();
  });
  fileName = fileName + 'Service';
  return fileName;
}