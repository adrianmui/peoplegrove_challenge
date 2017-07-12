const express = require('express');
const path = require('path');
const app = express();

const config = require('./config/config');

const apiRouter = require('./api/api.js');
const authRouter = require('./auth/router');

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
app.use(flash()); // flash messages stored in session

// serving public folder
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// routes
app.use('/api', apiRouter);
app.use('/auth', authRouter);

// home interface page
app.get('/', function(req, res) {
    res.send(`suh`);
});

module.exports = app;
