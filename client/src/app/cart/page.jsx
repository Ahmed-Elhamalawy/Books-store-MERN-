"use client";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CartCard from "@/components/cart-Card";
import React from "react";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/cartSlice";
import Link from "next/link";

const CartPage = () => {
  const cart = useSelector((state) => state.cartSlice.items);
  const totalPrice = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const totalPriceWithtaxes = Math.round(totalPrice * 1.14);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart({ payload: { productId: item.productId } }));
  };
  return (
    <>
      <section className="h-full bg-[#5956e9] rounded-b-[10%]">
        <NavBar />
        <section className="w-full h-full grid grid-cols-3 ">
          <div className="grid col-span-2 w-[90%] h-fit bg-white rounded-3xl my-5 mx-5">
            <Link
              href="/books"
              className="border-b-2 pb-4 text-4xl flex items-center justify-start mx-12 mb-5 my-5"
            >
              <AiOutlineArrowLeft />
              continue shopping
            </Link>
            <h1 className=" mx-12 text-xl">
              you have {cart.length} items in the cart
            </h1>
            {cart.map((item) => (
              <CartCard
                key={item.productId}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                removeItem={handleRemoveFromCart}
              />
            ))}
          </div>
          <div className="grid col-span-1 w-[90%] h-fit bg-white rounded-3xl my-5 mx-5">
            <form>
              <h1 className="text-3xl my-5 mx-4 uppercase">Card DETAILS</h1>
              <h1 className="text-xl my-2 mx-4">card type</h1>
              <h1 className="flex items-center justify-start gap-6 mx-4 mb-5">
                <FaCcVisa size={30} color="blue" />
                <FaCcMastercard size={30} color="blue" />
                <FaCcPaypal size={30} color="blue" />
              </h1>
              <input
                type="text"
                placeholder="card holder name"
                className="mx-4 px-4 py-2 rounded-sm border-2 border-[#576574] focus:outline-none focus:border-[#576574] w-[90%] my-2"
              />
              <input
                type="text"
                placeholder="card number"
                className="mx-4 px-4 py-2 rounded-sm border-2 border-[#576574] focus:outline-none focus:border-[#576574] w-[90%] my-2"
              />
              <div>
                <input
                  type="text"
                  placeholder="expiry date"
                  className="mx-4 px-4 py-2 rounded-sm border-2 border-[#576574] focus:outline-none focus:border-[#576574] w-[90%] my-2"
                />
                <input
                  type="text"
                  placeholder=" cvv"
                  className="mx-4 px-4 py-2 rounded-sm border-2 border-[#576574] focus:outline-none focus:border-[#576574] w-[90%] my-2"
                />
              </div>
              <div className="flex flex-row items-center justify-between mx-3">
                <h1 className="text-xl my-2 font-bold">subtotal</h1>
                <h1 className="text-xl font-semibold">{totalPrice} $</h1>
              </div>
              <div className="flex flex-row items-center justify-between mx-3">
                <h1 className="text-xl my-2 font-bold">taxes</h1>
                <h1 className="text-xl font-semibold">
                  {totalPriceWithtaxes} $
                </h1>
              </div>
              <div className="flex flex-row items-center justify-between mx-3">
                <h1 className="text-xl my-2 font-bold">Total </h1>
                <h1 className="text-xl font-semibold">
                  {totalPriceWithtaxes + totalPrice} $
                </h1>
              </div>
              <button className="text-2xl text-white font-semibold mx-auto w-[80%] bg-[#5956e9] rounded-md flex flex-col items-center justify-center h-12 text-center my-5">
                checkout
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default CartPage;
