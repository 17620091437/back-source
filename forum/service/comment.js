module.exports = {
  async getList(postId, userId = 0, page = 1, pageCount = 10) {
    if (!postId) return { res: false, errMsg: '缺少帖子ID' };
    let data = await Comment.findAndCountAll({
      where: { post_id: postId },
      attributes: { exclude: ['version', 'deleted_at', 'updated_at'] },
      offset: (page - 1) * pageCount,
      limit: pageCount,
      include: [
        {
          model: User,
          attributes: ['id', 'account', 'name', 'follow', 'sex', 'fans', 'avator'],
          include: [
            {
              model: User,
              as: 'fans-list',
              attributes: ['id', 'account', 'name', 'follow', 'sex', 'fans', 'avator'],
              through: {
                attributes: [],
                where: { fans_user_id: userId }
              }
            }
          ]
        },
      ]
    });
    return { res: true, data };
  },
  async create(userId, postId, content) {
    let res = false;
    if (!userId) return { res, errMsg: '缺少用户id' };
    if (!postId) return { res, errMsg: '缺少帖子id' };
    if (!content) return { res, errMsg: '缺少内容' };
    let user = await User.findOne({ where: { id: userId } });
    if (!user) return { res, errMsg: '用户不存在' };
    let post = await Post.findOne({ where: { id: postId } });
    if (!post) return { res, errMsg: '帖子不存在' };
    let data = await Comment.create({
      user_id: userId,
      post_id: postId,
      content
    });
    return {
      res: true,
      data: {
        id: data.id,
        post_id: data.post_id,
        user_id: data.user_id,
        content: data.content,
        created_at: data.created_at,
        like_count: data.like_count,
      }
    };
  },
  async delete(commentId, userId) {
    let res = false;
    let comment = await Comment.findByPk(commentId);
    if (!comment) return { res, errMsg: '评论不存在' };
    if (comment.user_id !== userId) return { res, errMsg: '没有权限' };
    await comment.destroy();
    return { res: true, data: { id: commentId } };
  }

}