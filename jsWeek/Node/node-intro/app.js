var prompt = require('prompt');
var calc = require('./calc');

prompt.start();


console.log('|-----------Calculator-----------|');

prompt.get(['operator','a','b'],function(err,result){
	//error check
	if(err){
		console.log(err);
	}
	var opChoice = calc.choice(result.operator,result.a,result.b);
	/*var plus = calc.plus(result.a,result.b);
	var minus = calc.minus(result.a,result.b);
	var multiply =calc.multiply(result.a,result.b);
	var divide = calc.divide(result.a,result.b);*/
});