const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const config = require('./../config/config');
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

passport.use(new FacebookStrategy({
    clientID: config.facebook.APP_ID,
    clientSecret: config.facebook.APP_SECRET,
    callbackURL: `http://localhost:${config.port}/auth/facebook/callback`,
    profileFields: ['email']
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({where: { email: profile.emails[0].value }})
      .spread((userResult, created) => {
        done(null,userResult);
      })
      .catch(err => done(err))
  }  
));

module.exports = passport;