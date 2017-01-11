var express = require('express');
//using just the Router constructor in express
var postRouter = express.Router();
//requiring the post controller
var postsController = require('../controllers/posts');


//new has to come before show
postRouter.get("/new",postsController.new);
//better convention for writing routes 
postRouter.route("/")
	.get(postsController.index)
	.post(postsController.create);
postRouter.route("/:id")
	.get(postsController.show)
	.put(postsController.update)
	.delete(postsController.delete);

//Edit, hardest to remember...
postRouter.get("/:id/edit",postsController.edit);


module.exports = postRouter;
