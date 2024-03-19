import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import indexRoutes from "./routes";
import HomeComponent from "./components/Sections/HeroSection";
import TheNav from "./components/Header/TheNav";
import TheFooter from "./components/Footer/TheFooter";

const App = () => {
  return (
    <Router>
      <Routes>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.pathname} key={key} element={prop.component} />
          );

          <Route path="/" element={<HomeComponent />} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
