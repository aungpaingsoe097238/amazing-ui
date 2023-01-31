import React from "react";
import Top from "../components/Top";
import ProductCart from "../components/ProductCart";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-center items-center h-screen">
        <Top />
      </div>

      {/* Latest Products */}
      <div className="flex flex-col justify-center items-center h-screen relative">
        <div className=" absolute top-2 mx-auto text-2xl font-bold">
          Latest Products
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 ">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        <div className=" w-full text-end mt-3">
          <Link to="/" className="flex justify-end items-center gap-1 hover:text-gray-500">
            Show All Products
            <BsArrowRight />
          </Link>
        </div>
      </div>

      

    </>
  );
};

export default Home;
