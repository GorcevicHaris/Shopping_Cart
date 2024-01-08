import React, { useContext, useState } from "react";
import "./card.css";
import { ContextCart } from "../Pages/Store/CartContext";
function Card({ product, removeFromCart }) {
  const [quantity, setQuantity] = useState(0);
  const { secondQuantity, setSecondQuantity } = useContext(ContextCart);

  function increase() {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      // const productId = product.id;
      console.log(product.id, "proid");
      //secondquantity oznacava kada stisnes na plus pa kad dodaje u niz objekte sa id-jom i quantity [{1:0}]
      const existingProductIndex = secondQuantity.findIndex((el) => {
        return Object.keys(el).includes(`${product.id}`);
      });
      //existingproductondex proverava da li product.id postoji u secondquantity od njegovih keyeva
      // znaci kada stisnemo primera radi id 1 product.id ce da bude 1 i dodace ga jer nije imao taj key
      // ako stisnemo ponovo taj isti id nece ga dodati jer vec postoji taj
      //product.id oznacava shoppincart koji dodat u korpu tjst njegov id tjst koliko smo dodali produkata

      console.log(existingProductIndex, "existingProductIndex");

      if (existingProductIndex >= 0) {
        // Product exists, update its quantity
        // Ako postoji proizvod nemoj da ga dodas
        const updatedSecondQuantity = secondQuantity;
        // console.log(secondQuantity, "secondqnt");
        updatedSecondQuantity[existingProductIndex][product.id] = quantity;
        //updatedSecondQuantity[existingProductIndex] kljuc i value,kada stavimo [product.id] dobijamo value
        // console.log(
        //   updatedSecondQuantity[existingProductIndex],
        //   "updatedSecondQuantity"
        // );
        // console.log(updatedSecondQuantity, "seconquantityupdated");
        setSecondQuantity(updatedSecondQuantity);
      } else {
        // Product doesn't exist, add a new entry
        // Ako ne postoji Proizvod dodaj novi
        // kada se pojavi -1 existingproductindex znaci da nije postojao pa ga dodaje
        setSecondQuantity((prev) => [...prev, { [product.id]: quantity }]);
        //gore linija vraca staru vrednost tjst niz i u njega objekte ne dodaje samo nove vec i stare cuva
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
