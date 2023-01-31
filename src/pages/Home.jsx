import React from "react";
import Latest from "../components/Latest";
import Hero from "../components/Top";
import { BsStarFill } from "react-icons/bs";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-center items-center h-screen">
        <Hero />
      </div>

      {/* Latest Products */}
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <div className="">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt=""
                className=" h-96"
              />
            </div>
            <div className="flex flex-wrap">
              <span className="font-bold text-xl overflow-hidden whitespace-nowrap ">
                This the product title
              </span>
              <span className="flex items-center gap-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <span className=" text-gray-500">
                rating(5.5k)
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
