'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: {
     type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    }
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Employee,{
      foreignKey: 'companyId',
      as: 'employees',
    });
  };
  return Company;
};