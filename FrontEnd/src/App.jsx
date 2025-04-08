import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className=' container bg-zinc-100' >
      <Navbar />
      <div className='main-product-container flex'>
      <Product />
      <Product />
      <Product />
      <Product />
      <Chatbot />
      </div>
    </div>
  )
}

export default App
