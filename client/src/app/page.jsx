"use client";
import Card from "@/components/card";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const token = localStorage.getItem("token");

  return (
    <>
      <section className="h-screen bg-[#5956e9] rounded-b-[10%]">
        {/* ******************************  NavBar ****************************** */}
        <NavBar />

        {/* ******************************  Hero Section ****************************** */}
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center text-orange-600">
            <ClipLoader color="#e67e22" size={100} />
          </div>
        ) : (
          <div className="flex flex-col w-full items-center  h-full gap-5 justify-start translate-y-24 ">
            <h1 className="text-7xl text-white w-1/2 flex text-center font-bold">
              Expanding your mind, reading book
            </h1>
            <h2 className="text-xl text-white w-1/2 flex text-center font-light">
              Reading books is a wondderful way to spend your time.Here at we
              beleive reading will help you make connections with athers
            </h2>

            <main>
              {token ? (
                <div className="text-4xl mt-5 flex flex-row w-full items-center justify-center gap-8">
                  <span className="text-white font-bold">
                    Welcome back, {localStorage.getItem("userName")}
                  </span>
                  <Link href="/books">
                    <button className="p-3 w-fit text-white border-2 border-white rounded-xl h-16 text-2xl  hover:bg-white hover:text-black font-semibold">
                      {localStorage.getItem("userType") === "publisher" ? (
                        <Link href="/">My Books</Link>
                      ) : (
                        <Link href="/books">View All Books</Link>
                      )}
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-5">
                  <button className="border-2 border-[white] rounded-xl w-52 h-16 text-md mt-9 bg-white text-black font-semibold hover:bg-[#5956e9]">
                    <Link href="/publisherSignUp">I'am a publisher</Link>
                  </button>
                  <button className="text-white border-2 border-white rounded-xl w-52 h-16 text-md mt-9 hover:bg-white hover:text-black font-semibold">
                    <Link href="/ReaderSignUp">I'am a Reader</Link>
                  </button>
                </div>
              )}
            </main>
          </div>
        )}

        {/* ******************************  Cool Photo ****************************** */}
        <div className="w-full h-32 rounded-t-[-10%] bg-white ">
          <div id="cool-photo" className="translate-y-[-70%]"></div>
        </div>
        {/* ******************************  New Arrivals ****************************** */}
        <div className="w-full h-fit  bg-[#5956e9] bg-opacity-35 p-5  ">
          <div className="flex flex-col  text-start items-center justify-center   w-full">
            <h1 className="text-4xl font-semibold opacity-80 ">New Arrivals</h1>
            <h3 className="text-xl font-light opacity-70">
              find our top categories that will help you find what you are
              looking for
            </h3>
          </div>
          <div
            id="card-bucket"
            className="w-fit py-7 px-32 my-5 rounded-3xl bg-white flex flex-row mx-auto  gap-5  justify-center items-center"
          >
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
