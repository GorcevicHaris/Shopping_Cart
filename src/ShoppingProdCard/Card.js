import React, { useContext, useState } from "react";
import "./card.css";
import { ContextCart } from "../Pages/Store/CartContext";
function Card({ product, removeFromCart }) {
  const [quantity, setQuantity] = useState(0);
  const [productNew, setProductNew] = useState([]);
  const { secondQuantity, setSecondQuantity } = useContext(ContextCart);

  function increase() {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      const productId = product.id;

      const existingProductIndex = secondQuantity.findIndex((el) => {
        console.log("el:", Object.keys(el), productId);
        return Object.keys(el).includes(`${productId}`);
      });

      console.log(existingProductIndex);

      if (existingProductIndex > -1) {
        // Product exists, update its quantity
        const updatedSecondQuantity = [...secondQuantity];
        updatedSecondQuantity[existingProductIndex][productId] = quantity;
        setSecondQuantity(updatedSecondQuantity);
      } else {
        // Product doesn't exist, add a new entry
        setSecondQuantity((prev) => [...prev, { [productId]: quantity }]);
      }
    }
    console.log(secondQuantity);
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
