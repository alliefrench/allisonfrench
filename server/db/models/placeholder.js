const Sequelize = require('sequelize');
const db = require('../index');

const Placeholder = db.define('placeholder', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Placeholder;
