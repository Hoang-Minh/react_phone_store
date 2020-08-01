import React from "react";
import CartItem from "./CartItem";

export default function CartList({ addedPhones }) {
  return (
    <div className="container-fluid">
      {addedPhones.map((item) => (
        <CartItem key={item.id} item={item}></CartItem>
      ))}
    </div>
  );
}
