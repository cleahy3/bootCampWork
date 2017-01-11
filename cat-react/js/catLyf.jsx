var Stream = require('./stream.jsx');
var Sidebar = require('./sidebar.jsx');
var StreamRoot = require('./streamRoot.jsx');
var CatLyf = React.createClass({


	render: function(){
		return(<div className="catLyf">
			<StreamRoot />
	
		</div>)
	}
})

module.exports = CatLyf;