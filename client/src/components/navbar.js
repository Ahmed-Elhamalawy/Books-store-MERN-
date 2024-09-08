"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const Router = useRouter();
  const token = localStorage.getItem("token");

  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("user_id");
    Router.push("/");
  };

  return (
    <section className="flex flex-row items-center justify-around bg-transparent text-white bg-[#5956e9] h-20">
      <div className="flex items-center">
        <div className="bg-white text-white rounded-full p-2">
          <span className="text-xl font-bold text-black">e</span>
        </div>
        <span className="ml-2 text-2xl font-bold text-white ">
          <Link href="/">Redex</Link>
        </span>
      </div>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/books">About</Link>

        <Link href="/books">Contact Us</Link>
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
