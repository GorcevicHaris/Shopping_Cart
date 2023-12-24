import React, { createContext } from "react";
const CartContext = createContext({ children });
export default function Context() {
  return <CartContext.Provider>{{ children }}</CartContext.Provider>;
}

export { CartContext };
