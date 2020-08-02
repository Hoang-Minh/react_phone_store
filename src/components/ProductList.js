import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPhones } from "../actions";
import Product from "./Product";
import Title from "./Title";

class ProductList extends Component {
  componentDidMount = () => {
    this.props.fetchPhones();
  };

  render() {
    if (!this.props.phones) return null;

    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"></Title>
            <div className="row">
              {this.props.phones.map((phone) => (
                <Product key={phone.id} product={phone}></Product>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phones: state.phones,
  };
};

export default connect(mapStateToProps, { fetchPhones })(ProductList);
