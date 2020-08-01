import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
          {/* <Route path="/details" component={Details}></Route> */}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
