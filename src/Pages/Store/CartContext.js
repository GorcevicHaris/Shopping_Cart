import React, { createContext, useState } from "react";

const ContextCart = createContext();
function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [random, setRandom] = useState([]);

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
      alert("succesfull");
    }
  }
  function totalPrice() {
    let total = 0;
    shoppingCart.map((data) => {
      if (data.discount) {
        total += data.price - data.price * (data.discount / 100);
      } else {
        total += data.price;
      }
    });
    return total;
  }
  const counterSize = () => {
    return shoppingCart.length;
  };

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
      }}
    >
      {children}
    </ContextCart.Provider>
  );
}
export default CartContextProvider;
export { ContextCart };
