'use strict';
module.exports = (sequelize, DataTypes) => {
  const LectureHall = sequelize.define('LectureHall', {
    hall_name: DataTypes.STRING,
    alias: DataTypes.STRING,
    capacity: DataTypes.STRING,
    long: DataTypes.BIGINT,
    lat: DataTypes.BIGINT,
    hall_pix: DataTypes.BLOB,
    school_id: DataTypes.INTEGER
  }, {});
  LectureHall.associate = function(models) {
    // associations can be defined here
  };
  return LectureHall;
};