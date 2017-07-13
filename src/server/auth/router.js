const router = require('express').Router();
const passport = require('./local');
const auth = require('./auth');

const User = require('./../api/user/model');

router.get('/facebook', auth.loginRedirect,
  passport.authenticate('facebook', {scope: 'email', session: false}));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

router.post('/register', auth.loginRedirect, (req, res, next)  => {
  return User.create({email: req.body.email})
    .then((response) => {
      passport.authenticate('local', (err, user, info) => {
        if (user) {
          req.logIn(user, err => {
            if (err) handleResponse(res, 500, 'error');
            handleResponse(res, 200, 'success'); 
          });
        }
      })(req, res, next);
    })
    .catch((err) => { handleResponse(res, 500, 'error'); });
});

router.post('/login', auth.loginRedirect, (req, res, next) => {


  passport.authenticate('local', (err, user, info) => {
    console.log(`adrian snoping ${JSON.stringify(user.get({plain: true}))}`)
    if (err) { handleResponse(res, 500, 'error'); }
    if (!user) { handleResponse(res, 404, 'User not found'); }
    if (user) {
      req.logIn(user, function (err) {
        if (err) { handleResponse(res, 500, 'error'); }
        handleResponse(res, 200, 'success');
      });
    }
  })(req, res, next);
});

router.get('/logout', auth.loginRequired, (req, res, next) => {
  req.logout();
  handleResponse(res, 200, 'success');
});

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

module.exports = router;