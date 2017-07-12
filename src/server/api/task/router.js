const router = require('express').Router();
const controller = require('./controller');

router.route('/')
  .get(controller.get)
  .post(controller.post)

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.destroy)

module.exports = router;
