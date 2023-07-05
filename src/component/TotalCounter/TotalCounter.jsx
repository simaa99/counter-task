import React, { Component } from "react";
import "./style.css";
class TotalCounter extends Component {
  render() {
    const { totalIncrement, totalDecrement } = this.props;

    return (
      <div className="total">
        <p>Total Increment: {totalIncrement}</p>
        <p>Total Decrement: {totalDecrement}</p>
      </div>
    );
  }
}

export default TotalCounter;
