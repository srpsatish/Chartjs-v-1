import React, { Component } from "react";

export default class Number extends Component {
  constructor() {
    super();
    this.state = {
      alpha: "A",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.alpha}</h1>
        <button
          onClick={() => {
            this.setState({
              alpha: String.fromCharCode(this.state.alpha.charCodeAt() + 1),
            });
          }}
        >
          NEXT
        </button>
        <button
          onClick={() => {
            this.setState({
              alpha: String.fromCharCode(this.state.alpha.charCodeAt() - 1),
            });
          }}
        >
          PREVIOUS
        </button>
      </div>
    );
  }
}
