var Laps = require('./laps.jsx');

var Clock = React.createClass({

  getInitialState: function() {

    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }

  },
  saveLap: function(){
    this.props.onLap(this.state);
    this.setState({hours: 0,minutes:0,seconds:0}) 
  },
  render: function() {

    return (
      <div className="clock">
        <div className="clockface">
          <div className="ticker">
            {this.state.hours}
          </div>
          <div className="separator">:</div>
          <div className="ticker">
            {this.state.minutes}
          </div>
          <div className="separator">:</div>
          <div className="ticker">
            {this.state.seconds}
          </div>
        </div>
        <div className="controls">
          <input type="button" value="Lap" className="lap_button" onClick={this.saveLap}/>
        </div>
      </div>
      
    )

  },
  componentDidMount() {
    setInterval(this.updateTimer, 1000);

  },
  updateTimer : function(){
  
    this.state.seconds++;
      if(this.state.seconds > 59){
      this.state.seconds = 0;
      this.state.minutes++;
      if(this.state.minutes > 59 ){
        this.state.hours ++;
       this.state.minutes = 0;}
    }

    this.setState({});
  }
});

module.exports = Clock;