import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Header from "./Header/header";
import Cart from "./Pages/Home/Korpa/Cart";
import CartContextProvider, { ContextCart } from "./Pages/Store/CartContext";
import Random from "./Random";
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div style={{ padding: "0 7%" }}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
