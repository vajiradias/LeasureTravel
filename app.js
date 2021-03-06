var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home');
var about = require('./routes/about');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req,res,next) {
  res.locals.showTest = app.get('env') != 'production' && req.query.test === '1' ;
  next();
})

app.use('/', index);
app.use('/users', users);
app.use('/home', home);
app.use('/about', about);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//one way to add variables to be accessible globaly
// var fortunes = [
//     "Conquer your fears or they will conquer you.",
//   "Rivers need springs.",
//   "Do not fear what yo don't know.",
//   "You will have a pleasant surprise.",
//   "Whenever possible, keep it simple."
// ];
// app.set('fortunes', fortunes);

module.exports = app;
