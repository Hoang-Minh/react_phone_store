import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";

function App() {
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/details" component={Details}></Route>
        <Route component={Default}></Route>
      </Switch>
    </div>
  );
}

export default App;
