const express = require('express');
const path = require('path');
const app = express();

const config = require('./config/config');

const apiRouter = require('./api/api.js');

const passport = require('passport');
const flash    = require('connect-flash');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// apply middleware
require('./middleware/middleware')(app);

//passport
app.use(session({ secret: config.secret })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// serving public folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// routes
app.use('/api', apiRouter);
// interface routes
require('./../routes/index')(app, passport);

// home interface page
app.get('/', function(req, res) {
    res.render(path.join(__dirname, '..', 'views', 'index'), {title: "John Smith"});
});

module.exports = app;
