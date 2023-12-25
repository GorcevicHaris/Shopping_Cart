import { useNavigate } from "react-router-dom";
import "./header.css";
import { useContext } from "react";
import { ContextCart } from "../Pages/Store/CartContext";

function Header() {
  const navigate = useNavigate();
  const { counterSize, shoppingCart } = useContext(ContextCart);
  console.log(counterSize());

  function inStorage() {
    const inStrg = localStorage.getItem(
      shoppingCart.length,
      shoppingCart.length
    );
    return inStrg;
  }
  return (
    <div className="headerContainer">
      <div style={{ width: "8%" }}>
        <img
          onClick={() => navigate("/")}
          style={{ width: "100%", cursor: "pointer" }}
          src="logoGreen.jpeg"
        />
      </div>
      <div className="pageContainer">
        <p onClick={() => navigate("/")}>All products</p>
        <p onClick={() => navigate("/about")}>About</p>
        <p onClick={() => navigate("/contact")}>Contact us</p>
      </div>
      <div className="iconContainer">
        <div style={{ position: "relative", cursor: "pointer" }}>
          <div onClick={() => navigate("/cart")}>korpa</div>
          <div
            style={{
              position: "absolute",
              top: -10,
              right: -10,
              backgroundColor: "red",
              borderRadius: "50%",
              width: 20,
              height: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {counterSize() || inStorage()}
          </div>
        </div>
        <p onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}>
          user
        </p>
      </div>
    </div>
  );
}

export default Header;
