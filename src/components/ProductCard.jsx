// import React from "react";
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   return (
//     <Link to={`/products/${product.id}`}>
//       <div className="min-w-24 max-w-24 min-h-24 max-h-24 m-5">
//         <img src={product.images[0]} alt={product.title} />
//         <h3>{product.title}</h3>
//       </div>
//     </Link>
//   );
// }

// export default ProductCard;
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3">
      <div className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <div className="w-full h-40 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 truncate">
            {product.title}
          </h3>
          <p className="text-gray-500 text-xs mt-1">
            {product.price ? `$${product.price.toFixed(2)}` : "Price unavailable"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
