import React from "react";
import products from "../data/productData";

const ProductListPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Shoe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.subtitle}</p>
            <p className="text-gray-800 font-medium mb-1">Price: ₹{product.price}</p>
            <p className="text-gray-600 text-sm mb-1">Color: {product.color}</p>
            <p className="text-gray-600 text-sm mb-1">Sizes: {product.sizes.join(", ")}</p>
            <p className="text-gray-600 text-sm mb-1">Care: {product.careInstruction}</p>
            <p className="text-gray-500 text-xs italic">{product.note}</p>
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700">Similar Items:</p>
              <div className="flex gap-2 mt-1">
                {product.related.map((item, idx) => (
                  <img
                    key={idx}
                    src={item}
                    alt="related"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="mt-3">
              <video
                src={product.videoThumb}
                controls
                className="w-full rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
