import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cities from "./pages/Cities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import elementoSinProps from "./pages/Elemento"
import { withRouter } from "./utils/WithRouters";
import City from "./components/City"
const Elemento = withRouter(elementoSinProps)

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
