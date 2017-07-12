const router = require('express').Router();
const auth = require('./../auth/auth');

router.get('/', function(req, res) {
    options = { user: req.user}
    res.render('./index', options);
});

router.get('/login', auth.loginRedirect, function(req, res) {
    res.render('login', {message: ''});
});

module.exports = router;