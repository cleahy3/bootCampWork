var appDispatcher = require('../dispatchers/appDispatcher.js');
var appConstants = require('../constants/appConstants.js');

var _count = 0;

var CountStore = {
	getCount : function(){

	}
};
function handleAction(payload){
	if(payload.action == appConstants.CLICKED){
		_count ++;
	}
}