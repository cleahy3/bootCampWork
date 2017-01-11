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
	
	var TwitterFeedRoot = __webpack_require__(/*! ./twitterFeedRoot.jsx */ 1);
	
	ReactDOM.render(React.createElement(TwitterFeedRoot, null), document.getElementById('container'));

/***/ },
/* 1 */
/*!********************************!*\
  !*** ./js/twitterFeedRoot.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var TwitterFeed = __webpack_require__(/*! ./twitterFeed.jsx */ 2);
	
	var TwitterFeedRoot = React.createClass({
		displayName: "TwitterFeedRoot",
	
		getInitialState: function getInitialState() {
			return {
				tweets: []
			};
		},
		componentDidMount: function componentDidMount() {
			var self = this;
			axios.get("http://localhost:3000/api/tweets").then(function (result) {
				self.setState({
					tweets: result.data
				});
			});
		},
		render: function render() {
			return React.createElement(TwitterFeed, { tweets: this.state.tweets });
		}
	});
	
	module.exports = TwitterFeedRoot;

/***/ },
/* 2 */
/*!****************************!*\
  !*** ./js/twitterFeed.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TweetForm = __webpack_require__(/*! ./tweetForm.jsx */ 3);
	var TweetList = __webpack_require__(/*! ./tweetList.jsx */ 4);
	
	var TwitterFeed = React.createClass({
	    displayName: 'TwitterFeed',
	
	    render: function render() {
	
	        return React.createElement(
	            'div',
	            { className: 'twitter_feed' },
	            React.createElement(TweetForm, null),
	            React.createElement(TweetList, { tweets: this.props.tweets })
	        );
	    }
	});
	
	module.exports = TwitterFeed;

/***/ },
/* 3 */
/*!**************************!*\
  !*** ./js/tweetForm.jsx ***!
  \**************************/
/***/ function(module, exports) {

	"use strict";
	
	var TweetForm = React.createClass({
	    displayName: "TweetForm",
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "new_tweet" },
	            React.createElement("input", { type: "text", id: "tweet_text", placeholder: "Write a message" }),
	            React.createElement("input", { type: "button", value: "Tweet" })
	        );
	    }
	});
	
	module.exports = TweetForm;

/***/ },
/* 4 */
/*!**************************!*\
  !*** ./js/tweetList.jsx ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Tweet = __webpack_require__(/*! ./tweet.jsx */ 5);
	
	var TweetList = React.createClass({
	  displayName: "TweetList",
	
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "tweets" },
	      this.props.tweets.map(function (tweet, i) {
	        return React.createElement(Tweet, { message: tweet.message, author: tweet.author, key: i });
	      })
	    );
	  }
	
	});
	
	module.exports = TweetList;

/***/ },
/* 5 */
/*!**********************!*\
  !*** ./js/tweet.jsx ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";
	
	var Tweet = React.createClass({
	  displayName: "Tweet",
	
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "tweet" },
	      React.createElement(
	        "div",
	        { className: "message" },
	        this.props.message
	      ),
	      React.createElement(
	        "div",
	        { className: "author" },
	        this.props.author
	      )
	    );
	  }
	
	});
	
	module.exports = Tweet;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map