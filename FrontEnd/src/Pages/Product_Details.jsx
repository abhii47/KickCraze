import React from 'react';
import { useParams,Link } from 'react-router-dom';
import products from '../data/productData';
import Tilt from 'react-parallax-tilt';

const ProductDetail = () => {
  const {id} = useParams();
  const product = products.find((product) => product.id === id);

  // if(!product) return<p>Shoes Not Found</p>

  console.log(id);

  return (
    <div className="min-h-screen bg-white text-black px-6 lg:px-40 py-10 flex flex-col lg:flex-row gap-10 mt-[-50px]">
      {/* Left Section */}
      <div className="flex flex-col lg:w-3/5 gap-6">
        {/* <h2 className="text-xl font-light text-gray-500">2024</h2>
        <h1 className="text-3xl font-bold mb-2">New collection</h1> */}


        {/* Title + Description */}
        <div>

          {/* <h3 className="uppercase text-sm tracking-wide text-gray-500">
            {product.subtitle}
          </h3> */}


          <h1 className="text-5xl font-extrabold text-[#415a77]">{product.title}</h1>
        </div>

        {/* Main Product Image */}
        <div className="flex justify-start">
          <Tilt>
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[380px] rounded-lg w-auto object-contain"
          />
          </Tilt>
        </div>

        {/* Product Thumbnails */}
        <div className="flex items-center gap-2 overflow-x-auto">
          {[...Array(3)].map((_, idx) => (
            <img
              key={idx}
              src={product.image}
              alt="alt"
              className="w-20 h-16 object-cover rounded-md border"
            />
          ))}
        </div>


        {/* Video Preview */}
        {/* <div>
          <h3 className="text-gray-500 text-sm mb-2">Watch video</h3>
          <div className="relative">
            <img
              src={product.videoThumb}
              alt="video"
              className="rounded-lg w-full object-cover"
            />
            <button className="absolute inset-0 m-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
              ▶️
            </button>
          </div>
        </div> */}
        

      </div>

      {/* Right Sidebar */}
      <div className="lg:w-2/5 flex flex-col gap-6">

        {/* Product Info Block */}
        <div className="bg-gray-100 p-4 rounded-lg w-full max-w-sm overflow-auto">
          <div className="flex justify-between items-center mb-2">
            <div>
            <h1 className="text-black mt-2">
            {product.subtitle.toUpperCase()}
          </h1>
            </div>
          </div><br />

          {/* price */}
          <div className='flex gap-3 items-center'>
            <span className="font-bold text-2xl text-[#415a77]"><span className='text-red'>$</span>{product.price.toLocaleString()}</span>
            {product.code && (<span className='badge badge-secondary rounded-sm'>New</span>)}
          </div><br/><hr/><br/>
          

          {/* Sizes */}
          <h1>Size</h1>
          <div className="flex gap-2 mt-2">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className="border px-3 py-1 rounded hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
            <button className="border rounded-full px-3">+</button>
          </div><br />
        </div>


        {/* care Instruction */}
        <div className='care-info'>
              <h1>Care Insrtruction</h1>
              <p>{product.careInstruction}</p>
          </div><hr/>

          {/* Note */}
          <div className='care-info'>
              <h1>Note</h1>
              <p>{product.note}</p>
          </div>


        {/* Buy Now */}
        <Link to="/cart">
        <div className='w-full max-w-sm bg-[#415a77] rounded-md flex items-center justify-center'>
          <button className="text-white p-3 rounded-md">Buy Now</button>
        </div>
        </Link>

        {/* Links */}
        {/* <div className="flex flex-col gap-2">
          <span className="hover:underline cursor-pointer">INFO</span>
          <span className="hover:underline cursor-pointer">SOCIAL CONNECTS</span>
          <span className="hover:underline cursor-pointer">CLASSICS</span>
        </div> */}

        {/* What Others Say */}
        <button className="mt-4 w-full max-w-sm bg-gray-200 p-3 rounded-md flex items-center justify-between">
          <span>What others say?</span>
          <img
            src="https://img.icons8.com/ios-filled/50/instagram-new.png"
            alt="Instagram"
            className="w-5 h-5"
          />
        </button>

        {/* You May Also Like */}
        <div>
          <h3 className="text-sm font-semibold mb-2">YOU MAY ALSO LIKE</h3>
          <div className="flex gap-2 overflow-x-auto">
            {product.related.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="related"
                className="w-32 h-24 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetail;
