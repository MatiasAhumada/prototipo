import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/CSS/App.css";

import Home from "./View/Home";
import MenuInicio from "./View/MenuInicio";
import Asignacion from "./View/Tareas/Asignacion";
import Desasignacion from "./View/Tareas/Desasignacion";
import Crear from "./View/Empleado/Crear";
import Eliminar from "./View/Empleado/Eliminar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inicio" element={<MenuInicio></MenuInicio>}></Route>
        <Route path="/asignacion" element={<Asignacion></Asignacion>}></Route>
        <Route path="/desasignacion" element={<Desasignacion></Desasignacion>}></Route>
        <Route path="/crear" element={<Crear></Crear>}></Route>
        <Route path="/eliminar" element={<Eliminar></Eliminar>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
