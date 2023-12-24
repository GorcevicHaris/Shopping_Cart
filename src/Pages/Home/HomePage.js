import React, { useContext } from "react";
import products from "../../data/data.json";
import "./homepage.css";
import Card from "../productCard/Card";
import { ContextCart } from "../Store/CartContext";
function HomePage() {
  // console.log(shoppingCart);
  const { addToCart } = useContext(ContextCart);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 40,
      }}
    >
      {products &&
        products.map((product) => (
          <Card
            product={product}
            key={product.id}
            addToCarta={() => addToCart(product)}
          />
        ))}
    </div>
  );
}

export default HomePage;
