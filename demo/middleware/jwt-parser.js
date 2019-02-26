const jwt = require('jwt-simple');
module.exports = async (ctx, next) => {
  let token = (ctx.body && ctx.body.access_token) || (ctx.query && ctx.query.access_token) || ctx.header.access_token;
  try {
    let payload = jwt.decode(token, GB_CONFIG.JWT_SECRET);
    // 是否过期
    if (payload.expires < Date.now()) throw new Error();
    ctx.state.payload = payload;
    console.log(payload);
  } catch (err) {
    ctx.status = 403;
    ctx.body = {
      status: 403,
      message: 'Token Invalid'
    }
    return;
  }
  await next();
}
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoid2FuZyIsImVudmlyb25tZW50Ijoid2ViIiwiZXhwaXJlcyI6MTU1MTgwMjg2MjcyMn0.2w3j1PyTrBTlTh - LnJoWoT8iPQsTv6XtjutOblYEycA