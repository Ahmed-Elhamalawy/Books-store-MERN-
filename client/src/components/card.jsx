import React from "react";
import Image from "next/image";
import photo from "../../public/caaaardPhoto.png";
const Card = ({ title, Author, discription, price }) => {
  return (
    <>
      <div className="w-60 p-4 h-80 rounded-3xl shadow-lg  flex flex-col items-center justify-between bg-[#dbdeff] hover:scale-105 hover:ease-in-out hover:duration-300">
        {/* Image container */}
        <div className=" translate-y-3  rounded-full shadow-lg mb-4  w-3/6 bg-[#5956e9]">
          <Image src={photo} />
        </div>
        {/* Product info */}
        <div className="text-center w-[99%] rounded-3xl bg-white py-3">
          <h3 className="text-lg font-bold text-gray-800">
            {title || "Title"}
          </h3>
          <p className="text-orange-600 font-semibold">{Author || "Author"}</p>
          <p className="text-sm text-gray-500 mt-1">
            {discription || "Discription"}
          </p>
          <p className="text-orange-600 font-semibold mt-1">
            {price || "Price"}
          </p>
          {/* Button */}
        </div>
      </div>
    </>
  );
};

export default Card;
