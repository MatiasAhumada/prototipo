import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/CSS/App.css";

import Home from "./View/Home";
import MenuInicio from "./View/MenuInicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inicio" element={<MenuInicio></MenuInicio>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
