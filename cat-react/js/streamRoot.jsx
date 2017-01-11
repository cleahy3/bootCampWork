var Stream = require('./stream.jsx');

var StreamRoot = React.createClass({
	getInitialState: function() {
	    return {
	        cats:[]  
	    };
	},
	componentDidMount: function() {
		var self = this;
		var cats = [];
		for(var i = 0; i <= 5; i++){
			var num = Math.floor((Math.random() * 18) + 400);;
			var url = 'https://http.cat/'+num;
			cats.push({pic: url, fact:'this is some text as a fact for the cat'})
		}
		this.setState({cats:cats})
	},
	render: function(){
		return(
				<Stream cats={this.state.cats} />
			)
	}
});

module.exports = StreamRoot;