import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Room extends React.Component {
  state = {
    isLit: true,
    temp: 72
  };

  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };

  increment = () => {
    this.setState({
      temp: this.state.temp + 1
    });
  };

  decrement = () => {
    this.setState({
      temp: this.state.temp - 1
    });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";
    return (
      <Fragment>
        <div className={`room ${brightness}`}>
          the room is {this.state.isLit ? "lit" : "dark"}
          <br />
          <button onClick={this.flipLight}>
            {this.state.isLit ? "dark" : "lit"}
          </button>
          <div>{this.state.temp}</div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<Room />, document.querySelector("#root"));
