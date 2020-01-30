'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    middlename: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    location: DataTypes.STRING,
    address: DataTypes.STRING,
    religion: DataTypes.STRING,
    matric_no: DataTypes.STRING,
    password: DataTypes.STRING,
    picture: DataTypes.BLOB,
    dept_id: DataTypes.INTEGER,
    level_id: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};