/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./js/index.jsx ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TwitterFeed = __webpack_require__(/*! ./twitterFeed.jsx */ 1);
	ReactDOM.render(React.createElement(TwitterFeed, null), document.getElementById('container'));

/***/ },
/* 1 */
/*!****************************!*\
  !*** ./js/twitterFeed.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TweetForm = __webpack_require__(/*! ./tweetForm.jsx */ 2);
	var TweetList = __webpack_require__(/*! ./tweetList.jsx */ 3);
	var AuthSelect = __webpack_require__(/*! ./authorSelect.jsx */ 5);
	
	var TwitterFeed = React.createClass({
	  displayName: 'TwitterFeed',
	
	
	  getInitialState: function getInitialState() {
	    //super(props);
	    return {
	      tweets: [{
	        message: "React is great!",
	        author: "@steveyblam",
	        image: "./img/images-1.jpg"
	      }, {
	        message: "React is ok!",
	        author: "@steveybob",
	        image: "./img/images.jpg"
	      }, {
	        message: "React is rubbish!",
	        author: "@spartan",
	        image: "./img/obama.jpeg"
	      }],
	      canTweet: [],
	      isEnabled: false
	
	    };
	  },
	  handleClear: function handleClear() {
	    this.setState({ tweets: [] });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    var tweetNum = 0;
	    var tweetLen = this.state.tweets.length;
	    console.log('i should get here');
	    //this.canTweet = tweets.filter{}
	    for (var k = 0; k < tweetLen; k++) {
	      if (this.state.tweets.author == '@obama') {
	        tweetNum++;
	      }
	      if (tweetNum > 2) {
	        this.setState({ isEnabled: true });
	      }
	    }
	  },
	  handleDelete: function handleDelete(index) {
	
	    this.state.tweets.splice(index, 1);
	    this.setState({
	      tweets: this.state.tweets
	    });
	  },
	  handleCreate: function handleCreate(tweet) {
	
	    // add the tweet to the array
	    var newTweets = this.state.tweets;
	
	    newTweets.push(tweet);
	
	    // set state with the new array to force a re render
	    this.setState({
	      tweets: newTweets
	    });
	  },
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'twitter_feed' },
	      React.createElement(TweetForm, { createNew: this.handleCreate, buttonEnable: this.state.isEnabled }),
	      React.createElement(
	        'div',
	        null,
	        'Number of Tweets ',
	        this.state.tweets.length,
	        ' '
	      ),
	      React.createElement(TweetList, { tweets: this.state.tweets, handleDelete: this.handleDelete }),
	      React.createElement('input', { type: 'button', value: 'Clear', onClick: this.handleClear }),
	      React.createElement(AuthSelect, { tweets: this.state.tweets })
	    );
	  }
	});
	
	module.exports = TwitterFeed;

/***/ },
/* 2 */
/*!**************************!*\
  !*** ./js/tweetForm.jsx ***!
  \**************************/
/***/ function(module, exports) {

	'use strict';
	
	var TweetForm = React.createClass({
	  displayName: 'TweetForm',
	
	  getInitialState: function getInitialState() {
	    return { maxChar: 140, message: null, numTweet: 0, canTweet: true };
	  },
	  onChange: function onChange(event) {
	    var newMax = this.state.maxChar - 1;
	    this.setState({ maxChar: newMax, message: event.target.value });
	
	    console.log(this.state);
	  },
	  postTweet: function postTweet(event) {
	    this.state.numTweet++;
	    if (this.state.numTweet > 2) {
	      this.setState({ canTweet: false });
	    }
	    this.props.createNew({
	      message: this.state.message,
	      author: '@obama',
	      image: './img/obama.jpeg'
	    });
	  },
	
	  render: function render() {
	
	    return React.createElement(
	      'div',
	      { className: 'new_tweet' },
	      React.createElement('input', { type: 'text', id: 'tweet_text', onChange: this.onChange, value: this.state.message }),
	      React.createElement(
	        'div',
	        { className: 'character' },
	        this.state.maxChar
	      ),
	      this.state.canTweet && React.createElement('input', { type: 'button', id: 'button', value: 'Tweet', onClick: this.postTweet })
	    );
	  }
	
	});
	
	module.exports = TweetForm;

/***/ },
/* 3 */
/*!**************************!*\
  !*** ./js/tweetList.jsx ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Tweet = __webpack_require__(/*! ./tweet.jsx */ 4);
	
	var TweetList = React.createClass({
	  displayName: "TweetList",
	
	
	  render: function render() {
	
	    var tweets = this.props.tweets.map(function (tweet, i) {
	      return React.createElement(Tweet, { message: tweet.message, author: tweet.author, image: tweet.image, key: i, index: i, handleDelete: this.props.handleDelete });
	    }.bind(this));
	
	    tweets.reverse();
	
	    return React.createElement(
	      "div",
	      { className: "tweets" },
	      tweets
	    );
	  }
	
	});
	
	module.exports = TweetList;

/***/ },
/* 4 */
/*!**********************!*\
  !*** ./js/tweet.jsx ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";
	
	var Tweet = React.createClass({
	  displayName: "Tweet",
	
	  handleDelete: function handleDelete(e) {
	
	    this.props.handleDelete(this.props.index);
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "tweet" },
	      React.createElement("img", { src: this.props.image }),
	      React.createElement(
	        "div",
	        { className: "message" },
	        this.props.message
	      ),
	      React.createElement(
	        "div",
	        { className: "author" },
	        this.props.author
	      ),
	      React.createElement("input", { type: "button", value: "Delete", onClick: this.handleDelete })
	    );
	  }
	
	});
	//
	module.exports = Tweet;

/***/ },
/* 5 */
/*!*****************************!*\
  !*** ./js/authorSelect.jsx ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Author = __webpack_require__(/*! ./author.jsx */ 6);
	
	var AuthorSelect = React.createClass({
	  displayName: "AuthorSelect",
	
	  render: function render() {
	    var authors = this.props.tweets.map(function (tweet, i) {
	
	      return React.createElement(Author, { key: i, author: tweet.author, image: tweet.image });
	      console.log(tweet.author);
	    }.bind(this));
	
	    //authors.reverse();
	
	    return React.createElement(
	      "div",
	      { className: "Authors" },
	      authors
	    );
	  }
	
	});
	
	module.exports = AuthorSelect;

/***/ },
/* 6 */
/*!***********************!*\
  !*** ./js/author.jsx ***!
  \***********************/
/***/ function(module, exports) {

	"use strict";
	
	var Author = React.createClass({
	  displayName: "Author",
	
	  render: function render() {
	
	    return React.createElement(
	      "div",
	      { className: "author" },
	      React.createElement("img", { id: "author-image", src: this.props.image }),
	      React.createElement(
	        "div",
	        { className: "author" },
	        this.props.author
	      )
	    );
	  }
	
	});
	
	module.exports = Author;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map