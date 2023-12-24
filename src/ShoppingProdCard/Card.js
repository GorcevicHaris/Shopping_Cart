import React, { useState } from "react";
import "./card.css";
function Card({ product, removeFromCart }) {
  const [quantity, setQuantity] = useState(0);
  function increase() {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  }
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
