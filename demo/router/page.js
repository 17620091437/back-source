module.exports = [
  {
    path: '/',
    action: 'index.index'
  },
  {
    path: '/error',
    action: 'service.error'
  },
  {
    path: '/forbidden',
    action: 'service.forbidden'
  },
  {
    path: '/404',
    action: 'service.notFound'
  }
]