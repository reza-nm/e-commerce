import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
//styled => creates a component witch contains css styles
import {
  Home,
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Error,
  Private,
  Products,
  SingleProduct,
} from "./pages/EntryPoint";
import { Sidebar, Navbar, Footer } from "./components/EntryPoint";
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
