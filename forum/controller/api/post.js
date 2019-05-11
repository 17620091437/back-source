module.exports = {
  async getList(ctx) {
    let page = ctx.query.page;
    let pageCount = 10;
    let data = await PostService.getList(page, pageCount);
    ctx.success(200, data);
  },
  async getById(ctx) {
    let id = ctx.params.id;
    let data = await PostService.getById(id);
    if (!data) return ctx.error(404, 'resource not found');
    ctx.success(200, data);
  },
  async create(ctx) {
    let userId = parseInt(ctx.request.body.userId);
    if (ctx.state.payload.userId !== userId) return ctx.invalid();
    let res = await PostService.create(userId, ctx.request.body.topicId, ctx.request.body.title, ctx.request.body.content);
    if(res.res){
      ctx.success(200,res.data);
    }else{
      ctx.error(500,res.errMsg);
    }
  },
  async delete(ctx) {
    let userId = ctx.state.payload.userId;
    let res = await PostService.delete(ctx.params.id,userId);
    if(res){
      ctx.success(200,res.data);
    }else{
      ctx.error(500,res.errMsg);
    }
  },
  async update(ctx) {
    let userId = parseInt(ctx.request.body.userId);
    if (ctx.state.payload.userId !== userId) return ctx.invalid();
    let res = await PostService.update(ctx.params.id,userId, ctx.request.body.topicId, ctx.request.body.title, ctx.request.body.content);
    if(res.res){
      ctx.success(200,res.data);
    }else{
      ctx.error(500,res.errMsg);
    }
  }
}