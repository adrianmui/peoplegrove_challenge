const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const override = require('method-override');

// setup global middleware here
const sass = require('./sass_ware');
const errorHandler = require('./err_ware');

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(sass());
  app.use(cors());
  app.use(errorHandler)
  app.use(override());
};
