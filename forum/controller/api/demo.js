const jwt = require('jwt-simple');
const fs = require('fs');
const path = require('path')
module.exports = {
  demo: async (ctx, next) => {
    const token = ctx.header.authorization
    ctx.body = {
      status: 200,
      message: 'demo test',
      data: []
    }
  },
  async upload(ctx) {
    // 上传单个文件
    const file = ctx.request.files.file; // 获取上传文件
    try {
      // 创建可读流
      const reader = fs.createReadStream(file.path);
      let fileName = Date.now() + `-${file.name}`;
      let uploadPath = path.resolve(__dirname, '../../static/upload');
      // if (!fs.existsSync(uploadPath)) {  //判断staic/upload文件夹是否存在，如果不存在就新建一个
      //   fs.mkdirSync(uploadPath)
      // }
      // 创建可写流
      const upStream = fs.createWriteStream(path.resolve(__dirname, `../../static/upload/${fileName}`));
      // 可读流通过管道写入可写流
      reader.pipe(upStream);
      await sleep(1000)
      ctx.body = {
        errno: 0,
        // data 是一个数组，返回若干图片的线上地址
        data: [`//39.108.174.110/upload/${fileName}`]
      };
    } catch (err) {
      ctx.body = {
        errno: 1
      };
    }
  },
  login: async (ctx, next) => {
    const tokenExpiresTime = 1
    const payload = {
      user: 'wang',
      environment: 'web',
      expires: Date.now() + tokenExpiresTime
    }
    const token = jwt.encode(payload, GB_CONFIG.JWT_SECRET);
    ctx.body = {
      status: 200,
      message: '获取token成功',
      token
    }
  }
}

async function sleep(time) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, time);
  });
}