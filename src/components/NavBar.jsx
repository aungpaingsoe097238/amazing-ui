import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="container z-50 bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-90 border shadow-md rounded-md fixed mx-auto">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className=" flex justify-center items-center gap-2">
          <BsShopWindow className=" text-2xl" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Amazing UI
          </span>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
