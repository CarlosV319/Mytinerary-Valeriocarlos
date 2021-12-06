import React from "react";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from "./components/City"

// const Elemento = withRouter(elementoSinProps)

const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cities" element={<Cities/>} />
        <Route path="/city/:id" element={<City/>} />
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;
