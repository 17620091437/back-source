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
  }
}