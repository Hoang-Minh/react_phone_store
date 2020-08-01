import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { connect } from "react-redux";

class Modal extends Component {
  render() {
    if (!this.props.selectedProduct) return null;
    const { title, img, price } = this.props.selectedProduct;
    const { history } = this.props;
    console.log(title, img, price);
    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
              <h5>Item added to the cart</h5>
              <img src={img} className="img-fluid" alt="product"></img>
              <h5>{title}</h5>
              <h5 className="text-muted">price: ${price}</h5>
              <Link to="/">
                <ButtonContainer
                  onClick={() => {
                    this.props.onDismiss();
                    history.push("/");
                  }}
                >
                  store
                </ButtonContainer>
              </Link>
              <Link to="/cart">
                <ButtonContainer
                  onClick={() => {
                    history.push("/cart");
                  }}
                >
                  go to cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  #modal {
    background: var(--mainWhite);
  }
`;

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    selectedProduct: ownProps
      ? state.phones.find((phone) => phone.id === ownProps.id)
      : null,
  };
};

export default connect(mapStateToProps)(withRouter(Modal));
