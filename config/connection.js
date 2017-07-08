var mysql = require("mysql");
var connection;

// add JAWSDB for heroku
// if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection("mysql://ken6aforizal9umh:xc9ohcjftjp721f9@jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/b2efhhawskb86v8k");
// } else {
//   connection = mysql.createConnection({
//     host: "127.0.0.1",
//     port: 8889,
//     user: "root",
//     password: "root",
//     database: "burgers_db"
//   });
// }

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