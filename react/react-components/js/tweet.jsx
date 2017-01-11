var Tweet  = React.createClass({
	handleDelete : function(e) {

  	 this.props.handleDelete(this.props.index);

	 },
	render: function(){
		return (
		<div className="tweet">
			<img src={this.props.image}/>
			
        <div className="message">
          
          {this.props.message}
        </div>
        <div className="author">
          {this.props.author}
        </div>
       <input type="button" value="Delete" onClick={this.handleDelete } />
      </div>
		)
	},
	
});
//
module.exports = Tweet;