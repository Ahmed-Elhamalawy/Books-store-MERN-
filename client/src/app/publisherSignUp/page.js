"use client";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function PublisherSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [books, setBooks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000//Publisher-signup", {
        name,
        email,
        password,
        books,
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <section className="h-screen bg-[#5956e9] rounded-b-[10%]">
        {/* ******************************  NavBar ****************************** */}
        <NavBar />
        {/* ******************************  Hero Section ****************************** */}

        <div className="flex flex-col w-full items-center  h-full gap-5 justify-start translate-y-10 ">
          <h1 className="text-7xl text-white w-1/2 flex text-center font-bold">
            Sign Up for Publisher
          </h1>
          <form className="flex flex-col gap-5 w-1/3 ">
            <label className="text-white text-xl" htmlFor="name">
              Name
            </label>
            <input
              className="border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="text-white text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-white text-xl" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="hidden border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="text"
              id="text"
              name="books"
              onChange={(e) => setBooks(e.target.value)}
            />
            <button
              className="border-2 border-[white] rounded-xl w-full h-16 text-md mt-9 bg-white text-black font-semibold hover:bg-[#5956e9]"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <Link href="/publisherLogin" className="text-center text-white">
              Already have an account?
            </Link>
          </form>
        </div>

        <Footer />
      </section>
    </>
  );
}
