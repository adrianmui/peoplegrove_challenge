const router = require('express').Router();
const passport = require('./local');

const User = require('./../api/user/model');

router.post('/register', (req, res, next)  => {
  return User.find({where : {email: req.body.email}})
  .then((response) => {
    passport.authenticate('local', (err, user, info) => {
      if (user) { handleResponse(res, 200, 'success'); }
    })(req, res, next);
  })
  .catch((err) => { handleResponse(res, 500, 'error'); });
});

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

module.exports = router