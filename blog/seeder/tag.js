const tableName = 'tag';
const Sequelize = require('sequelize');
let data = [
  {
    article_id: 1,
    content: '内容啊内容啊',
  },
  {
    article_id: 1,
    content: '内容啊嘻嘻嘻内容啊',
  },
  {
    article_id: 2,
    content: 'hahahha'
  }
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
