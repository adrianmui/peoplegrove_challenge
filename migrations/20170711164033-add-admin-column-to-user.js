'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Users', // name of table
      'admin', // name of attribute
      Sequelize.BOOLEAN
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Users', // name of table
      'admin' //name of column
    );
  }
};
