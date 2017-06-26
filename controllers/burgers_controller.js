
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Create routes and redirect to index
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page, render burgers
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});


// Create New Burger
router.post('/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});


// Devour Burger
router.post('/create/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

  burger.updateOne({
      devourd: true
      }, condition, function(data) {
    res.redirect('/index');
  });
});

// Export routes
module.exports = router;