module.exports = [
  {
    method: 'get',
    path: '/demo',
    action: 'demo.demo'
  },
  /**
   * 用户接口
   */
  {
    method: 'post',
    path: '/login',
    action: 'user.login'
  },
  {
    method: 'post',
    path: '/user',
    action: 'user.register'
  },
  {
    method: 'put',
    path: '/user/:id',
    action: 'user.update'
  },
  /**
   * 主题接口
   */
  {
    method: 'get',
    path: '/topic',
    action: 'topic.getList'
  },
  /**
   * 帖子接口
   */
  {
    method: 'get',
    path: '/post',
    action: 'post.getList'
  },
  {
    method: 'get',
    path: '/post/:id',
    action: 'post.getById'
  },
  {
    method:'post',
    path:'/post',
    action:'post.create'
  },
  {
    method:'put',
    path:'/post',
    action:'post.update'
  },
  {
    method:'delete',
    path:'/post/:id',
    action:'post.delete'
  },
  /**
   * 评论接口
   */
  {
    method: 'get',
    path: '/comment',
    action: 'comment.getList'
  },
  {
    method: 'get',
    path: '/comment/:id',
    action: 'comment.getById'
  },
  {
    method:'post',
    path:'/comment',
    action:'comment.create'
  },
  {
    method:'put',
    path:'/comment',
    action:'comment.update'
  },
  {
    method:'delete',
    path:'/comment/:id',
    action:'comment.delete'
  },
]