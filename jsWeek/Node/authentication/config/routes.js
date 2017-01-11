var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');
var usersController = require('../controllers/users');
var sessionsController = require('../controllers/sessions');

//sessions routes
router.route('/sessions')
            .post(sessionsController.create)
            .delete(sessionsController.delete);

router.route('/sessions/new')
            .get(sessionsController.new);


//post routes
router.route('/')
      .get(postsController.index)
      .post(postsController.create);

router.route('/new')
      .get(postsController.new)

router.route('/:id')
      .get(postsController.show)
      .put(postsController.update)
      .delete(postsController.delete);

router.route('/:id/edit')
      .get(postsController.edit);


//users routes
router.route('/users')
		.post(usersController.create);

router.route('/users/new')
		.get(usersController.new);


module.exports = router;