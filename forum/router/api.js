module.exports = [
  {
    method: 'get',
    path: '/demo',
    action: 'demo.demo'
  },
  {
    method: 'post',
    path: '/login',
    action: 'user.login'
  },
  {
    method: 'post',
    path: '/user',
    action: 'user.register'
  }
]