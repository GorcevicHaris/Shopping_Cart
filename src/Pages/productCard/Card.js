import React, { useContext } from "react";
import "./productCard.css";
import { ContextCart } from "../Store/CartContext";

function Card({ product, addToCarta }) {
  // console.log(addToCart, "addtocrd");
  const { inCart } = useContext(ContextCart);
  // console.log(product, "product");
  // console.log(shoppingCart, "shoppingcard");
  // console.log(addToCarta, "addtocarta");

  const storageProduct = JSON.parse(localStorage.getItem(product.id));

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
            {inCart(product) || storageProduct ? (
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
