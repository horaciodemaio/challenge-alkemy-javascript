const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Type', {
   type:{
    type: DataTypes.ENUM(["ingress","egress"]),
    allowNull:false,
   }
  });
};
