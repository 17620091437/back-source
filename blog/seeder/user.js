const tableName = 'user';
const Sequelize = require('sequelize');
let data = [
  {
    name: 'crazyball',
    account: 'crazyball',
    password: '11A717CB6C7873F5AC4F60DDE4210277',
    power_level: 1,
  },
  {
    name: '游客',
    account: 'guest',
    password: '11A717CB6C7873F5AC4F60DDE4210277',
    power_level: 0,
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
