const Task = require('./../task/model');

let stub = {};

stub.get = function(req, res, next) {
  let filter = (req.user.admin) ? {} : { UserId: req.user.id };

  Task.findAll({
    where: filter
  }).then(tasks => {
      res.send(JSON.parse(tasks))
    })
    .catch(err => next(err));
}

stub.post = function(req, res, next) {
  Task.build({
    title: req.body.title,
    delivery: req.body.delivery,
    UserId: req.user.id
  }).save()
    .then(() => res.redirect('/'))
    .catch(err => next(err));
};

stub.getOne = function(req, res, next) {
  Task.findOne({ 
    where: {id: req.params.id}
  }).then(task =>  {
      res.send(JSON.parse(task))
    })
    .catch(err => next(err));
}

stub.put = function(req, res, next) {
  let newChanges = {
    title: req.body.title,
    delivery: req.body.delivery
  };
  Task.update(newChanges, {
    where: { id: req.params.id }
  }).then(result => {
      res.send(JSON.parse(result))
    })
    .catch(err => next(err));
}

stub.destroy = function(req, res, next) {
  Task.destroy({
    where: { id: req.params.id  }
  }).then(() => res.redirect('/'))
    .catch(err => next(err));
}

module.exports = stub;