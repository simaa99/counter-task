import React, { Component } from "react";
import "./style.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleIncrement = () => {
    const { increment, onIncrement } = this.props;
    this.setState((prevState) => ({
      number: prevState.number + increment,
    }));
    onIncrement(increment);
  };

  handleDecrement = () => {
    const { increment, onDecrement } = this.props;
    const { number } = this.state;
    if (number - increment >= 0) {
      this.setState((prevState) => ({
        number: prevState.number - increment,
      }));
      onDecrement(increment);
    }
  };

  render() {
    const { number } = this.state;

    return (
      <div className="container">
        <span className="number">{number}</span>
        <span className="increment" onClick={this.handleIncrement}>
          +
        </span>
        <span className="increment" onClick={this.handleDecrement}>
          -
        </span>
      </div>
    );
  }
}

export default Counter;
