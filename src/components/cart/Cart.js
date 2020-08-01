import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Title from "../Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends Component {
  render() {
    if (!this.props.addedPhones) return null;
    const { addedPhones } = this.props;

    if (addedPhones.length === 0) return <EmptyCart></EmptyCart>;

    return (
      <section>
        <Fragment>
          <Title name="Your" title="cart"></Title>
          <CartColumn></CartColumn>
          <CartList addedPhones={addedPhones}></CartList>
          <CartTotals addedPhones={addedPhones} history={this.props.history}></CartTotals>
        </Fragment>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedPhones: state.phones
      ? state.phones.filter((phone) => phone.inCart === true)
      : null,
  };
};
export default connect(mapStateToProps)(Cart);
