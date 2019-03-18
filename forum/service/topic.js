module.exports = {
  async getList() {
    let data = await Topic.findAndCountAll({
      attributes: ['id', 'title']
    });
    return data;
  }
}