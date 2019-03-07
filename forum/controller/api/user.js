module.exports = {
  async login(ctx, next) {
    let account = ctx.request.body.account;
    let password = ctx.request.body.password;
    let res = await UserService.login(account, password);
    if (res) {
      ctx.body = {
        code: 200,
        message: 'success',
        data: [],
      }
    } else {
      ctx.body = {
        code: 500,
        message: 'error',
        data: [],
      }
    }

  },
  async register(ctx, next) {
    let account = ctx.request.body.account;
    let password = ctx.request.body.password;
    let name = ctx.request.body.name;
    let res = await UserService.registerUser(account, password, name);
    ctx.body = {
      code: 200,
      message: 'success',
      data: [res],
    }
  }
}