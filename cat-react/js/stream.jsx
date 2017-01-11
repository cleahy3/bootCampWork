var dummyCats = [
  {
    pic: "https://fillmurray.com/300/300",
    fact: "Cats be grumpy"
  },
  {
    pic: "https://fillmurray.com/300/301",
    fact: "A cat once ran away from my house for 13 weeks and had the cheek to come back asking for food."
  },
  {
    pic: "https://fillmurray.com/301/300",
    fact: "A cat used to poo on my bed daily."
  }
]
var Cat = require('./cat.jsx');
var Stream = React.createClass({
	getInitialState: function() {
	    return {
	          cats:dummyCats
	    };
	},
	render: function(){
		
		return(
			<div className="stream">
			<h1> Cat Feed</h1>

				{
					this.props.cats.map(function(cat,i){
						return(
								<Cat key={i} catId={i} pic={cat.pic} fact={cat.fact} />
							)
					})
				}
			</div>)
	}
})

module.exports = Stream;