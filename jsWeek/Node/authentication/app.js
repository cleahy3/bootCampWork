var express = require('express');
var app = express();
var layouts = require('express-ejs-layouts');
var routes = require('./config/routes');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');

// connect to the database
mongoose.connect('mongodb://localhost/posts');
var User = require('./models/user');
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  // stored in database
  //resave says should sessions be resaved to database if nothing is run
  resave:false,
  //should new sessions be saved even if they're empty
  saveUninitialized: true,
  //encryption
  secret: 'spartasupersecretkey'
}));
// method override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
//load current user
app.use(function(req,res,next){
  if(!req.session.user){
    res.locals.user = false;
    next();
  }else{
    User.findById(req.session.user, function(err,user){
    if(user){
      req.user =user;
      res.locals.user = user;
    }else{
      req.session.user = null;
    }
    next(err);
  });
    
  };
});

app.use(/^\/(?!sessions|users).*/, function(req, res, next) {
  if (!req.user) {
    res.redirect('/sessions/new');
  } else {
    next();
  }
});

// tell express to use ejs for rendering templates
app.set('view engine' , 'ejs');

// use express layouts middleware too
app.use(layouts);

// add the router last
app.use(routes);

app.listen(3000 , function(){
  console.log('listening on port 3000');
});