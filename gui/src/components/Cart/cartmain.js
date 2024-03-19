import React from "react";
import Home from "./Home";
import Cart from "./Cart";
import TheNav from "../Header/TheNav";
import TheFooter from "../Footer/TheFooter";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router } from "react-router-dom";
import Swal from "sweetalert2";

const cartmain = () => {
  return (
    <div>
      <TheNav />
      <div
        style={{
          marginTop: "120px",
          marginBottom: "20px",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <CartProvider>
          <Home />
          <Cart />
        </CartProvider>
      </div>
      <TheFooter />
    </div>
  );
  //END
};

export default cartmain;
