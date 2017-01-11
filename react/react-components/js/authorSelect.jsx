var Author = require('./author.jsx');

var AuthorSelect = React.createClass({
	render: function(){
		 var authors = this.props.tweets.map((function(tweet, i){

           return (<Author key={i} author={tweet.author} image={tweet.image}  />)
          console.log(tweet.author);
   }).bind(this));
	
   //authors.reverse();
	
   return (
     <div className="Authors">
        {authors}
     </div>
   ) 
}

	
});

module.exports = AuthorSelect;