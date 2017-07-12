const sassMiddleware = require('node-sass-middleware');
const path = require('path');

module.exports = sassMiddleware({
  src: path.join(__dirname, '..', 'src', 'sass'),
  dest: path.join(__dirname, '..', 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
})