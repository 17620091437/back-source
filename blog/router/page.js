const admin = require('../controller/page/admin');
const blogPc = require('../controller/page/blog-pc');
module.exports = {
  admin: {
    path: '/admin',
    action: admin
  },
  blog_pc: {
    path: '/',
    action: blogPc,
  }
}