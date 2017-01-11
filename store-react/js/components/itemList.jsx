var Item = require('./item.jsx');
var ItemList = React.createClass({
	render: function(){
		return(<div className="itemList">
				<h1> Shopping List</h1>
				{this.props.items.map(function(item,i){
					return (<Item key={i} name={item.name} brand={item.brand} price={item.price} desc={item.description}/>)
				})}
				</div>
			)
	}
})

module.exports = ItemList;