'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = require('./user');

  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    delivery: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Task.belongsTo(User);

  return Task;
};