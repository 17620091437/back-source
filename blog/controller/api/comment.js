module.exports = {
  // 添加评论
  async postComment(req, res) {
    let postDate = req.body;
    // 默认设置游客评论
    postDate.user_id = postDate.user_id ? postDate.user_id : 2;
    let newComment = await Comment.create(postDate);
    let comment = await Comment.findById(newComment.id, {
      include: [{
        model: User,
      }]
    })
    res.send({
      status: 200,
      data: comment,
    })
  },
  // 删除评论
  async deleteComment(req, res) {
    let commentId = req.params.id;
    await Comment.destroy({
      where: {
        id: commentId,
      }
    })
    res.send({
      status: 200
    })
  },
  // 获取所有评论
  async getCommentList(req, res) {
    let listRes = await Comment.findAndCountAll({
      attributes: { exclude: ['deleted_at', 'updated_at'] },
      include: [
        {
          model: Article,
          attributes: ['title'],
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ]
        },
        {
          model: User,
          attributes: ['name', 'avator']
        }
      ]
    });
    res.send({
      status: 200,
      data: listRes.rows,
      count: listRes.count,
    })
  }
}