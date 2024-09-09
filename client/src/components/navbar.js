"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const carts = useSelector((state) => state.cartSlice.items);
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [carts]);

  const Router = useRouter();
  const token = localStorage.getItem("token");

  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("user_id");
    Router.push("/");
    window.location.reload();
  };

  return (
    <section className="sticky z-50 top-0 flex flex-row items-center justify-around  text-white bg-[#5956e9] h-20">
      <div className="flex items-center">
        <div className="bg-white text-white rounded-full p-2">
          <span className="text-xl font-bold text-black">e</span>
        </div>
        <span className="ml-2 text-2xl font-bold text-white ">
          <Link href="/">Redex</Link>
        </span>
      </div>

      <div className="flex gap-6">
        <div></div>
        <Link href="/" className="text-xl">
          Home
        </Link>
        <Link href="/books" className="text-xl">
          About
        </Link>
        <Link href="/books" className="text-xl">
          Contact Us
        </Link>
        {localStorage.getItem("userType") === "reader" ? (
          <div className="flex flex-row relative border-2 mx-2 px-3 gap-2 rounded-md">
            <span className="text-xl">my cart</span>
            <span className="text-md absolute right-2 top-0 translate-y-[-60%] rounded-full bg-red-500 w-5 h-5 text-center">
              {totalQuantity}
            </span>
            <Link href="/cart">
              <AiOutlineShoppingCart className=" size-7" />
            </Link>
          </div>
        ) : null}
      </div>
      <main>
        {token ? (
          <div>
            <Link href="/" onClick={removeToken}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="group">
            <button> Login</button>
            <div className="bg-red-500 hidden group-hover:block group-hover:bg-slate-600">
              <div className="hidden group-hover:flex flex-col gap-5  absolute bg-white text-black p-3 rounded-lg  ">
                <Link
                  className="font-bold tracking-widest"
                  href={"/publisherLogin"}
                >
                  Publisher Login
                </Link>
                <Link
                  className="font-bold tracking-widest"
                  href={"/ReaderLogin"}
                >
                  Reader Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default NavBar;
