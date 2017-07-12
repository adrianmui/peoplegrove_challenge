const Sequelize = require('sequelize');
const db = require('./../../config/db');
const User = require('./../../../../models/user')(db, Sequelize);

module.exports = User;