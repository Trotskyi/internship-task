'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    course_code: DataTypes.STRING,
    course_title: DataTypes.STRING,
    course_unit: DataTypes.INTEGER,
    dept_id: DataTypes.INTEGER,
    level_id: DataTypes.INTEGER
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};