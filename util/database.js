const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'root123$$$', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
