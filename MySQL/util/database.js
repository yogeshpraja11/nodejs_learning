const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs", "root", "Mysqldone@2023", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
