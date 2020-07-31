import React, { Component, Fragment } from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <Title name="Your" title="cart"></Title>
                  <CartColumn></CartColumn>
                  <CartList value={value}></CartList>
                  <CartTotals value={value}></CartTotals>
                </Fragment>
              );
            }
            return <EmptyCart></EmptyCart>;
          }}
        </ProductConsumer>
      </section>
    );
  }
}
