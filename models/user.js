'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  });

  User.associate = function(models) {
    User.hasMany(models.Task);
  }

  return User;
};