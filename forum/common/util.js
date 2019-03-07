const crypto = require('crypto');
module.exports = {
  // 检测帐号
  checkAccount(account) {
    return /^[a-zA-Z0-9]{5,16}$/.test(account);
  },
  // 检测密码
  checkPassword(password) {
    return /^[a-zA-Z0-9]{5,16}$/.test(password);
  },
  // 检测名称
  checkName(name) {
    return /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,12}$/.test(name);
  },
  // MD5加密
  encrypt(string) {
    // 加盐
    string = string + 'CRAZYBALL';
    let result;
    // 加密5次
    for (let i = 0; i < 5; i++) {
      result = crypto.createHash('md5').update(string).digest('hex');
    }
    return result.toUpperCase();
  }
}