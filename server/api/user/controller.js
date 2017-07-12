const db  = require('./../../config/db');
let stub = {};

stub.getOne = function(req, res, next) {
  db.User.findOne({ 
    where: {id: req.params.id}
  }).then(user => {
    res.send(JSON.parse(user));
  })
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
    where: { id: req.params.id  }
  }).then(() => res.redirect('/'))
    .catch((err) => next(err));
}

module.exports = stub;