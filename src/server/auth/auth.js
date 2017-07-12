let auth = {};
// route middleware to make sure a user is logged in
auth.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
};

module.exports = auth;