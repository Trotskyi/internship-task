'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    school_name: DataTypes.STRING,
    alias: DataTypes.STRING,
    logo: DataTypes.BLOB,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    location: DataTypes.STRING,
    address: DataTypes.STRING,
    established: DataTypes.STRING,
    password: DataTypes.STRING,
    long: DataTypes.BIGINT,
    lat: DataTypes.BIGINT,
    dev_id: DataTypes.INTEGER
  }, {});
  School.associate = function(models) {
    // associations can be defined here
  };
  return School;
};