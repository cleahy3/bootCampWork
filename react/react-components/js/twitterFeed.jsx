var TweetForm = require('./tweetForm.jsx');
var TweetList  = require('./tweetList.jsx');
var AuthSelect = require('./authorSelect.jsx');


var TwitterFeed = React.createClass({

   getInitialState: function() {
      //super(props);
       return {
         tweets: [
             {
               message: "React is great!",
               author: "@steveyblam",
               image: "./img/images-1.jpg"
             },
             {
               message: "React is ok!",
               author: "@steveybob",
                image: "./img/images.jpg"
             },
             {
               message: "React is rubbish!",
               author: "@spartan",
                image: "./img/obama.jpeg"
             }
           ],
           canTweet: [],
           isEnabled: false
         
         };

   },
   handleClear : function(){
      this.setState({tweets:[]});

   },
   componentDidUpdate: function() {
         var tweetNum= 0;
         var tweetLen = this.state.tweets.length;
         console.log('i should get here');
         //this.canTweet = tweets.filter{}
         for(var k = 0; k < tweetLen ; k ++){
           if( this.state.tweets.author == '@obama'){
              tweetNum++;
           }
           if(tweetNum > 2){
            this.setState({isEnabled:true});
           }
         }
   },
   handleDelete :function(index) {

     this.state.tweets.splice(index,1);
     this.setState({
       tweets: this.state.tweets
     });

   },
   handleCreate : function(tweet) {

       // add the tweet to the array
       var newTweets = this.state.tweets;

       newTweets.push(tweet);

       // set state with the new array to force a re render
       this.setState({
         tweets: newTweets
       });

   },

   render: function(){
       return (
           <div className="twitter_feed">
                
               <TweetForm createNew={this.handleCreate} buttonEnable={this.state.isEnabled}/>
               <div>Number of Tweets {this.state.tweets.length} </div>
               <TweetList tweets={this.state.tweets} handleDelete={this.handleDelete}/>
               <input type="button" value="Clear" onClick={this.handleClear}/>
               <AuthSelect tweets={this.state.tweets}/>
           </div>
       );
   }
});

module.exports = TwitterFeed;