require("dotenv").config();

const port = process.env.PORT || 4000;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const jwtAccessKey = process.env.JWT_ACCESS_KEY;

module.exports = { port, dbName, dbUser, dbPassword, jwtAccessKey };
