var express = require('express');
var router = express.Router();

//adding my own module
var fortune = require('../lib/fortunes');

/* GET home page. */
router.get('/', function(req, res, next) {
  //this is one way of accessing variables from another module. this is now moved to our own module in lib.
  // var fortunes = req.app.get('fortunes');
  // var fortuneRandom = fortunes[Math.floor(Math.random() * fortunes.length)];
  // res.render('about', { title: 'Express' , fortune : fortuneRandom });

  res.render('about', { title: 'Express' , fortune : fortune.getFortune() });

});

module.exports = router;
