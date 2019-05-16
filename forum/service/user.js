const util = require('../common/util');
module.exports = {
  // 登录
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
  // 注册
  async registerUser(account, password, confirmPassword, name, sex) {
    let res = false;
    if (!util.checkAccount(account)) return { res, errMsg: '账号格式非法！' };
    if (!util.checkPassword(password)) return { res, errMsg: '密码格式非法！' };
    if (password !== confirmPassword) return { res, errMsg: '两次密码不一致' };
    if (!util.checkName(name)) return { res, errMsg: '昵称格式非法！' };
    // 判断帐号是否存在
    let user = await User.findOne({ where: { account } });
    if (user) return { res, errMsg: '帐号已存在' };
    password = util.encrypt(password);
    let data = await User.create({ account, password, name, sex }, {
      attributes: ['id', 'account'],
    });
    return { res: true, data };
  },

  // 改密码
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
  },

  // 改信息
  async updateInfo(userId, info) {
    let res = false;
    let name = info.name;
    let sex = info.sex;
    try {
      let user = await User.findOne({ where: { id: userId } });
      if (!user) return { res, errMsg: '帐号不存在' };
      if (!util.checkName(name)) return { res, errMsg: '名称格式非法' };
      if (!/^[0,1,2]$/.test(sex)) return { res, errMsg: '性别格式非法' };
      user = await user.update({ name, sex });
      return { res: true, data: user };
    } catch (err) {
      return { res: false, errMsg: err.message };
    }
  },

  // 关注
  async follow(fansUserId, followUserId) {
    let res = false;
    if (!fansUserId) return { res, errMsg: '非法用户id' };
    if (!followUserId) return { res, errMsg: '关注用户id非法' };
    if (fansUserId == followUserId) return { res, errMsg: '用户id和关注用户id不可相等' };
    let user = await User.findByPk(followUserId);
    if (!user) return { res, errMsg: '关注用户id不存在' };
    let relation = FollowRelation.find({ where: { fans_user_id: fansUserId, follow_user_id: followUserId } });
    if (relation.length > 0) return { res, errMsg: '重复关注' };
    let data = await FollowRelation.create({
      fans_user_id: fansUserId,
      follow_user_id: followUserId
    });
    await user.increment('follow', { by: 1 });
    return { res: true }
  },

  // 关注列表
  async getFollowList(userId) {
    let res = false;
    if (!userId) return { res, errMsg: '缺少用户id' };
    let data = await User.findOne({
      where: { id: userId },
      attributes: ['id', 'account', 'name', 'follow', 'sex'],
      include: [
        {
          model: User,
          as: 'follow-list',
          attributes: ['id', 'account', 'name', 'follow', 'sex'],
          through: {
            attributes: [],
          }
        }
      ]
    });
    if (!data.id) return { res, errMsg: '用户不存在' };
    return { res: true, data };
  },

  // 粉丝列表
  async getFansList(userId) {
    let res = false;
    if (!userId) return { res, errMsg: '缺少用户id' };
    let data = await User.findOne({
      where: { id: userId },
      attributes: ['id', 'account', 'name', 'follow', 'sex'],
      include: [
        {
          model: User,
          as: 'fans-list',
          attributes: ['id', 'account', 'name', 'follow', 'sex'],
          through: {
            attributes: [],
          }
        }
      ]
    });
    if (!data.id) return { res, errMsg: '用户不存在' };
    return { res: true, data };
  }
}