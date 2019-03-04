const fs = require('fs');
require('colors');
require('../common/model_load');    // 数据库表对象

let seederList = fs.readdirSync(__dirname + '/../seeder');
main().then(() => {
  console.log('以同步所有表数据！')
});


async function main() {
  for (let i = 0; i < seederList.length; i++) {
    let item = seederList[i];
    if (!/\.js/.test(item)) {
      throw new Error('确保Seeder文件夹全部是js文件');
    }
    let seederData = require(`${__dirname}/../seeder/${item}`);
    let model = formatModel(item);

    try {
      await global[model].bulkCreate(seederData.data);
      console.log(`创建${seederData.tableName}表数据成功！`);
    } catch (err) {
      console.log(`创建${seederData.tableName}表数据失败！ message:${err}`);
      break;
    }
  }
}

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