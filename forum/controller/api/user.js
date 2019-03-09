module.exports = {
  async login(ctx, next) {
    let account = ctx.request.body.account;
    let password = ctx.request.body.password;
    let res = await UserService.login(account, password);
    if (res.res) {
      ctx.cookies.set('access_token', res.token, {});
      ctx.success(200, { id: res.data.id, token: res.token });
    } else {
      ctx.error(500, res.errMsg);
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
  },

  async update(ctx) {
    let action = ctx.request.body.action;
    let userId = parseInt(ctx.params.id);
    if (ctx.state.payload.userId !== userId) return ctx.invalid();
    if (action === 'UPDATE_PASSWORD') {
      let oldP = ctx.request.body.oldPassword;
      let newP = ctx.request.body.newPassword;
      let secP = ctx.request.body.secPassword;
      let res = await UserService.changePassword(userId, oldP, newP, secP);
      if (res.res) {
        ctx.success(200, { id: res.data.id });
      } else {
        ctx.error(500, res.errMsg);
      }
      return;
    }
    if (action === 'UPDATE_INFO') {
      let name = ctx.request.body.name;
      let sex = parseInt(ctx.request.body.sex);
      let res = await UserService.updateInfo(userId, { name, sex });
      if (res.res) {
        ctx.success(200, { id: res.data.id });
      } else {
        ctx.error(500, res.errMsg);
      }
      return;
    }
    ctx.error(500, 'Invalid Action');
  }
}