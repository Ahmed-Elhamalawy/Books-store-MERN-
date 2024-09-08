"use client";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function ReaderLogin() {
  const Router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/Reader-login", {
        email,
        password,
      });
      console.log(response.data);

      if (response.status === 200) {
        if (response.status === 200) {
          localStorage.setItem("userName", response.data.data.reader.name);
          localStorage.setItem("userEmail", response.data.data.reader.email);
          localStorage.setItem("token", response.data.data.token);
          Router.push("/");
        }
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="h-screen bg-[#5956e9] rounded-b-[10%]">
        {/* ******************************  NavBar ****************************** */}
        <NavBar />
        {/* ******************************  Hero Section ****************************** */}

        <div className="flex flex-col w-full items-center  h-full gap-5 justify-start translate-y-10 ">
          <h1 className="text-7xl text-white w-1/2 flex text-center font-bold">
            Login for Readerr
          </h1>
          <form className="flex flex-col gap-5 w-1/3 ">
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
            <button
              className="border-2 border-[white] rounded-xl w-full h-16 text-md mt-9 bg-white text-black font-semibold hover:bg-[#5956e9]"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>

        <Footer />
      </section>
    </>
  );
}
