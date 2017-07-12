var db  = require('./../../config/db');
let stub = {};

stub.get = function(req, res, next) {
  db.User.findOne({ 
    where: {id: req.params.id}
  }).then(user => req.user = user)
  .catch((err) => next(err));
}

stub.post = function(req, res, next) {
  db.User.build({
    email: req.body.email,
    admin: false
  }).save()
    .then(() => res.redirect('/'))
    .catch((err) => next(err));
};

stub.destroy = function(req, res, next) {
  db.User.destroy({
    where: { id: req.user.id  }
  }).then(() => res.redirect('/'))
    .catch((err) => next(err));
}

module.exports = stub;