var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var orm = require("./config/orm.js");

var app = express();
var port = process.env. PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "127.0.0.1",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);

// });

app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("index", { burgers: data });

  })
})

app.post("/create", function(req, res) {
  connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [req.body.burger_name], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  })
})

app.put("/create/:id", function(req, res) {

  connection.query("UPDATE burgers SET devoured = true WHERE id = ?;", [
    req.body.id
  ], function(err, results) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.listen(port);
