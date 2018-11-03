import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <span className="badge m-2 badge-primary">{this.props.count}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.item)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.item)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
