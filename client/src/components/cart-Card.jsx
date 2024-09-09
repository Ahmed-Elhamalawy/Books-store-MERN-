import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";
import React from "react";

const CartCard = ({ title, price, quantity, removeItem }) => {
  return (
    <div>
      <section className="flex flex-row items-center justify-between bg-white p-7 rounded-md my-5 mx-11 shadow-lg h-20">
        <Image src="/caaaardPhoto.png" alt="photo" width={70} height={70} />
        <div className="flex flex-col gap-12 w-full">
          <h1 className="text-2xl font-bold">{title || "title"}</h1>
        </div>
        <h1 className="text-xl w-full">{quantity || "quantity"}</h1>
        <h1 className="text-xl w-full">{price || "price"} $</h1>
        <button className="text-3xl ">
          <AiOutlineDelete onClick={removeItem} />
        </button>
      </section>
    </div>
  );
};

export default CartCard;
