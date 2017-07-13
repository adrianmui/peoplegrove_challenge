const Task = require('./../task/model');

let stub = {};

stub.get = function(req, res, next) {
  let filter = (req.user.admin) ? {} : { UserId: req.user.id };

  Task.findAll({
    where: filter
  }).then(tasks => {
      res.send(tasks.map( r => r.toJSON()));
    })
    .catch(err => ( console.log(`some herror`),next(err)));
}

stub.post = function(req, res, next) {
  console.log(`req is ${req}`);
  Task.build({
    title: req.body.title,
    delivery: req.body.delivery,
    UserId: req.user.id
  }).save()
    .then(task => {
      console.log(`task is ${task}`);
      res.send(task.get({plain : true}));
    })
    .catch(err => next(err));
};

stub.getOne = function(req, res, next) {
  Task.findOne({ 
    where: {id: req.params.id}
  }).then(task =>  {
      res.send(task.get({plain : true}));
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