var mysql = require("mysql");
var connection;

// add JAWSDB for heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8889,
  user: "root",
  password: "root",
  database: "burgers_db"
});
}  

// Export the Connection
connection.connect();
module.exports = connection;
