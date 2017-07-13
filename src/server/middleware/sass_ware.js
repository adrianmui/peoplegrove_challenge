const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const winston = require('winston');

winston.level = 'debug';

const src = path.join(__dirname, '../../sass');
const dest = path.join(__dirname, '../../../static/styles')
console.log(`src: ${src}\ndest: ${dest}`);

module.exports = sassMiddleware({
  src: src,
  dest: dest,
  debug: true,
  indentedSyntax: false,
  outputStyle: 'compressed',
  log: function (severity, key, value) { winston.log(severity, 'node-sass-middleware   %s : %s', key, value);}
});