import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/product_Details');
  };

  return (
    <div className="Product-container bg-zinc-100 cursor-pointer">
      <div className="Product bg-white w-72 text-black my-5 p-5 shadow-md rounded-xl">
        <figure className="px-4 pt-4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Product"
            className="rounded-xl"
          />
        </figure>
        <div className="Product-body text-center mt-4">
          <h2 className="Product-title text-xl font-bold">Card Title</h2>
          <p className="text-lg font-semibold text-green-600">$49.99</p>
          <p className="text-sm text-gray-600 mt-2">
            A card component with image, body, and actions.
          </p>
          <div className="Product-actions pt-4">
            <button
              onClick={handleRedirect}
              className="btn bg-[#415a77] text-white px-6 py-2 rounded hover:bg-[#2d3f56] transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
