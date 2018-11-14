const util = require('../../common/util');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = {
  // 获取单页文章
  async getPageArticles(req, res) {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let query = req.query.s;
    let skip = (page - 1) * limit;
    console.log(query)
    let where = query ? { title: { [Op.like]: `%${query}%` } } : {};
    let data = await Article.findAndCountAll({
      attributes: { exclude: ['deleted_at', 'content'] },
      order: [['created_at', 'DESC']],
      where,
      include: [
        {
          model: User,
          attributes: ['name']
        },
        {
          model: Tag,
          attributes: ['content']
        }
      ]
    })
    res.send({
      status: 200,
      data: data.rows,
      count: data.count,
    })
  },
  // 获取总文章数
  async getArticlesCount(req, res) {
    let data = await Article.count()
    res.send({ status: 200, data })
  },
  // 获取文章详情
  async getArticleDetail(req, res) {
    let id = req.params.id;
    let data = await Article.findOne({
      where: { id },
      order: [[Comment, 'created_at', 'DESC']],
      attributes: { exclude: ['deleted_at'] },
      include: [
        {
          model: User,
          attributes: ['name', 'avator']
        },
        {
          model: Tag,
          attributes: ['content']
        },
        {
          model: Comment,
          attributes: { exclude: ['deleted_at'] },
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ]
        }
      ]
    })
    res.send({
      status: 200,
      data: data,
    })
  },
  // 获取所有文章
  async getAllArtilces(req, res) {
    let data = await Article.findAndCountAll({
      order: [['created_at', 'DESC']],
      attributes: { exclude: ['deleted_at', 'content', 'summary', 'cover'] },
      include: [
        {
          model: User,
          attributes: ['name']
        },
        {
          model: Tag,
          attributes: ['content']
        }
      ]
    })
    res.send({
      status: 200,
      data: data.rows,
      count: data.count,
    })
  },
  // 新建文章
  async postArticle(req, res) {
    let title = req.body.title;
    let tags = req.body.tags;
    let summary = req.body.summary;
    let content = req.body.content;
    let userId = req.body.user_id;
    let cover = req.body.cover;
    // 检验参数
    if (!title) return res.status(500).send({ status: 500, msg: '缺少标题' });
    if (!userId) return res.status(500).send({ status: 500, msg: '缺少用户id' });
    if (!tags) return res.status(500).send({ status: 500, msg: '缺少标签' });
    if (!summary) return res.status(500).send({ status: 500, msg: '缺少简介' });
    if (!content) return res.status(500).send({ status: 500, msg: '缺少内容' });
    // 检验用户id真实性
    let user = await User.findOne({ where: { id: userId } });
    if (!user) return res.status(500).send({ status: 500, msg: '用户不存在' });
    let newArticle = await Article.create({
      title: title,
      user_id: userId,
      summary: summary,
      content: content,
      cover: cover,
    })
    tags = tags.split(',');
    await Promise.all(tags.map(tag => {
      return Tag.create({
        article_id: newArticle.id,
        content: tag,
      })
    }))
    res.send({
      status: 200,
      data: newArticle.id
    })
  },
  // 更新文章
  async putArticle(req, res) {
    let title = req.body.title;
    let tags = req.body.tags;
    let summary = req.body.summary;
    let content = req.body.content;
    let userId = req.body.user_id;
    let cover = req.body.cover;
    let articleId = req.params.id;
    // 检验参数
    if (!articleId) return res.status(500).send({ status: 500, msg: '缺少文章id' });
    if (!title) return res.status(500).send({ status: 500, msg: '缺少标题' });
    if (!userId) return res.status(500).send({ status: 500, msg: '缺少用户id' });
    if (!tags) return res.status(500).send({ status: 500, msg: '缺少标签' });
    if (!summary) return res.status(500).send({ status: 500, msg: '缺少简介' });
    if (!content) return res.status(500).send({ status: 500, msg: '缺少内容' });
    // 检验用户id真实性
    let user = await User.findOne({ where: { id: userId } });
    if (!user) return res.status(500).send({ status: 500, msg: '用户不存在' });
    // 检验用户id与文章匹配
    let article = await Article.findOne({ where: { id: articleId, user_id: userId } });
    if (!article) return res.status(500).send({ status: 500, msg: '文章与用户不匹配，无权修改' });
    await Article.update({
      title: title,
      summary: summary,
      content: content,
      cover: cover,
    },
      {
        where: {
          id: articleId
        }
      })
    tags = tags.split(',');
    await Tag.destroy({
      where: { article_id: articleId }
    });
    await Promise.all(tags.map(tag => {
      return Tag.create({
        article_id: articleId,
        content: tag,
      })
    }))
    res.send({
      status: 200,
    })
  },
  // 删除文章
  async deleteArticle(req, res) {
    let id = req.params.id;
    await Article.destroy({
      where: { id },
    })
    res.send({
      status: 200,
    })
  },
  // 增加文章阅读数
  async read(req, res) {
    let id = req.query.article_id;
    if (!id) throw new Error('缺少文章ID！');
    let article = await Article.findById(id);
    if (!article) throw new Error('文章不存在！');
    article.read += 1;
    await article.save();
    res.send({
      status: 200,
    })
  },
  // 增加文章阅读数
  async like(req, res) {
    let id = req.query.article_id;
    if (!id) throw new Error('缺少文章ID！');
    let article = await Article.findById(id);
    if (!article) throw new Error('文章不存在！');
    article.like += 1;
    await article.save();
    res.send({
      status: 200,
    })
  }
}