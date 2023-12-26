import React, { useContext } from "react";
import "./productCard.css";
import { ContextCart } from "../Store/CartContext";

function Card({ product, addToCarta }) {
  // console.log(addToCart, "addtocrd");
  const { shoppingCart, inCart, addToCart } = useContext(ContextCart);
  console.log(product, "product");
  console.log(shoppingCart, "shoppingcard");
  console.log(addToCarta, "addtocarta");

  const storageProduct = JSON.parse(localStorage.getItem(product.title));

  return (
    <div className="container">
      <div className="image">
        <img src={product.imageURL} />
      </div>
      <div className="card-content">
        <div className="wrapper">
          <div className="title">{product.title}</div>
          <p className="price">{product.price}$</p>
          <div className="btns">
            {product.discount && <button disabled>{product.discount}%</button>}
            {storageProduct ? (
              <button
                disabled
                style={{ backgroundColor: "gray", border: "none" }}
              >
                Already added
              </button>
            ) : (
              <button onClick={addToCarta}>addToCart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
