module.exports = {
  async getList(userId = 0, page = 1, pageCount = 10, topicId = 0, selectedUserId) {
    let where = {};
    if (topicId !== 0) {
      where.topic_id = topicId;
    }
    if (selectedUserId) {
      where.user_id = selectedUserId;
    }
    let data = await Post.findAndCountAll({
      offset: (page - 1) * pageCount,
      where,
      limit: pageCount,
      attributes: { exclude: ['content'] },
      order: [['created_at', 'DESC']],
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
                where: { 'fans_user_id': userId }
              }
            }
          ]
        },
        { model: Topic, attributes: ['id', 'title'] }
      ]
    });
    return data;
  },
  async getById(id) {
    let data = await Post.findByPk(id, {
      include: [
        {
          model: User,
          attributes: ['id', 'account', 'name', 'follow', 'sex', 'fans', 'avator'],
        },
        { model: Topic, attributes: ['id', 'title'] }
      ]
    });
    return data;
  },
  async create(userId, topicId, title, content) {
    let res = false;
    if (!userId) return { res, errMsg: '缺少用户id' };
    if (!topicId) return { res, errMsg: '缺少主题' };
    if (!title) return { res, errMsg: '缺少标题' };
    if (!content) return { res, errMsg: '缺少内容' };
    let user = await User.findOne({ where: { id: userId } });
    if (!user) return { res, errMsg: '用户不存在' };
    let topic = await Topic.findOne({ where: { id: topicId } });
    if (!topic) return { res, errMsg: '主题不存在' };
    let data = await Post.create({
      user_id: userId,
      topic_id: topicId,
      title,
      content
    });
    return { res: true, data }
  },
  async update(postId, userId, topicId, title, content) {
    let res = false;
    if (!postId) return { res, errMsg: '缺少帖子id' };
    if (!userId) return { res, errMsg: '缺少用户id' };
    if (!topicId) return { res, errMsg: '缺少主题' };
    if (!title) return { res, errMsg: '缺少标题' };
    if (!content) return { res, errMsg: '缺少内容' };
    let post = await Post.findByPk(postId);
    if (!post) return { res, errMsg: '帖子不存在' };
    if (post.user_id !== userId) return { res, errMsg: '没有权限' };
    await post.update({
      topic_id: topicId,
      title,
      content
    });
    return { res: true, data: { id: postId } }
  },

  async delete(postId, userId) {
    let res = false;
    let post = await Post.findByPk(postId);
    if (!post) return { res, errMsg: '帖子不存在' };
    if (post.user_id !== userId) return { res, errMsg: '没有权限' };
    await post.destroy();
    return { res: true, data: { id: postId } };
  }

}