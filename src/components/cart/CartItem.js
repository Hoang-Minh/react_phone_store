import React, { Component } from "react";
import { connect } from "react-redux";
import { addPhoneToCart, removePhoneFromCart } from "../../actions";

class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;
    return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            stlye={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt="item"
          ></img>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product : </span>
          {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price : </span>${price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <span
              className="btn btn-black mx-1"
              onClick={() => this.props.removePhoneFromCart(id)}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => this.props.addPhoneToCart(id)}
            >
              +
            </span>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div
            className="cart-icon"
            style={{ cursor: "pointer" }}
            onClick={() => console.log("removeItem")}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong>item total: ${parseFloat(total) * parseFloat(price)}</strong>
        </div>
      </div>
    );
  }
}

export default connect(null, { addPhoneToCart, removePhoneFromCart })(CartItem);
