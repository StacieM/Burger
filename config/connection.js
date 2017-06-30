var mysql = require("mysql");
var connection;

// add JAWSDB for heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

// connection = mysql.createConnection({
//     host: "127.0.0.1",
//     port: 8889,
//     user: "root",
//     password: "root",
//     database: "burgers_db"
//   });

// Export the Connection
connection.connect(function(err) {
  if (err) return console.log(err, err.stack);
  console.log('Connected as thread id: %s', connection.threadId);
});
module.exports = connection;