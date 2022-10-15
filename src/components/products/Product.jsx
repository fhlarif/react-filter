import React from "react";

function Product({ id, title, img, price }) {
  return (
    <li className=" pt-8 mt-10 flex flex-1  bg-gray-700 w-96 rounded-lg">
      <div className="flex w-full justify-center  flex-col gap-4">
        <span className=" lg:text-7xlxl text-5xl xl:text-9xl  p-2 rounded-lg">{img}</span>
        <span className=" text-gray-200 text-lg tracking-wide font-bold ">{title}</span>
        <div className="flex items-center flex-wrap gap-2 justify-between bg-black">
          <span className="px-2 text-white text-lg uppercase">RM{price}</span>
          <span className="px-2 text-white bg-emerald-700 rounded-md capitalize">Add to Cart</span>
        </div>
      </div>
    </li>
  );
}

export default Product;
