var express = require('express');
var router = express.Router();
//var appMod = require('../app');
//var fortunes = require('../app').fortunes;

/* GET home page. */
router.get('/', function(req, res, next) {
  var fortunes = req.app.get('fortunes');
  var fortuneRandom = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', { title: 'Express' , fortune : fortuneRandom });
});

module.exports = router;
