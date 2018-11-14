const crypto = require('crypto');
module.exports = {
  formatDate(dateObj) {
    let year = dateObj.getFullYear();
    let month = (dateObj.getMonth() + 1) < 10 ? '0' + (dateObj.getMonth() + 1) : (dateObj.getMonth() + 1);
    let day = dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate();
    return year + '-' + month + '-' + day;
  },
  md5(str) {
    // 加盐
    str = str + 'crazyball';
    let result;
    // 加密5次
    for (let i = 0; i < 5; i++) {
      reslut = crypto.createHash('md5').update(str).digest('hex');
    }
    return reslut.toUpperCase();
  }
}