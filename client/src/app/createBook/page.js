"use client";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  //   const [publisherId, setPublisherId] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  //   const  publisherId= localStorage.getItem("user_id")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/createBook", {
        title,
        author,
        publisherId: localStorage.getItem("user_id"),
        genre,
        year,
        price,
        image,
        description,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="h-fit bg-[#5956e9] rounded-b-[10%] ">
        {/* ******************************  NavBar ****************************** */}
        <NavBar />
        {/* ******************************  Hero Section ****************************** */}

        <div className="mb-28 flex flex-col w-full items-center  h-full gap-5 justify-start translate-y-10 ">
          <h1 className="text-7xl text-white w-1/2 flex text-center font-bold">
            Publish new book
          </h1>
          <form className="flex flex-col gap-5 w-1/3 ">
            <label className="text-white text-xl">title</label>
            <input
              className="border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="text"
              name="title"
              placeholder="Enter your title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="text-white text-xl">author</label>
            <input
              className="border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="text"
              name="author"
              placeholder="Enter your author"
              onChange={(e) => setAuthor(e.target.value)}
            />
            {/* <label className=" hidden text-white text-xl">publisherId</label>
            <input
              className="hidden border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="text"
              name="publisherId"
              placeholder="Enter your publisherId"
              onChange={(e) =>
                setPublisherId(`${localStorage.getItem("user_id")}`)
              }
            /> */}
            <label className="text-white text-xl">genre</label>
            <input
              className="border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="text"
              name="genre"
              placeholder="Enter your genre"
              onChange={(e) => setGenre(e.target.value)}
            />
            <label className="text-white text-xl">year</label>
            <input
              className="border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="year"
              id="year"
              name="year"
              placeholder="Enter your year"
              onChange={(e) => setYear(e.target.value)}
            />
            <label className="text-white text-xl">price</label>
            <input
              className="border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="price"
              id="price"
              name="price"
              placeholder="Enter your price"
              onChange={(e) => setPrice(e.target.value)}
            />{" "}
            <label className="text-white text-xl hidden">image</label>
            <input
              className="hidden border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.value)}
            />{" "}
            <label className="text-white text-xl">description</label>
            <input
              className="border-2 border-[white] rounded-xl w-full h-16 text-md px-4 bg-[#5956e9] text-white"
              type="description"
              id="description"
              name="description"
              placeholder="Enter your description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className="border-2 border-[white] rounded-xl w-full h-16 text-md mt-9 bg-white text-black font-semibold hover:bg-[#5956e9]"
              type="submit"
              onClick={handleSubmit}
            >
              Publish
            </button>
          </form>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default CreateBook;
