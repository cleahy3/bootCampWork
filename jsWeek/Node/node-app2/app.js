//requiring the express module
var express = require('express');
//create an instance of express app
var app = express();

// req = request res = response index app route
// JS routes, like with MVC php should typically put in it's own file
app.get("/beers", function(req,res){
	res.send('Index');
});

app.get("/beers/new",function(req,res){
	res.send('New');
});

app.post("/beers",function(req,res){
	res.send('POST');
});

app.patch("/beers/:id",function(req,res){
	res.send('put');
});

app.get("/beers/:id/edit",function(res,req){
	res.send('update');
});
app.get("/beers/:id",function(req,res){
	res.send('show');
});
app.delete("/beers/:id",function(req,res){
	res.send('delete');
});
//set the app listening
app.listen(3000, function(){
	console.log("Your app is ready and listening on port 3000.");
});