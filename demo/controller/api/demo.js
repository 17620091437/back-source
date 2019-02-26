const jwt = require('jwt-simple');
module.exports = {
  demo: async (ctx, next) => {
    const token = ctx.header.authorization
    ctx.body = {
      status: 200,
      message: 'demo test',
      data: []
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