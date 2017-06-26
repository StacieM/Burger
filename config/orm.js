var connection = require('../config/connection.js');

// connect to database
connection.connect(function(err){
    if (err){
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});

// mysql commands
var orm = {

    // selectAll function
    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', function (err, result){
            if (err) throw err;
            return(result);
        });
    },
     // insertOne function
     insertOne: function(burger_name, callback) {
         connection.query('INSERT INTO burgers SET ?', {burger_name: burger_name, devoured: false, date: timestamp}, function (err, result){
            if (err) throw err;
            return(result);
         });
     },
     // updateOne function
     updateOne: function(id, callback){
         connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: id}], function (err, result) {
            if (err) throw err;
            return(result);
         });
     }
}
module.exports = orm;