
var TweetForm = React.createClass({
	getInitialState: function() {
    return {maxChar: 140, message: null,numTweet:0,canTweet:true};
 	 },
 	  onChange: function(event) {
 	  	var newMax = this.state.maxChar -1;
   		 this.setState({maxChar : newMax,message: event.target.value});
       
       console.log(this.state);

  	},
  	postTweet: function(event){
  			this.state.numTweet++;
       if(this.state.numTweet > 2){
        this.setState({canTweet:false})
       }
        this.props.createNew({
  				message: this.state.message,
  				author: '@obama',
  				image: './img/obama.jpeg'
  			})
  	},
    
	render: function(){
			
 
 	
		return(
			<div className="new_tweet">
   		   		<input type="text" id="tweet_text" onChange={this.onChange} value={this.state.message}/>
   		   		<div className= "character">{this.state.maxChar}</div>
      			{this.state.canTweet && <input type="button" id="button" value="Tweet" onClick={this.postTweet}  />}

   			 </div>
		)
	}

})

module.exports = TweetForm;