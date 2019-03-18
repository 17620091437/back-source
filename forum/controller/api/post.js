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
  },
  async delete(ctx) {
  },
  async update(ctx) {
  }
}