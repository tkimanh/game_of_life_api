const mysql = require("mysql");
const config = require("./config.js");

const connectDB = mysql.createConnection(config);

module.exports = connectDB;
