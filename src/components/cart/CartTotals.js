import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

class CartTotals extends Component {
  render() {
    const { addedPhones, history } = this.props;
    const subTotal = addedPhones
      .map((phone) => parseFloat(phone.price) * parseFloat(phone.total))
      .reduce((a, b) => a + b);
    const tax = subTotal * 0.1;
    const total = subTotal + tax;

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <Link to="/">
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => console.log("clear cart")}
                >
                  clear cart
                </button>
              </Link>
              <h5>
                {/* <span className="text-title">
                  subtotal: <strong>${cartSubTotal}</strong>
                </span> */}
                <span className="text-title">
                  subtotal: <strong>${subTotal}</strong>
                </span>
              </h5>
              <h5>
                <span className="text-title">
                  tax: <strong>${tax}</strong>
                </span>
              </h5>
              <h5>
                <span className="text-title">
                  total: <strong>${total}</strong>
                </span>
              </h5>
              <PayPalButton
                total={total}
                // clearCart={clearCart}
                history={history}
              ></PayPalButton>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CartTotals;
