function choice(operator,a,b){
	switch(operator){
		case 'plus':
			return console.log('Added Result is '+ (parseInt(a)+parseInt(b)));
			break;
		case'minus':
			return console.log('Minus Result is '+ (a-b));
			break;
		case 'multiply':
			return console.log('Multiplied Result is '+ a*b);
			break;
		case 'divide':
			return console.log('Divided Result is '+ a/b);	
			break;
	}
}
/*function plus(a,b){
	return console.log('Added Result is '+ (parseInt(a)+parseInt(b)))
}
function minus(a,b){
	return console.log('Minus Result is '+ (a-b))
}
function multiply(a,b){
	return console.log('Multiplied Result is '+ a*b)
}
function divide(a,b){
	return console.log('Divided Result is '+ a/b)
}
*/
module.exports = {
	/*"minus":minus,
	"plus":plus,
	"multiply":multiply,
	"divide":divide,*/
	"choice":choice
}