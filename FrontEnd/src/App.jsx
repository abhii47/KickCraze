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
      <div className="bg-zinc-100 min-h-screen">
        {/* Navbar - fixed at top */}
        <div className="w-full fixed top-0 z-10">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="pt-36 px-4 sm:px-6 md:px-10">
          <Routes>
            {/* Homepage with all products */}
            <Route
              path="/"
              element={
                <div className="flex flex-wrap gap-4 justify-center items-stretch">
                  <Product />
                  <Product />
                  <Product />
                  <Product />
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
