import React from "react";
import ProductCart from "../components/ProductCart";

const Products = () => {
  return (
    <>
      <div className=" mx-auto text-2xl font-bold mt-[100px] my-3">
        All Products
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-3 ">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </>
  );
};

export default Products;
