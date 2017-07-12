const db = require('./../../config/db');
const Sequelize = require('sequelize');
const Task = require('./../../../../models/task')(db, Sequelize);

module.exports = Task;