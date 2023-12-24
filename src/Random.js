import React, { useContext } from "react";
import { ContextCart } from "./Pages/Store/CartContext";
import Card from "./ShoppingProdCard/Card";

function Random() {
  const { random } = useContext(ContextCart);
  return (
    <div>
      {random.map((el) => (
        <Card product={el} key={el.id} />
      ))}
    </div>
  );
}

export default Random;
