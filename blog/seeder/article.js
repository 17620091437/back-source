const tableName = 'article';
const Sequelize = require('sequelize');
let data = [
  {
    user_id: 1,
    title: '文章一',
    summary: '简介简介简介简介简介简介简介简介',
    content: '内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊',
  },
  {
    user_id: 1,
    title: '文章2',
    summary: '简介简介简介简介简介简介简介简介',
    content: '内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊',
  },
  {
    user_id: 1,
    title: '文章333',
    summary: '简介简介简介简介简介简介简介简介',
    content: '内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊内容啊',
  },
  {
    user_id: 1,
    title: '文章444',
    summary: '简介简介简介简介简介简介简介简介',
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
