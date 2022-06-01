import React, { Component } from "react";
import { cartStore } from "../product/redux";

class CartItem extends Component {
  state = {};

  componentDidMount() {
    this.unsubscribe = cartStore.subscribe(() =>
      this.setState({ count: cartStore.getState().length })
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <img width="30 px" src="/images/cart-image.png" />

        {this.state.count > 0 && (
          <span
            style={{ position: "absolute", marginTop: -5, marginLeft: -15 }}
            className="badge badge-danger badge-pill"
          >
            {this.state.count}
          </span>
        )}
      </div>
    );
  }
}
export default CartItem;
