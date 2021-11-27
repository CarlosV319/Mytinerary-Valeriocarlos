import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cities from "./pages/Cities";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
