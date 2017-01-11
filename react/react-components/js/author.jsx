var Author = React.createClass({
	render: function(){

		return(
		<div className="author">
			<img id="author-image" src={this.props.image}/>
        <div className="author">
          	{this.props.author}
        </div>
        </div>
        )
	}

});

module.exports= Author;