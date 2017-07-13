let auth = {};
// route middleware to make sure a user is logged in
auth.isLoggedIn = function(req, res, next) {
    console.log(`are you athenticated: ${req.isAuthenticated()}`);
    console.log(`user is ${req.user.get('email')}`)
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
};

auth.loginRedirect = function(req, res, next) {
  if (req.user) return res.status(401).json(
    {status: 'You are already logged in'});
  return next();
};

auth.loginRequired = function(req, res, next) {
  if (!req.user) {
    res.status(401).json({status: 'Please log in'});
  }
  return next();
};

auth.adminRequired = function(req, res, next) {
  if (!req.user) res.status(401).json({status: 'Please log in'});
  return knex('users').where({username: req.user.username}).first()
  .then((user) => {
    if (!user.admin) res.status(401).json({status: 'You are not authorized'});
    return next();
  })
  .catch((err) => {
    res.status(500).json({status: 'Something bad happened'});
  });
}



module.exports = auth;