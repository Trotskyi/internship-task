'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define('Faculty', {
    faculty_name: DataTypes.STRING,
    alias: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    long: DataTypes.BIGINT,
    lat: DataTypes.BIGINT,
    faculty_pix: DataTypes.BLOB,
    school_id: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {});
  Faculty.associate = function(models) {
    // associations can be defined here
  };
  return Faculty;
};