const sequelize = require('sequelize');
module.exports = {
  async getTagsList(req, res) {
    let tags = await Tag.findAll({
      group: 'content',
      attributes: ['content', [sequelize.fn('COUNT', sequelize.col('content')), 'count']],
    });
    res.send({
      status: 200,
      data: tags
    })
  }
}