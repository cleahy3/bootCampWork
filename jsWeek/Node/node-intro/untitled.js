var express = require('express');

var mongoose = require('mongoose');
var app = express();


var routes = require('./config/routes');
var port = process.env.PORT || 3000;

app.set('view engine','ejs');
var User = require('./models/user');
app.use(layouts);
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect("mongodb://localhost/films");

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));




//load current user


  };
});

app.use(express.static(__dirname + '/public'));



app.use(routes);

app.listen(port , function(){
  console.log('app is listening on port'+port);
});


module.exports= app;

