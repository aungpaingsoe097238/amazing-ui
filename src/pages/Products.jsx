import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";
import { useGetProductsQuery } from "../features/api/productApi";

const Products = () => {
  const { data } = useGetProductsQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className=" mx-auto text-2xl font-bold mt-[100px] my-3">
        All Products
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-3 ">
        {data?.map((product) => (
          <ProductCart prop={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
