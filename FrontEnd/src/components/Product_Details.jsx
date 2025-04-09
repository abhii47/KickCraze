import React from 'react';

const ProductDetail = () => {
  const product = {
    id: 1,
    title: 'Stylish Modern Chair',
    price: 149.99,
    image:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    description:
      'Experience ultimate comfort with our stylish modern chair. Crafted from premium materials, this chair is perfect for your living room or office.',
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-xl shadow"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl text-green-600 font-semibold mb-4">
              ₹{product.price}
            </p>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mt-6">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
