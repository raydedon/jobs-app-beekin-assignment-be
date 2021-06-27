var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
var cors = require("cors");

var indexRouter = require('./routes/index');
var jobsRouter = require('./routes/job.routes');

const dbConfig = require('./config/database.config.js');

var app = express();

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch(err => {
        console.log(`Could not connect to the database. Exiting now...${err}`);
        process.exit(0);
    });



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/jobs', jobsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
