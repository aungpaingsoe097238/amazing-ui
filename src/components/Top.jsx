import React from "react";
import Hero from "../static/PNG/DrawKit Vector Illustration Black Friday & Online Shopping (8).png";
import { BsArrowRight } from "react-icons/bs";

const Top = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center">
        <div className="text-end">
          <div className="text-5xl my-3 font-extrabold">This is the Title</div>
          <div className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ex
            molestiae dolorem nemo sunt excepturi aliquid itaque consequuntur,
            repellendus, quod, iusto beatae ducimus. Aspernatur dolorem enim
            harum quos, ea facilis?
          </div>
          <div className="my-3">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <div className="flex gap-2 items-center">
                  Shop Now <BsArrowRight />
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <img src={Hero} alt="" />
      </div>
    </div>
  );
};

export default Top;
