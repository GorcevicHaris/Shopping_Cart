import React, { createContext, useEffect, useState } from "react";

const ContextCart = createContext();
function CartContextProvider({ children }) {
  const [random, setRandom] = useState([]);
  const [secondQuantity, setSecondQuantity] = useState([]);
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem("shoppingCart")) || []
  );
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  //TEXT tjst key u local storage moraju biti identični
  function notify() {
    alert("already added");
  }
  function inCart(product) {
    return shoppingCart.find((item) => item.id === product.id);
  }
  function removeCart(product) {
    setShoppingCart(shoppingCart.filter((data) => data.id !== product.id));
  }
  function addToCart(product) {
    if (inCart(product)) {
      notify();
    } else {
      setShoppingCart((prev) => [...prev, product]);
      localStorage.setItem(product.title, JSON.stringify(product));
      // prva vrednost je po cemu ce local storage da zna koji je koji objekat po id-ju gleda a ovo product je samo da prikaze
      //tu vrednost ako zelis ako ne moze bilo sta da se napise radice
      alert("succesfull");
    }
  }
  //
  function totalPrice() {
    let total = 0;
    shoppingCart.map((data) => {
      const productQuantity = secondQuantity.find((el) =>
        Object.keys(el).includes(`${data.id}`)
      ); //mora biti string jer object.keys uvek vraca string
      const quantity = productQuantity ? productQuantity[data.id] : 0;

      if (data.discount) {
        total += (data.price - data.price * (data.discount / 100)) * quantity;
      } else {
        total += data.price * quantity;
      }
    });
    return total;
  }

  const counterSize = () => {
    return shoppingCart.length;
  };
  const keys = Object.keys(secondQuantity);
  console.log(keys, "keys");
  console.log(secondQuantity, "secondquantity");
  return (
    <ContextCart.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        addToCart,
        inCart,
        random,
        setRandom,
        removeCart,
        totalPrice,
        counterSize,
        secondQuantity,
        setSecondQuantity,
      }}
    >
      {children}
    </ContextCart.Provider>
  );
}
export default CartContextProvider;
export { ContextCart };
