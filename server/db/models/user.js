const Sequelize = require('sequelize');
const db = require('../index');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = User;
