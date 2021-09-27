const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('type', {
   type:{
    type: DataTypes.ENUM(["ingress","egress"]),
    allowNull:false,
   }
  });
};
