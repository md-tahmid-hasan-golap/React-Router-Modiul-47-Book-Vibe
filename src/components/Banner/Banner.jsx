import React from "react";
import bookImg from "../../assets/pngwing 1.png";
const Banner = () => {
  return (
    <div className="flex items-center justify-around  p-15 w-full mx-auto bg-[#1313130D] my-12 rounded-lg">
      <div>
        <h1 className="text-6xl font-medium">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="bg-[#23BE0A] text-white mt-10 rounded-md px-4 py-3 font-bold">
          View The List
        </button>
      </div>
      <div>
        <img className="rounded-md" src={bookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
