import React from "react";
import bookImg from "../../assets/pngwing 1.png";
const Banner = () => {
  return (
    <div className="flex items-center justify-around  p-15 w-full mx-auto bg-[#1313130D] my-12 rounded-lg">
      <div>
        <h1 className="text-6xl font-medium mb-10">
          Books to freshen up <br /> your bookshelf
        </h1>
        <a
          href="#_"
          className="relative px-5 py-2 font-medium text-white group"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span className="relative"> View The List</span>
        </a>
      </div>
      <div>
        <img className="rounded-md" src={bookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
