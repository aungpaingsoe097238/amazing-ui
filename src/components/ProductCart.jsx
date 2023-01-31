import React from "react";
import { BsStarFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const ProductCart = () => {
  return (
    <>
      <div className="card relative flex flex-col gap-3">
        {/* Image */}
        <div className="flex justify-center p-3 ">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
            className=" h-[200px] md:-mt-[50%] hover:-rotate-12 transition  "
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
            <span className="badge absolute top-1 left-1">5.5k</span>
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
        <div className="flex justify-end mt-auto gap-2">
          <button type="button" className="btn-dark flex items-center gap-1">
            Add To Cart
            <MdOutlineAddShoppingCart className="text-xl" />
          </button>
          <button
            type="button"
            className=" bg-sky-800 hover:bg-sky-900 focus:outline-none focus:ring-4 focus:ring-gray-300 px-3 py-2 rounded-lg text-white flex items-center gap-1"
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
