var express = require('express');
var app = express();
var user = {
		fName:'Callum',
		sName:'Leahy',
		age:'23'
	}
// add code here
app.use(function(req,res,next){
	var person = user; 
	req.body= person;
	next();
})
app.use(function(req,res,next){
	var now = Date.now();
	console.log("Request Time: ", now);
	req.time = now;
	req.user = user;
	next();
});

app.use("/loggedin",function(req,res,next){
	
	if(!req.user){
		res.redirect("/loggedout");
	}
	next();
});
// route middleware *next* keyword is used with middleware,
// tells it to then do the next thing
app.get("/" , function(req,res,next) {
	var body = req.body;
 // res.send({"time":req.time.toString()});
  res.send({"Person":req.body});

});
app.get("/loggedin" , function(req,res) {
    // send a response this time.
    // no more middleware after this
    res.send('<h1>Logged in</h1>');
});

app.get("/loggedout" , function(req,res) {
    // send a response this time.
    // no more middleware after this
    res.send('<h1>Logged out</h1>');
});

app.listen(3000 , function(){
  console.log('app running on port 3000');
});
