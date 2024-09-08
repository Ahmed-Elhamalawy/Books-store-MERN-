"use client";
import Card from "@/components/card";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const BooksByPublisher = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/getPublisherBooks/${localStorage.getItem(
            "user_id"
          )}`
        );
        setBooks(response.data.data.books);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <section className="h-screen bg-[#5956e9] rounded-b-[10%]">
        {/* ******************************  NavBar ****************************** */}
        <NavBar />
        <div className="flex flex-row justify-center items-center gap-10 translate-y-1/2">
          {books.map((book) => (
            <Card
              key={book._id}
              title={book.title}
              Author={book.author}
              discription={book.discription}
              price={book.price}
            />
          ))}
        </div>
        {/* ******************************  New Arrivals ****************************** */}
      </section>
      <Footer />
    </>
  );
};

export default BooksByPublisher;
