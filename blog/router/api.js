const article = require('../controller/api/article');
const tag = require('../controller/api/tag');
const comment = require('../controller/api/comment');
const user = require('../controller/api/user');
const message = require('../controller/api/message');
module.exports = [
  {
    path: '/article',
    method: 'get',
    action: article.getPageArticles,
  },
  {
    path: '/article/:id',
    method: 'get',
    action: article.getArticleDetail,
  },
  {
    path: '/article_count',
    method: 'get',
    action: article.getArticlesCount,
  },
  {
    path: '/article_all',
    method: 'get',
    action: article.getAllArtilces,
  },
  {
    path: '/article',
    method: 'post',
    action: article.postArticle,
  },
  {
    path: '/article/:id',
    method: 'put',
    action: article.putArticle,
  },
  {
    path: '/article/:id',
    method: 'delete',
    action: article.deleteArticle,
  },
  {
    path: '/tag',
    method: 'get',
    action: tag.getTagsList,
  },
  {
    path: '/comment',
    method: 'post',
    action: comment.postComment,
  },
  {
    path: '/comment/:id',
    method: 'delete',
    action: comment.deleteComment,
  },
  {
    path: '/comment',
    method: 'get',
    action: comment.getCommentList,
  },
  {
    path: '/login',
    method: 'post',
    action: user.login,
  },
  {
    path: '/user',
    method: 'get',
    action: user.getUserList,
  },
  {
    path: '/user/:id',
    method: 'get',
    action: user.getUser,
  },
  {
    path: '/user/:id',
    method: 'put',
    action: user.putUser,
  },
  {
    path: '/user',
    method: 'post',
    action: user.postUser,
  },
  {
    path: '/user/:id',
    method: 'delete',
    action: user.deleteUser,
  },
  {
    path: '/message',
    method: 'get',
    action: message.getMessageList,
  },
  {
    path: '/message',
    method: 'post',
    action: message.postMessage,
  },
  {
    path: '/message/:id',
    method: 'delete',
    action: message.deleteMessage,
  },
  {
    path: '/read',
    method: 'get',
    action: article.read,
  },
  {
    path: '/like',
    method: 'get',
    action: article.like,
  }
]