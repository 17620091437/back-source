module.exports = [
  {
    method: 'post',
    path: '/sendMail',
    action: 'mail.sendMail'
  },
  {
    method:'post',
    path:'/upload',
    action:'upload.upload'
  }
]