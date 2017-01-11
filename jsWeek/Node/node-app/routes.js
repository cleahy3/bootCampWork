function routes(){
	app.get("/cheeses" , function(req,res,next) {
	var body = req.body;
 // res.send({"time":req.time.toString()});
 	 res.send(cheeses);

});
app.get("/cheeses/show" , function(req,res) {
    // send a response this time.
    // no more middleware after this
    res.sendFile('<h1>Logged in</h1>');
});

}
module.exports={
	"routes":routes
};