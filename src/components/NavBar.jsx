import React from "react";
import { BsShopWindow, BsCart } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container z-50 bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-90 border shadow-md rounded-md fixed top-0 mx-auto">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <NavLink to="/" className=" flex justify-center items-center gap-2">
          <BsShopWindow className=" text-2xl" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Amazing UI
          </span>
        </NavLink>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <BsCart className=" text-2xl cursor-pointer relative animate__animated cart-icon" />
              <span className=" text-xs bg-red-300 rounded-full p-1 absolute top-3 right-5">10</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
