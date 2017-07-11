const Sequelize = require('sequelize');
const config = require('./config');

// Create shared instance to be used across models
let db = new Sequelize(config.db.databaseUrl, config.db.databaseOptions);

// testing connection
db.authenticate()
  .then(function(err) {
      console.log('Connection has been established successfully. Adrian says hi to PostGresQL.');
  })
  .catch(function(err) {
      console.log('Unable to connect to the database:', err);
  });

module.exports = db;