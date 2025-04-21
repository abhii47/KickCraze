import React from 'react';
import { Link } from 'react-router-dom';
import products from "../data/productData";

const Product = () => {

  return (
    <div className="Product-container flex flex-wrap gap-4 justify-center items-stretch  bg-zinc-100 cursor-pointer">
      {products.map((p)=>(
        <div key={p.id} className="Product bg-white w-72 text-black my-5 p-5 shadow-md rounded-xl">
        <figure className="px-4 pt-4 flex justify-center">
          <img
            src={p.image}
            alt="Product"
            className="rounded-xl w-[200px] h-[150px]"
          />
        </figure>
        <div className="Product-body text-center mt-4">
          <h2 className="Product-title text-xl font-bold">{p.title}</h2>
          <p className="text-lg font-semibold text-green-600">${p.price}</p>
          <p className="text-sm text-gray-600 mt-2">
            {p.subtitle}
          </p>
          <div className="Product-actions pt-4">
          <Link to={`/${p.id}`}>
            <button
              className="btn bg-[#415a77] text-white px-20 py-2 rounded hover:bg-[#2d3f56] transition"
            >
              Checkout
            </button>
          </Link>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Product;
