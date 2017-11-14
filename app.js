var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var index = require('./routes/index');
var movie = require('./routes/movie');
var person = require('./routes/person');


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
app.use(methodOverride('_method'))


app.use('/', index);
app.use('/movie', movie);
app.use('/person', person);

// app.get('/', (req, res, next) => {
//     const data = {'method': 'get', 'path': '/'}
//     res.render('index', data);
// });
app.get('/movie', (req, res, next) => {
    // const data = {'method': 'get', 'path': '/movie'}
    res.render('movie', data);
});
//
app.get('/person', (req, res, next) => {
    // const data = {'method': 'get', 'path': '/person'}
    res.render('person', data);
});

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

module.exports = app;
