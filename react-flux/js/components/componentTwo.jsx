var appDispatcher = require('../dispatchers/appDispatcher.js');
var appConstants = require('../constants/appConstants.js');
var CountStore = require('../stores/countStore.js');
var ComponentTwo = React.createClass({

  getInitialState: function() {

    return {
      count: 0
    }

  },
  componentDidMount:function() {
        CountStore.on('update',this.handleDataChange);
  },
  
  handleDataChange:function(){
    this.setState({
      count : CountStore.getCount()
    })
  },
  render: function() {

    return (
      <div className="counter">
        Clicked {this.state.count} times
      </div>
    )

  }

});

module.exports = ComponentTwo;