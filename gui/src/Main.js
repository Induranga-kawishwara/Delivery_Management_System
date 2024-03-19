import React, { useState } from "react";
import TheNav from "./components/Header/TheNav";
import TheFooter from "./components/Footer/TheFooter";
import Sections from "./components/Sections/Sections";
import CartProvider from "./components/store/CartProvider";

import Swal from "sweetalert2";

const Main = () => {
  return (
    <div>
      <CartProvider>
      </CartProvider>
      <TheNav/>
      <Sections />
      <TheFooter />
    </div>
  );
  //END
};

export default Main;
