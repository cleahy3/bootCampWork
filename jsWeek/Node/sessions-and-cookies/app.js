var express = require('express');
var app = express();
var layouts = require('express-ejs-layouts');
var session = require('express-session');
var routes = require('./config/routes');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var mongoose = require('mongoose');


app.set('view engine' , 'ejs');
// connect to the database
mongoose.connect('mongodb://localhost/posts');

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

//cookie parser
app.use(cookieParser());

app.use(function(req,res,next){
	//saving the cookie to a variable
	var views = req.cookies.views;
	//incrementing views
	views ? views ++ : views = 1;
	//adding views to the response
	res.cookie('views',views ,{ maxAge: 60*60*1000});
	next();
});

// method override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
app.use(session({
	// stored in database
	//resave says should sessions be resaved to database if nothing is run
	resave:false,
	//should new sessions be saved even if they're empty
	saveUninitialized: true,
	//encryption
	secret: 'spartasupersecretkey'
}));
app.use(function(req,res,next){
	//saving the cookie to a variable
	var views = req.session.views;
	//incrementing views
	views ? views ++ : views = 1;
	//adding views to the response
	console.log("User has "+ views+ " page views");
	req.session.views = views;
	next();
});

// tell express to use ejs for rendering templates

app.use(flash());
// middleware to make flash messages available in every template
app.use(function(req, res, next){
    // res.locals will be available in every template
    res.locals.errors = req.flash('error');
    console.log(res.locals.errors);
    next();
})

// use express layouts middleware too
app.use(layouts);

// add the router last
app.use(routes);

app.listen(3000 , function(){
  console.log('listening on port 3000');
});