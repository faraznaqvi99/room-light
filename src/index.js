import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Room extends React.Component {
  state = {
    isLit: false
  };

  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";
    return (
      <div className={`room ${brightness}`}>
        the room is {this.state.isLit ? "lit" : "dark"}
        <br />
        <button onClick={this.flipLight}>
          {this.state.isLit ? "dark" : "lit"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.querySelector("#root"));
