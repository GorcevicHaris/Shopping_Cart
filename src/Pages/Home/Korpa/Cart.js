import React, { useContext, useEffect } from "react";
import "./cart.css";
import { ContextCart } from "../../Store/CartContext";
import Card from "../../../ShoppingProdCard/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "lightgreen",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexdirection: "column",
};

function Cart() {
  const { shoppingCart, setShoppingCart, removeCart, totalPrice, inCart } =
    useContext(ContextCart);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // function setStorage() {
  //   const storageSet = localStorage.setItem(
  //     shoppingCart.map((el) => el.id),
  //     JSON.stringify(shoppingCart)
  //   );
  //   return storageSet;
  // }
  // useEffect(() => {
  //   getStorage();
  // }, []);

  return (
    <div className="cartContainer">
      {shoppingCart.map((product) => (
        <Card product={product} removeFromCart={() => removeCart(product)} />
      ))}
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              onClick={handleClose}
              style={{
                position: "relative",
                bottom: "27px",
                left: "346px",
                cursor: "pointer",
              }}
            >
              X
            </div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Your bill is {totalPrice()}$
              <button
                style={{
                  width: "50%",
                  padding: 16,
                  borderRadius: 8,
                  border: "none",
                  backgroundColor: "#7ed957",
                  color: "white",
                  cursor: "pointer",
                  marginTop: 20,
                  fontSize: 20,
                }}
                onClick={handleClose}
              >
                Plati
              </button>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
export default Cart;
//
