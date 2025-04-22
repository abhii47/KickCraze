import React from 'react'

const Product_Cart = () => {
  return (
    <div className='min-h-screen bg-white text-black px-6 lg:px-40 py-10 flex flex-col lg:flex-row gap-10 mt-[-50px]'>


{/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                                                        {/* left Section */}
        <div className="flex flex-col lg:w-3/5 p-5 gap-6 bg-gray-100">
        <h1 className='font-semibold text-3xl'>Cart</h1><hr/>

                                                       {/* card Container */}
          <div className='card-container flex gap-4 p-4 border-b-1 border-red-200 rounded-lg'>
            
                                                            {/* image */}
            <div className="flex justify-start w-50 h-30">
                <img
                    src="https://i.pinimg.com/736x/7a/55/83/7a5583517446c5aabc68f92973e37d05.jpg"
                    alt="Image"
                    className="max-h-[380px] rounded-lg w-auto object-contain"
                />
            </div>

                                                        {/* Details */}
            <div className='w-full flex flex-col gap-2' >
                
                <div className='flex justify-between px-3'>
                    <h2 className='font-bold text-2xl '>Shoe Name</h2>
                    <span className='font-semibold text-2xl' >$119</span>
                </div>

                <div className='flex px-3 gap-2 items-center'>
                    <span className='font-semibold text-lg' >$119</span>
                    <span className='badge badge-secondary'>In Stock</span>

                </div>

                <div className='flex px-3 gap-2 items-center'>
                    <h2 className='font-semibold text-md rounded-lg px-4 py-1 bg-zinc-300 '>Size</h2>
                    <h2 className='font-semibold text-md rounded-lg px-4 py-1 bg-zinc-300 '>Color</h2>
                    <button className='rounded-lg px-2 py-1 bg-green-300' >1</button>

                </div>

                
            </div>
          </div>
        </div>

{/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                                                        {/* right section */}
        <div className="lg:w-2/5 flex flex-col p-5 gap-6 bg-gray-100">


                                                        {/* delivery date */}
            <div className='w-full pb-3 border-b-1 border-zinc-200'>
                <h1 className='font-semibold text-2xl'>Delivery</h1>
                <p className='text-green-400 text-sm'>Delivery Date:<span className='text-red-400'> June 24,2025</span></p>
            </div>

                                                    {/* Promo code section */}
            <div className='w-full pb-3 border-b-1 border-zinc-200'>
                <div className='border border-gray-300 flex rounded-lg'>
                    <input type="text" placeholder="Enter discount code" className="border-0 p-2 w-full" />
                    <button className='bg-zinc-200 px-4 py-1 rounded-lg'>Apply</button>
                </div>
                <p className='text-green-400 text-sm'>20% off discount</p>
            </div>

                                                {/* discount and tax section */}
            <div className='w-full pb-3 border-b-1 border-zinc-200'>
                <div className='flex justify-between pb-2'>
                    <h2 className='font-semibold text-lg'>Subtotal</h2>
                    <p className='font-semibold text-lg'>$100.00</p>
                </div>

                <div className='flex justify-between'>
                    <h2 className='text-md'>Discount</h2>
                    <p className='text-sm'>(20%) -$20.00</p>
                </div>

                <div className='flex justify-between'>
                    <h2 className='text-md'>Delivery <span className='badge badge-ghost'> i</span></h2>
                    <p className='text-sm'>$0.00</p>
                </div>

                <div className='flex justify-between'>
                    <h2 className='text-md'>Tax <span className='badge badge-ghost'> i</span></h2>
                    <p className='text-sm'>+ $18.00</p>
                </div>

            </div>

                                                        {/* button Section */}
            <div className='w-full pb-3'>
                <div className='flex justify-between'>
                    <h1>Total</h1>
                    <p className='font-semibold'>$98</p>
                </div><br/>
                
                <div className='flex flex-col gap-2'>
                    <button className='bg-zinc-700 text-white px-4 py-2 rounded-lg w-full'>Payment</button>
                    <button className='border-1 border-zinc-700 text-black px-4 py-2 rounded-lg w-full'>Continue Shopping</button>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Product_Cart
