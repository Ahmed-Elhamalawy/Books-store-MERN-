"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/card"; // Ensure the Card component is imported
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

export default function GetAllBooks() {
  const carts = useSelector((state) => state.cartSlice.items);
  const dispatch = useDispatch();
  console.log(carts);

  const router = useRouter();
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      (localStorage.getItem("token"),
      localStorage.getItem("userType") === "reader")
    ) {
    } else {
      router.push("/");
    }
  }, []);

  // Fetching book data from the API
  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:4000/getAllBooks?p=${page}`) // Make sure this is your actual API endpoint
      .then((response) => {
        setBooks(response.data.data); // Assuming the data is inside the "data" property
      })

      .catch((error) => {
        console.error("Error fetching books:", error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  }, [page]);
  const handleAddToCart = (book) => {
    dispatch(
      addToCart({
        productId: book._id,
        title: book.title,
        author: book.author,
        price: book.price,
        description: book.description,
        quantity: 1,
      })
    );
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <section className="h-[900px] bg-[#5956e9]  w-full pb-8">
        <NavBar />
        <section>
          {loading ? (
            <div className="w-full h-screen flex justify-center items-center text-orange-600">
              <ClipLoader color="#e67e22" size={100} />
            </div>
          ) : (
            <div className="flex items-center justify-center my-8">
              <div className="group grid grid-cols-3 justify-items-center gap-y-3  w-[60%] relative">
                {books.map((book) => (
                  <Card
                    key={book._id}
                    title={
                      <Link href={`/books/${book._id}`}>{book.title}</Link>
                    }
                    Author={book.author}
                    discription={
                      book.description.slice(0, 50) +
                      (book.description.length > 50 ? "..." : "")
                    }
                    price={`price : ${book.price}`}
                    addToCart={() => handleAddToCart(book)}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
        <div className="flex justify-center my-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 0}
          >
            Previous
          </button>
          <span className="mx-2">{page}</span>
          <button
            className="bg-white text-black hover:bg-blue-700  font-bold py-2 px-4 rounded"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === 1}
          >
            Next
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
