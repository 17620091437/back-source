module.exports = {
    async getList(postId,page = 1, pageCount = 10) {
      if(!postId) return {res:false,errMsg:'缺少帖子ID'};
      let data = await Comment.findAndCountAll({
        where:{post_id:postId},
        offset: (page - 1) * pageCount,
        limit: pageCount,
        include: [
          { model: User, attributes: ['id', 'name', 'follow', 'sex'] },
        ]
      });
      return {res:false,data};
    },
    async create(userId,postId,content){
      let res = false;
      if(!userId) return {res,errMsg:'缺少用户id'};
      if(!postId) return {res,errMsg:'缺少帖子id'};
      if(!content) return {res,errMsg:'缺少内容'};
      let post = await Post.findOne({where:{id:postId}});
      if(!post) return {res,errMsg:'帖子不存在'};
      let data = await Comment.create({
        user_id:userId,
        post_id:postId,
        content
      });
      return {res:true,data}
    },
    async delete(commentId,userId){
      let res = false;
      let comment = await Comment.findOne({
        where:{id:commentId,user_id:userId}
      });
      if(!comment) return {res,errMsg:'评论不存在'};
      let data = await comment.destroy();
      return {res:true,data};
    }
  
  }