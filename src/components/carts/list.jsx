import React from "react";
import "./list.css";

import {
  cartStore,
  plusToQuantity,
  removeFromCart,
  minusToQuantity,
} from "../product/redux";
export function Cart({ products }) {
  if (!products || !products.length) {
    return (
      <div>
        <img
          style={{ height: "60vh" }}
          src="/images/cart-image3.png"
          className="bg-image mx-auto d-block"
        />
        <div
          className="text-center mb-4"
          style={{ fontSize: 70, color: "#FFBF00" }}
        >
          Cart is Empty!
        </div>
      </div>
    );
  }

  const plusToQuantityHandler = (product) => {
    cartStore.dispatch(plusToQuantity(product));
  };

  const minusToQuantityHandler = (product) => {
    cartStore.dispatch(minusToQuantity(product));
  };

  const removeHandler = (product) => {
    cartStore.dispatch(removeFromCart(product));
  };

  return (
    <table className="table ">
      <thead className="table-warning">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Pic</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img src={product.pic} width="50" />
            </td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button
                    onClick={() => minusToQuantityHandler(product)}
                    className="btn btn-dark btn-sm"
                    id="minus-btn"
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                </div>
                <input
                  type="number"
                  className="form-control form-control-sm text-center"
                  min="1"
                  value={product.quantity}
                />

                <div className="input-group-prepend">
                  <button
                    onClick={() => plusToQuantityHandler(product)}
                    className="btn btn-dark btn-sm"
                    id="plus-btn"
                  >
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td>
              <button
                onClick={() => removeHandler(product)}
                className="btn btn-danger"
              >
                {" "}
                Remove{" "}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
