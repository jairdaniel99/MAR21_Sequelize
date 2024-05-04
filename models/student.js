// import sequelize object for additional functions
const Sequelize = require("sequelize");
// import our instance of sequelize
const sequelize = require("../config");
// import course model
const Course = require("./course");

// create a model for the student table
// sequalize will automatically create a table called students
// we want to avoid the automatic pluralization of studen
const Student = sequelize.define(
  "Student",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
    },
    grade: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.FLOAT,
    },
    level: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
// define hasMany relation
Student.hasMany(Course, {
  foreignKey: "student_id",
  onDelete: "CASCADE",
});

// hasMany needs a belongsTo to work!
Course.belongsTo(Student, {
  foreignKey: "student_id",
});

module.exports = Student;
