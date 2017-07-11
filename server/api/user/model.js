const Sequelize = require('sequelize');
const db = require('./../../config/db');

let User = db.define('user', {
    personal: Sequelize.NUMBER,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    isAdmin: Sequelize.BOOLEAN
});

module.exports = User;