import React from 'react'

function Product() {
  return (
    <div className='Product-container bg-zinc-100' >
        <div className="Product bg-zinc-100 w-96 text-black my-5 py-5 flex flex-col gap-5">
            <figure className="px-10 pt-10">
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="Product-body items-center text-center">
                <h2 className="Product-title">Card Title</h2>
                <p className="text-lg font-semibold">$49.99</p>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="Product-actions">
                    <button className="btn bg-[#415a77]">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
