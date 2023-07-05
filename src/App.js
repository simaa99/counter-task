import React, { Component } from "react";
import Counter from "./component/counter/index";
import TotalCounter from "./component/TotalCounter/TotalCounter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncrement: 0,
      totalDecrement: 0,
    };
  }

  handleIncrement = (increment) => {
    this.setState((prevState) => ({
      totalIncrement: prevState.totalIncrement + increment,
    }));
  };

  handleDecrement = (decrement) => {
    this.setState((prevState) => ({
      totalDecrement: prevState.totalDecrement + decrement,
    }));
  };

  render() {
    const { totalIncrement, totalDecrement } = this.state;

    return (
      <div>
        <Counter
          increment={1}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <Counter
          increment={2}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <Counter
          increment={3}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <TotalCounter
          totalIncrement={totalIncrement}
          totalDecrement={totalDecrement}
        />
      </div>
    );
  }
}

export default App;
