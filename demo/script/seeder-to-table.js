const fs = require('fs');
require('colors');
require('../common/model_load');    // 数据库表对象

let seederList = fs.readdirSync(__dirname + '/../seeder');
main()
  .then(() => {
    console.log(`Create all data successfully!`.green.bold);
    process.exit();
  })
  .catch(err => {
    console.log(`Create all data failed!`.red.bold);
    process.exit();
  });


async function main() {
  for (let i = 0; i < seederList.length; i++) {
    let item = seederList[i];
    if (!/\.js/.test(item)) {
      throw new Error('确保Seeder文件夹全部是js文件');
    }
    let seederData = require(`${__dirname}/../seeder/${item}`);
    let model = formatModel(seederData.tableName);
    try {
      console.log('');
      console.log(`Creating ${seederData.tableName} table data...`.blue.bold);
      await global[model].bulkCreate(seederData.data);
      console.log(`Create ${seederData.tableName} table data successfully!`.green.bold);
    } catch (err) {
      console.log(`Create ${seederData.tableName} table data failed!`.red.bold);
      console.log(`Error message:${err}`.red.bold);
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