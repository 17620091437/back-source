const pageMap = require('./page');
const apiMap = require('./api');
const config = require('../common/config');

module.exports = function (app) {
  // 设置page路由
  pageMap.forEach(page => {
    let fileName = page.action.split('.')[0]; // page 文件名
    let action = page.action.split('.')[1];  // 该文件下的action函数
    let fileFun = require(`../controller/page/${fileName}`);  // 载入page文件
    app.get(page.path, fileFun[action]);
  });

  // 设置api路由
  apiMap.forEach(api => {
    let fileName = api.action.split('.')[0]; // api 文件名
    let action = api.action.split('.')[1];  // 该文件下的action函数
    let fileFun = require(`../controller/api/${fileName}`);  // 载入api文件
    app[api.method](config.BASE_URL + api.path, async (req, res) => {
      // api统一处理错误
      try {
        await fileFun[action](req, res)
      } catch (err) {
        res.status(500).send({
          status: 500,
          msg: err.message
        })
      }
    })
  });

}