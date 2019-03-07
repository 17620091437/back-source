const util = require('../common/util');
module.exports = {
  async login(account, password) {
    password = util.encrypt(password);
    let user = await User.findOne({
      where: { account }
    });
    let res = false;
    let errMsg = null;
    if (!user) {
      errMsg = '帐号不存在！';
      return { res, errMsg };
    }
    if (user.password !== password) {
      errMsg = '密码错误！';
      return { res, errMsg };
    }
    // 生成token
    let token = util.createToken(user.id, null);
    return { res: true, errMsg, data: user, token };
  },
  async registerUser(account, password, name) {
    if (!util.checkAccount(account)) throw new Error('账号格式非法！');
    if (!util.checkPassword(password)) throw new Error('密码格式非法！');
    if (!util.checkName(name)) throw new Error('名称格式非法！');
    password = util.encrypt(password);
    let res = await User.create({ account, password, name });
    return res;
  },
  async changePassword(userId, oldPassword, newPassword, secPassword) {
    let res = false;
    let user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return { res, errMsg: '帐号不存在' };
    }
    if (util.encrypt(oldPassword) !== user.password) {
      return { res, errMsg: '密码错误' };
    }
    if (!util.checkPassword(newPassword)) {
      return { res, errMsg: '新密码格式非法' };
    }
    if (newPassword !== secPassword) {
      return { res, errMsg: '两次密码不一致' };
    }
    // update
    await user.update({ password: util.encrypt(newPassword) });
    return { res: true, data: user }
  }
}