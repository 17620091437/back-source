const pageMap = require('./page');
const apiMap = require('./api');
const uploadAction = require('../controller/api/upload');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../static/upload'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
})
const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024 * 1024, // 大小为2M
  }
});



// api基本路径
const BASE_URL = '/api/v1';

// 传入app,创建路由
module.exports = function (app) {
  // 设置page路由
  for (let route in pageMap) {
    app.get(pageMap[route].path, pageMap[route].action)
  }
  // 设置api路由
  apiMap.forEach(api => {
    app[api.method](BASE_URL + api.path, async (req, res) => {
      // api统一处理错误
      try {
        await api.action(req, res)
      } catch (err) {
        res.status(500).send({
          status: 500,
          msg: err.message
        })
      }
    })
  });
  // 设置上传接口
  app.post(`${BASE_URL}/upload`, upload.single('file'), async (req, res) => {
    try {
      await uploadAction.upload(req, res)
    } catch (err) {
      res.status(500).send({
        status: 500,
        msg: err.message
      })
    }
  })
}
