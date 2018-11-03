import React, { Component } from "react";
import Counter from "./counter";
import Totals from "./totals";

class Item extends Component {
  state = {};
  render() {
    const { key, count, onIncrement, item, onDecrement, price } = this.props;

    return (
      <div>
        <span>Item name goes here</span>
        <Counter
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          count={count}
          item={item}
        />
        <Totals item={item} />
      </div>
    );
  }
}

export default Item;
