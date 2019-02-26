const jwt = require('koa-jwt');
module.exports = jwt(
  {
    secret: GB_CONFIG.JWT_SECRET,
    passthrough: true,
    key: 'jwtPayload',
    unless: {
      path: [/^\/api/]
    }
  }
);