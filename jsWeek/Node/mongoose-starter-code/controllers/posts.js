
// Haven't looked at real models yet so for now we'll use this array
/*var posts = [{
  id: 0,
  title: "Post 1",
  body: "This is the first post"
},
{
    id: 1,
    title: "Post 2",
    body: "This is the second post"
},
{
    id: 2,
    title: "Post 3",
    body: "This is the third post"
}]; */

var Post = require('../models/post');


// INDEX - GET /
function indexPost(req , res) {

 Post.find({}, function(err, posts){
   res.render("posts/index" , {
   title: "Posts",
   posts: posts
   });
 });

}

// SHOW - GET /:id
function showPost(req , res) {
  Post.findById(req.params.id,function(err,post){
    if(!post ) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);
    res.render("posts/show" , 
    {
      title: "Post",
      post: post
    })
});

 
}

// EDIT - GET /:id/edit
function editPost(req , res) {

  Post.findById(req.params.id , function(err, post) {

    // check for errors or for no object found
    if(!post) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);

    res.render("posts/edit" , {
      title: "Post",
      post: post
    });
});

}

// NEW - GET /new
function newPost(req , res) {

  // create an empty post
  var newPost = {
    id: "",
    title: "",
    body: "",
    //rating: ""
  }

  res.render("posts/new" , {
    title: "New Post",
    post: newPost
  });

}

// DELETE - DELETE /:id
function deletePost(req , res) {

  // tell the data store to remove the post with the id in the request
  Post.findByIdAndRemove(req.params.id,function(err){
   res.redirect("/"); 
  })
  
  // redirect to a GET request
  
  
}

// UPDATE - UPDATE /:id
function updatePost(req , res) {

  // data is gathered by body parser animationd placed in req.body
    
    // get the post object from our data store
    Post.findByIdAndUpdate(req.params.id,{$set: req.body},function(err,post){
      res.redirect("/");
 
    });
    
    // redirect the user to a GET route. We'll go back to the INDEX.
    
}

// CREATE - POST /
function createPost(req , res) {

  // data is gathered by body parser and placed in req.body
  
  // create a new post object with that data
  var post =  new Post(req.body);
  
 
  // data is gathered by body parser and placed in req.body

  // ask mongoose to save the data for us and wait for the response
  Post.create( req.body , function(err, post){
  
    // check for errors and return 500 if there was a problem
    if(err)console.log(err);;
  
    // redirect the user to a GET route. We'll go back to the INDEX.
   res.redirect("/");
  })

}



// export all our controller functions in an object
module.exports = {

  index:indexPost,
  show: showPost,
  edit: editPost,
  new: newPost,
  delete: deletePost,
  update: updatePost,
  create: createPost

}