// what is Sequelize?
// An Oj=bject Relational Mapper (ORM) used to interact with the databases
// This means we can translate database records to javascript objects and viceversa

const Sequelize = require("sequelize");

let host = "localhost";
let database = "school";
let user = "root";
let password = "hola";

//create a connection to the database
const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "mariadb",
});

// export our sequelize connection file
module.exports = sequelize;
