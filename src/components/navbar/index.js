import React, { Component } from "react";
import CartItem from "../carts/cart-icon";
import { Link } from "react-router-dom";
import { Search } from "./search";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <Link to="/">
          <span className="navbar-brand">
            BeeTop
            <img
              className="ml-1 mb-2"
              src="images/bee-logo.png"
              style={{ marginBottom: "4PX" }}
              width="30px"
              alt=""
            />
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">
                <a className="nav-link" href="">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/signup'><a className="nav-link" href="">
                SignUp <span className="sr-only">(current)</span>
              </a>
              </Link>
            </li>
          </ul>
          <Link to="/cart">
            <div style={{ marginRight: 5 }}>
              <CartItem />
            </div>
          </Link>
          <Search />
        </div>
      </nav>
    );
  }
}
