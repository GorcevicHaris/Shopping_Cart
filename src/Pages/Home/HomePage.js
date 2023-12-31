import React, { useContext, useEffect, useState } from "react";
import products from "../../data/data.json";
import "./homepage.css";
import Card from "../productCard/Card";
import { ContextCart } from "../Store/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const { addToCart } = useContext(ContextCart);
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const response = await axios.get("http://localhost:4000/getData");
  //   setData(response.data.message);
  //   console.log(response.data, "response");
  // };
  // console.log(data, "data");
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 40,
      }}
    >
      {/* {data} */}
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
