import React, { useContext, useState } from "react";
import "./card.css";
import { ContextCart } from "../Pages/Store/CartContext";
function Card({ product, removeFromCart }) {
  const [quantity, setQuantity] = useState(0);
  const { secondQuantity, setSecondQuantity } = useContext(ContextCart);

  function increase() {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      const existingProductIndex = secondQuantity.findIndex((key) =>
        Object.keys(key).includes(`${product.id}`)
      );
      if (existingProductIndex >= 0) {
        const copyOfSecondQuantity = secondQuantity;
        copyOfSecondQuantity[existingProductIndex][product.id] = quantity;
        setSecondQuantity(copyOfSecondQuantity);
      } else {
        setSecondQuantity((prev) => [...prev, { [product.id]: quantity }]);
      }
    }
  }
  console.log(quantity, "quantity");
  function decrease() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="main-cont">
      <div className="first-cont">
        <img src={product.imageURL} alt={product.title} />
      </div>
      <div className="second-cont">
        <h4>{product.title}</h4>
        <h5 id="green-underline" onClick={removeFromCart}>
          Remove
        </h5>
      </div>
      <div className="third-cont">
        <h4>{Number(product.price)}$</h4>

        <div className="quantity">
          <p style={{ cursor: "pointer" }} onClick={decrease}>
            -
          </p>
          <p>{quantity}</p>
          <p style={{ cursor: "pointer" }} onClick={increase}>
            +
          </p>
        </div>
        <div style={{ width: "40px" }}>
          {product.discount && <h4>{product.discount}%</h4>}
        </div>
      </div>
    </div>
  );
}

export default Card;
