'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
    designation: {
      type: DataTypes.STRING,
    }
  }, {});
  Employee.associate = function(models) {
    Employee.belongsTo(models.Company, {
      onDelete: "CASCADE",
      foreginKey: "companyId",
      references: {
        model: 'Company',
        key: 'id',
        as: 'companyId'
      }
    })
  };
  return Employee;
};