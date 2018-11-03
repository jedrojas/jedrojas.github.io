import React, { Component } from "react";
class Totals extends Component {
  state = {};
  calculateItemSum() {
    const { price } = this.props.item;
    return price * this.props.item.count;
  }
  render() {
    return <span className="badge m-2 badge">{this.calculateItemSum()}</span>;
  }
}

export default Totals;
