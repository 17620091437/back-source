const { md5 } = require('../../common/util');
module.exports = {
  async login(req, res) {
    let account = req.body.account;
    let password = req.body.password;
    // 加密密码
    password = md5(password);
    let user = await User.findOne({
      where: { account },
    });
    if (!user) {
      throw new Error('账户不存在！');
    } else if (user.password === password) {
      res.send({
        status: 200,
        data: { id: user.id, name: user.name, avator: user.avator },
      });
    } else {
      throw new Error('密码错误！');
    }
  },
  async getUserList(req, res) {
    let data = await User.findAndCountAll({
      attributes: { exclude: ['password', 'deleted_at'] },
    });
    res.send({
      status: 200,
      data: data.rows,
      count: data.count,
    });
  },
  // 获取用户详情
  async getUser(req, res) {
    let id = req.params.id;
    let data = await User.findById(id, {
      attributes: { exclude: ['password', 'deleted_at', 'created_at', 'updated_at'] },
    });
    res.send({
      status: 200,
      data,
    });
  },
  // 修改用户详情
  async putUser(req, res) {
    let id = req.params.id;
    let postData = req.body;
    if (postData.newPassword) {
      // 修改密码
      if (postData.newPassword === postData.newConfirmPassword) {
        let user = await User.findById(id);
        if (user.password !== md5(postData.oldPassword)) {
          throw new Error(`旧密码不正确！`);
        } else {
          await user.update({
            password: md5(postData.newPassword),
          });
        }
      } else {
        throw new Error(`两次密码输入不相同！`);
      }
    } else {
      let data = await User.update(
        {
          account: postData.account,
          name: postData.name,
          avator: postData.avator,
          power_level: postData.power_level,
        },
        { where: { id } }
      );
    }
    res.send({
      status: 200,
    });
  },
  // 添加用户
  async postUser(req, res) {
    let id = req.params.id;
    let postData = req.body;
    if (postData.password !== postData.confirmPassword) throw new Error(`密码不一致！`);
    let password = md5(req.body.password);
    let data = await User.create({
      account: postData.account,
      name: postData.name,
      avator: postData.avator,
      power_level: postData.power_level,
      password,
    });
    res.send({
      status: 200,
    });
  },
  // 删除用户
  async deleteUser(req, res) {
    let id = req.params.id;
    let data = await User.destroy({ where: { id } });
    res.send({
      status: 200,
    });
  },
};
