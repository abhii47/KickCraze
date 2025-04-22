import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { IoHeartOutline } from "react-icons/io5"
import products from "../data/productData";

const Product = () => {

  return (
    <div className="Product-container flex flex-wrap gap-4 justify-center items-stretch  bg-zinc-100 cursor-pointer">

                                                      {/* cord container */}

      {products.map((p)=>(
        <div key={p.id} className="Product bg-white w-72 text-black my-5 p-5 shadow-md rounded-xl">


      {/*------------------------------------------------------------------------------------------------------------------------ */}

          {/* image contain in cards  */}
        <Tilt>  
        <figure className="px-4 pt-4 flex justify-center">
          <img
            src={p.image}
            alt="Product"
            className="rounded-xl w-[200px] h-[150px]"
          />
        </figure>
        </Tilt>

      {/*------------------------------------------------------------------------------------------------------------------------ */}

        {/* after image section */}
        <div className="Product-body text-center mt-4">
          

          {/* it holds the subtitle in cards */}
          <h2 className="Product-title text-xl font-bold">{p.title}</h2>

          {/* --------------------------------------------------------------------------------- */}

          {/* it holds the price in cards */}
          <p className="text-lg font-semibold text-green-600">${p.price}</p>
          
          {/* --------------------------------------------------------------------------------- */}

          {/* it holds the subtitle in cards */}
          <p className="text-sm text-gray-600 mt-2">
            {p.subtitle}
          </p>
          
          {/* ---------------------------------------------------------------------------------- */}

          {/* lower section of card */}
          <div className="Product-actions pt-4 flex gap-1.5">

            {/* add to Cart Icons */}
            {/* <div className='px-4 py-1.5 bg-zinc-100 rounded-lg'>
                <IoHeartOutline className='text-3xl '/>
            </div> */}
            
            {/* checkout button it redirect in product-details page */}
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
