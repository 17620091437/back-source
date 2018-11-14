const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.DB_URL, err => {
  if (err) {
    console.log('disconnect mongoDB!!!')
    return process.exit()
  };
  console.log('connected mongoDB success...');
})
