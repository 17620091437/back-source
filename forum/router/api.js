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
  }
]