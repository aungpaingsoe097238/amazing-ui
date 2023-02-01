import React from "react";
import { BsStarFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductDetail from "../components/model/ProductDetail";

const ProductCart = () => {
  const handleProductDetail = () => {
    console.log("Detail");
  };

  return (
    <>
      <div className="card relative flex flex-col gap-3">
        {/* Image */}
        <div className="flex justify-center p-3 ">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
            className=" h-[200px] hover:-rotate-12 transition  "
          />
        </div>
        {/* Title & Star */}
        <div className="flex flex-wrap gap-2">
          <span className="font-bold text-xl w-full overflow-hidden whitespace-nowrap text-gray-500">
            This the product title
          </span>
          <span className="flex flex-row items-center w-full gap-1">
            <BsStarFill className=" text-yellow-500" />
            <BsStarFill className=" text-yellow-500" />
            <BsStarFill className=" text-yellow-500" />
            <BsStarFill className=" text-yellow-500" />
            <BsStarFill className=" text-yellow-500" />
            <span className="badge absolute top-1 left-1 text-sm">5.5k</span>
          </span>
        </div>
        {/* Price */}
        <div className=" text-gray-500 font-semibold text-xl">
          $ <span className="">200</span>
        </div>
        {/* Description */}
        <div className=" text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus
            sit, fugit obcaecati ...
          </p>
        </div>
        {/* Button */}
        <div className="flex justify-end mt-auto gap-2 flex-col lg:flex-row">
          <button
            type="button"
            className="btn-dark flex justify-around items-center w-full"
          >
            Add To Cart
            <MdOutlineAddShoppingCart className="text-xl" />
          </button>
          <button
            type="button"
            className=" btn-primary flex justify-around items-center w-full"
            onClick={handleProductDetail}
          >
            More Detail
            <BsArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
