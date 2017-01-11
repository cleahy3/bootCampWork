
var ItemList = require('./itemList.jsx');
var itemStore = require('../stores/itemStore.jsx');
var StorePage = React.createClass({
getInitialState: function() {
    return {
          items: itemStore.getItems()
    };
},
componentDidMount:function() {
      console.log(itemStore.getItems());
},
render: function(){
	
	return(
		<div className="page" > 
			<ItemList items={this.state.items}/>
		</div>	 
	)
}
})

module.exports = StorePage;