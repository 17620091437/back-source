module.exports = {
  async getList(ctx) {
    let data = await TopicService.getList();
    ctx.success(200, data);
  }
}