const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const User = require('./../api/user/model');

const options = {
  usernameField: 'email',
  passwordField: 'email',
  session: false
};

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
  // check to see if the username exists
  User.find({
    where: {email: username}
  })
    .then(user => {
      if (!user) return done(null, false)
      
      return done(null, user);
    })
    .catch(err => done(err));
}));

module.exports = passport;