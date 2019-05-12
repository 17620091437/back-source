module.exports = {
  async getList(ctx) {
    let page = ctx.query.page;
    let pageCount = 10;
    let postId = ctx.query.postId;
    let res = await CommentService.getList(postId, page, pageCount);
    if (res.res) {
      ctx.success(200, res.data);
    } else {
      ctx.error(500, res.errMsg);
    }
  },
  async create(ctx) {
    let userId = parseInt(ctx.state.payload.userId);
    let res = await CommentService.create(userId, parseInt(ctx.request.body.postId), ctx.request.body.content);
    if (res.res) {
      ctx.success(200, res.data);
    } else {
      ctx.error(500, res.errMsg);
    }
  },
  async delete(ctx) {
    let userId = ctx.state.payload.userId;
    let res = await CommentService.delete(ctx.params.id, userId);
    if (res.res) {
      ctx.success(200, res.data);
    } else {
      ctx.error(500, res.errMsg);
    }
  },
}