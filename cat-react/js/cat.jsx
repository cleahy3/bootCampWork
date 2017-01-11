var Cat = React.createClass({
	render: function(){
		return(
				<div className="cat" id={this.props.catId}>
										<img src={this.props.pic}/>
					<span className="fact">{this.props.fact} </span>
				</div>
			)
	}
});

module.exports = Cat;