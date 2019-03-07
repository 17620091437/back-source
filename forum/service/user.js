const util = require('../common/util');
module.exports = {
  async login(account, password) {
    password = util.encrypt(password);
    let res = await User.findOne({
      where: { account, password }
    });
    return res;
  },
  async registerUser(account, password, name) {
    if (!util.checkAccount(account)) throw new Error('账号格式非法！');
    if (!util.checkPassword(password)) throw new Error('密码格式非法！');
    if (!util.checkName(name)) throw new Error('名称格式非法！');
    password = util.encrypt(password);
    let res = await User.create({ account, password, name });
    return res;
  }
}