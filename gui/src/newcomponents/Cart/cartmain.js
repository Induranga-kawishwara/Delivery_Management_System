import React from "react";
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter as Router } from 'react-router-dom';
import Swal from "sweetalert2";

const cartmain = () => {
    return (
      <div>
      <div  style={{ marginTop: '120px', marginBottom: '20px', marginLeft: '40px', marginRight: '40px'}}>
        <CartProvider>
          <Home />
          <Cart />
        </CartProvider>
        </div>
      </div>
    );
    //END
  };
  
  export default cartmain;