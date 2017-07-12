'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = require('./user');

  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    delivery: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  });

  Task.associate = function(models) {
    Task.belongTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Task;
};