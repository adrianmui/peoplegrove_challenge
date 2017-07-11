var express = require('express');
var path = require('path');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// apply middleware
require('./middleware/middleware')(app);

// serving public folder
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', index);
app.use('/users', users);

module.exports = app;
