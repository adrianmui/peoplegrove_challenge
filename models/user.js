'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    admin: { 
      type: DataTypes.BOOLEAN,
      defaultValue: false 
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Task);
  }

  return User;
};