const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('register', {
    concept: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};