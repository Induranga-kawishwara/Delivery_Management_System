import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import indexRoutes from "./routes";

const App = () => {

  return (
    <BrowserRouter>
       <Routes>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.pathname} key={key} element={prop.component} />;
        })}
       </Routes>
    </BrowserRouter>
  );
};

export default App;
