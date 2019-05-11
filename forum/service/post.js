module.exports = {
  async getList(page = 1, pageCount = 10) {
    let data = await Post.findAndCountAll({
      offset: (page - 1) * pageCount,
      limit: pageCount,
      attributes: { exclude: ['content'] },
      include: [
        { model: User, attributes: ['id', 'name', 'follow', 'sex'] },
        { model: Topic, attributes: ['id', 'title'] }
      ]
    });
    return data;
  },
  async getById(id) {
    let data = await Post.findByPk(id, {
      include: [
        { model: User, attributes: ['id', 'name', 'follow', 'sex'] },
        { model: Topic, attributes: ['id', 'title'] }
      ]
    });
    return data;
  },
  async create(userId,topicId,title,content){
    let res = false;
    if(!userId) return {res,errMsg:'缺少用户id'};
    if(!topicId) return {res,errMsg:'缺少主题'};
    if(!title) return {res,errMsg:'缺少标题'};
    if(!content) return {res,errMsg:'缺少内容'};
    let data = await Post.create({
      user_id:userId,
      topic_id:topicId,
      title,
      content
    });
    return {res:true,data}
  },
  async update(postId,userId,topicId,title,content){
    let res = false;
    if(!postId) return {res,errMsg:'缺少帖子id'};
    if(!userId) return {res,errMsg:'缺少用户id'};
    if(!topicId) return {res,errMsg:'缺少主题'};
    if(!title) return {res,errMsg:'缺少标题'};
    if(!content) return {res,errMsg:'缺少内容'};
    let data = await Post.update({
      id:postId,
      user_id:userId,
      topic_id:topicId,
      title,
      content
    });
    return {res:true,data}
  },

  async delete(postId,userId){
    let res = false;
    let post = await Post.findOne({
      where:{id:postId,user_id:userId}
    });
    if(!post) return {res,errMsg:'帖子不存在'};
    let data = await post.destroy();
    return {res:true,data};
  }

}