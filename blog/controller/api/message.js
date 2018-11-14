module.exports = {
  // 添加留言
  async postMessage(req, res) {
    let postDate = req.body;
    let newMessage = await Message.create(postDate);
    res.send({
      status: 200,
    })
  },
  // 删除留言
  async deleteMessage(req, res) {
    let MessageId = req.params.id;
    await Message.destroy({
      where: {
        id: MessageId,
      }
    })
    res.send({
      status: 200
    })
  },
  // 获取所有留言
  async getMessageList(req, res) {
    let listRes = await Message.findAndCountAll({
      attributes: { exclude: ['deleted_at', 'updated_at'] },
    });
    res.send({
      status: 200,
      data: listRes.rows,
      count: listRes.count,
    })
  }
}