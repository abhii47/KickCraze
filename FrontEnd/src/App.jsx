import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Chatbot from './components/Chatbot';
import ProductDetail from './components/Product_Details';

function App() {
  return (
    <Router>
      <div className="container bg-zinc-100">
        <div className="w-[100%] fixed top-0 z-10">
          <Navbar />
        </div>

        <div className="pt-40">
          <Routes>
            {/* Homepage with all products */}
            <Route
              path="/"
              element={
                <div className="main-product-container flex flex-wrap gap-4 justify-center pt-10">
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Chatbot />
                </div>
              }
            />

            {/* Product Details Page */}
            <Route path="/product_Details" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
