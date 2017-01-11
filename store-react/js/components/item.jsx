var Item = React.createClass({
render: function(){
	return(
		<div className="item">
			<div className="name">{this.props.name}</div>
			<div className="brand">{this.props.brand}</div>
			<div className="price">{this.props.price}</div>
			<div className="desc">{this.props.desc}</div>
		</div>
		)
}

})

module.exports = Item;