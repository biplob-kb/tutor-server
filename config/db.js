const { Sequelize } = require("sequelize");
const { dbName, dbUser, dbPassword } = require("../secret");

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: "localhost",
  dialect: "postgres",
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connectDb, sequelize };
