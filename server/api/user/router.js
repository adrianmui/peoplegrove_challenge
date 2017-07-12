const db  = require('./../../config/db');
const controller = require('./controller');
const router  = require('express').Router();

router.route('/')
  .post(controller.post);

router.route('/:id')
  .get(controller.getOne)
  .delete(controller.destroy);

module.exports = router;