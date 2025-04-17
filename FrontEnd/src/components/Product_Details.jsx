import React from 'react';

const ProductDetail = () => {
  const product = {
    id: 1,
    title: 'Platform',
    subtitle: 'Leather Effect Puffer Jacket',
    color: 'Black leather',
    price: 3200,
    code: '8281/420',
    sizes: [34, 36, 37],
    image:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    videoThumb:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    related: [
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  };

  return (
    <div className="min-h-screen bg-white text-black px-6 lg:px-40 py-10 flex flex-col lg:flex-row gap-10 mt-[-50px]">
      {/* Left Section */}
      <div className="flex flex-col lg:w-3/5 gap-6">
        <h2 className="text-xl font-light text-gray-500">2024</h2>
        <h1 className="text-3xl font-bold mb-2">New collection</h1>

        {/* Main Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[500px] w-auto object-contain"
          />
        </div>

        {/* Product Thumbnails */}
        <div className="flex items-center gap-2 overflow-x-auto">
          {[...Array(3)].map((_, idx) => (
            <img
              key={idx}
              src={product.image}
              alt="alt"
              className="w-16 h-16 object-cover rounded-md border"
            />
          ))}
        </div>

        {/* Product Info Block */}
        <div className="bg-gray-100 p-4 rounded-lg w-full max-w-sm">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="font-semibold">{product.subtitle}</h3>
              <p className="text-gray-500 text-sm">{product.code}</p>
            </div>
            <span className="text-lg font-bold">${product.price.toLocaleString()}</span>
          </div>

          {/* Sizes */}
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
          </div>
        </div>

        {/* What Others Say */}
        <button className="mt-4 w-full max-w-sm bg-gray-200 p-3 rounded-md flex items-center justify-between">
          <span>What others say?</span>
          <img
            src="https://img.icons8.com/ios-filled/50/instagram-new.png"
            alt="Instagram"
            className="w-5 h-5"
          />
        </button>

        {/* Title + Description */}
        {/* <div>
          <h3 className="uppercase text-sm tracking-wide text-gray-500">
            {product.subtitle}
          </h3>
          <h1 className="text-5xl font-extrabold">{product.title}</h1>
          <p className="text-gray-400 mt-2">
            / {product.color.toUpperCase()} | {product.code}
          </p>
        </div> */}
      </div>

      {/* Right Sidebar */}
      <div className="lg:w-2/5 flex flex-col gap-6">
        {/* Video Preview */}
        <div>
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
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <span className="hover:underline cursor-pointer">INFO</span>
          <span className="hover:underline cursor-pointer">SOCIAL CONNECTS</span>
          <span className="hover:underline cursor-pointer">CLASSICS</span>
        </div>

        {/* You May Also Like */}
        <div>
          <h3 className="text-sm font-semibold mb-2">YOU MAY ALSO LIKE</h3>
          <div className="flex gap-2 overflow-x-auto">
            {product.related.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="related"
                className="w-24 h-32 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
