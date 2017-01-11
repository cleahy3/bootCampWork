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
	
	var CatLyf = __webpack_require__(/*! ./catLyf.jsx */ 1);
	ReactDOM.render(React.createElement(CatLyf, null), document.getElementById('container'));

/***/ },
/* 1 */
/*!***********************!*\
  !*** ./js/catLyf.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stream = __webpack_require__(/*! ./stream.jsx */ 2);
	var Sidebar = __webpack_require__(/*! ./sidebar.jsx */ 4);
	var StreamRoot = __webpack_require__(/*! ./streamRoot.jsx */ 5);
	var CatLyf = React.createClass({
		displayName: 'CatLyf',
	
	
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'catLyf' },
				React.createElement(StreamRoot, null)
			);
		}
	});
	
	module.exports = CatLyf;

/***/ },
/* 2 */
/*!***********************!*\
  !*** ./js/stream.jsx ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var dummyCats = [{
			pic: "https://fillmurray.com/300/300",
			fact: "Cats be grumpy"
	}, {
			pic: "https://fillmurray.com/300/301",
			fact: "A cat once ran away from my house for 13 weeks and had the cheek to come back asking for food."
	}, {
			pic: "https://fillmurray.com/301/300",
			fact: "A cat used to poo on my bed daily."
	}];
	var Cat = __webpack_require__(/*! ./cat.jsx */ 3);
	var Stream = React.createClass({
			displayName: "Stream",
	
			getInitialState: function getInitialState() {
					return {
							cats: dummyCats
					};
			},
			render: function render() {
	
					return React.createElement(
							"div",
							{ className: "stream" },
							React.createElement(
									"h1",
									null,
									" Cat Feed"
							),
							this.props.cats.map(function (cat, i) {
									return React.createElement(Cat, { key: i, catId: i, pic: cat.pic, fact: cat.fact });
							})
					);
			}
	});
	
	module.exports = Stream;

/***/ },
/* 3 */
/*!********************!*\
  !*** ./js/cat.jsx ***!
  \********************/
/***/ function(module, exports) {

	"use strict";
	
	var Cat = React.createClass({
		displayName: "Cat",
	
		render: function render() {
			return React.createElement(
				"div",
				{ className: "cat", id: this.props.catId },
				React.createElement("img", { src: this.props.pic }),
				React.createElement(
					"span",
					{ className: "fact" },
					this.props.fact,
					" "
				)
			);
		}
	});
	
	module.exports = Cat;

/***/ },
/* 4 */
/*!************************!*\
  !*** ./js/sidebar.jsx ***!
  \************************/
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 5 */
/*!***************************!*\
  !*** ./js/streamRoot.jsx ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stream = __webpack_require__(/*! ./stream.jsx */ 2);
	
	var StreamRoot = React.createClass({
		displayName: 'StreamRoot',
	
		getInitialState: function getInitialState() {
			return {
				cats: []
			};
		},
		componentDidMount: function componentDidMount() {
			var self = this;
			var cats = [];
			for (var i = 0; i <= 5; i++) {
				var num = Math.floor(Math.random() * 18 + 400);;
				var url = 'https://http.cat/' + num;
				cats.push({ pic: url, fact: 'this is some text as a fact for the cat' });
			}
			this.setState({ cats: cats });
		},
		render: function render() {
			return React.createElement(Stream, { cats: this.state.cats });
		}
	});
	
	module.exports = StreamRoot;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map