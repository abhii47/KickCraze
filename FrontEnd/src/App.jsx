import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className=' container bg-zinc-100' >
      <div className='w-[100%] fixed top-0'>
        <Navbar />
      </div>
      <div className='main-product-container flex flex-wrap pt-40'>
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
    </div>
  )
}

export default App
