import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Main from "./Main";
import Reg from "./newcomponents/RegisterEmployee/reg";
import Log from "./newcomponents/Login/log";
import Rider from "./newcomponents/Rider/rider";
import ShopReg from "./newcomponents/RegisterShop/shopreg";
import ProReg from "./newcomponents/RegisterProduct/productreg";
import EmpRegLog from "./newcomponents/Registerlogin/log";
import Cart from "./components/Cart/cartmain";
import Cartlog from "./components/cartlogin/log";
import Cartreg from "./components/cartregistr/reg";
import RiderCart from "./newcomponents/Cart/cartmain";

const App = () => {
  const ridertoken = localStorage.getItem("ridertoken");
  const usertoken = localStorage.getItem("usertoken");

  return (
    <Router>
      <Routes>
        {usertoken && <Route path="/cart" exact element={<Cart />} />}
        {ridertoken && <Route path="/rider" exact element={<Rider />} />}
        <Route path="/" exact element={<Main />} />
        <Route path="/regemp" exact element={<Reg />} />
        <Route path="/log" exact element={<Log />} />
        <Route path="/cartlog" exact element={<Cartlog />} />
        <Route path="/shopreg" exact element={<ShopReg />} />
        <Route path="/productreg" exact element={<ProReg />} />
        <Route path="/empreglog" exact element={<EmpRegLog />} />
        <Route path="/ridercart" exact element={<RiderCart />} />
        <Route path="/cartreg" exact element={<Cartreg />} />
        <Route
          path="/cart"
          exact
          element={<Navigate replace to="/cartlog" />}
        />
        <Route path="/rider" exact element={<Navigate replace to="/log" />} />
      </Routes>
    </Router>
  );
};

export default App;
