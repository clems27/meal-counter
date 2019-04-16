import React, { Component } from "react";

class CounterButton extends Component {
  incrementCounter = () => {
    this.setState(previousState => {
      return { count: previousState.count + 1 };
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.incrementCounter}>{this.props.title}</button>
        {this.state.count}
      </div>
    );
  }
}

export default CounterButton;
