var express = require('express');
var path = require('path');

var index = require('./../routes/index');
var users = require('./../routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// apply middleware
require('./middleware/middleware')(app);

// serving public folder
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/index', index);
app.use('/users', users);

// home interface page
app.get('/', function(req, res) {
    res.render(path.join(__dirname, '..', 'views', 'index'), {title: "John Smith"});
});

module.exports = app;
