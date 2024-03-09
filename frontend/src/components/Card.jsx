import React from "react";
import "./Styles/Product.css";
function Card({ product }) {
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="mx-auto max-w-[1024px] mt-5 mb-5">
      <div className="text-white w-[300px] h-[350px] max-h-full cursor-pointer border-1 flex-col product">
        <img
          className="w-[300px] max-w-full h-[50%]"
          src={product.images[0]}
          alt="product-img"
          width={100}
        ></img> 
        <h1 className=" p-2 text-[#F3A847] font-bold max-w-full">
          {product.title}
        </h1>
        <p className="p-2">{truncateString(product.description, 60)}</p>
        <h2 className="pl-2 text-[#F3A847]">${product.price}</h2>
      </div>
    </div>
  );
}

export default Card;
