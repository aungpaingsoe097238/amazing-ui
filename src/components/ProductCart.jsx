import React from "react";
import { BsStarFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const ProductCart = ({ prop }) => {
  const handleProductDetail = () => {
    // console.log(prop);
  };

  const handleAddToCart = (event, product) => {
    let newImg = new Image();
    newImg.src = product?.image;
    newImg.style.position = "fixed";
    newImg.style.height = "200px";
    newImg.style.zIndex = 2000;
    newImg.style.transition = 1 + "s";
    newImg.style.top =
      event.target.parentElement.parentElement.getBoundingClientRect().top +
      "px";
    newImg.style.left =
      event.target.parentElement.parentElement.getBoundingClientRect().left +
      "px";
    document.body.append(newImg);

    let cartIcon = document.querySelector(".cart-icon");

    setTimeout(_ => {
      newImg.style.height = 0 + "px";
      newImg.style.transform = "rotate(360deg)"
      newImg.style.top = (cartIcon.getBoundingClientRect().top + 10) + "px";
      newImg.style.left = (cartIcon.getBoundingClientRect().left + 30) + "px";
    }, 100)

    setTimeout(_ => {
      cartIcon.classList.add("animate__tada");
      newImg.remove();
    }, 800)

    cartIcon.addEventListener('animationend', _ => cartIcon.classList.remove('animate__tada'))

  };

  const except = (text, limit = 100) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  return (
    <>
      <div className="card relative flex flex-col gap-3">
        {/* Image */}
        <div className="flex justify-center p-3 ">
          <img
            src={prop?.image}
            alt=""
            className=" h-[200px] hover:-rotate-12 transition max-w-full product-img "
          />
        </div>
        {/* Title & Star */}
        <div className="flex flex-wrap gap-2">
          <span className="font-bold text-xl w-full overflow-hidden whitespace-nowrap text-gray-500">
            {prop?.title}
          </span>
          <span className="flex flex-row items-center w-full gap-1">
            <BsStarFill className=" text-yellow-500" />
            <BsStarFill className=" text-yellow-500" />
            <BsStarFill className=" text-yellow-500" />
            <BsStarFill className=" text-yellow-500" />
            <BsStarFill className=" text-yellow-500" />
            <span className="badge absolute top-1 left-1 text-xs">
              {prop?.rating?.rate}
            </span>
          </span>
        </div>
        {/* Price */}
        <div className=" text-gray-500 font-semibold text-xl">
          $ <span className="">{prop?.price}</span>
        </div>
        <div>
          <span className="bg-sky-100 text-sky-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-sky-900 dark:text-sky-300 text-xs">
            {prop?.category}
          </span>
        </div>
        {/* Description */}
        <div className=" text-gray-500">
          <p>{except(prop.description)}</p>
        </div>
        {/* Button */}
        <div className="flex justify-end mt-auto gap-2 flex-col lg:flex-row">
          <button
            type="button"
            className="btn-dark flex justify-around items-center w-full"
            onClick={() => handleAddToCart(event, prop)}
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
