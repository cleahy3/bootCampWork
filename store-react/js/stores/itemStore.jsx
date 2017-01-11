var storeDispatcher = require('../dispatchers/storeDispatch.js');
var storeConstants = require('../constants/appConstants.js');

var _Item = 0;
var _items=[{
  name:'Hoover',
  brand:'Henry',
  price:'2000',
  description:'A name you can trust - Powerful, innovative and easy to use, the Henry Vacuum Cleaner is a reliable, quality product that will have your cleaning done in no time, with minimum fuss! It comes from a brand you can trust, and offers all the excellent features that have made the Numatic brand what it is today.'
},
{
	name:'Xbox One',
  brand:'Microsoft',
  price:'2000',
  description:'Xbox One is the successor to Xbox 360, Microsoft\'s previous video game console, which was introduced in 2005 as part of the seventh generation of video game consoles. In April 2016, Microsoft announced the end of production of the 360.'
}]

var ItemStore = {
	getItem : function(){
		return _Item;
	},
	getItems : function(){
		return _items;
	}
};
function handleAction(payload){
	if(payload.action == appConstants.CLICKED){
		_Item ++;
	}
}

module.exports = ItemStore;