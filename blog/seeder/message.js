const tableName = 'message';
const Sequelize = require('sequelize');
let data = [
  {
    email: 'crazyball@demo.com',
    content: '内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊',
  },
  {
    email: 'crazyball@demo.com',
    content: '内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊',
  },
  {
    email: 'crazyball@demo.com',
    content: '内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊',
  },
];

data.forEach(element => {
  element.created_at = '2018-08-18 10:00:00';
  element.updated_at = '2018-08-18 10:00:00';
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
