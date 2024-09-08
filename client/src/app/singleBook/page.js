import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React from "react";

const SingleBook = () => {
  const [book, setBook] = useState({});

  const fetchBook = async () => {
    const response = await fetch(`http://localhost:4000/getSingleBook/${id}`);
    const data = await response.json();
    setBook(data);
  };

  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <>
      <section className="h-screen bg-[#5956e9] ">
        {/* ******************************  NavBar ****************************** */}
        <NavBar />
        {/* ******************************  SingleBook ****************************** */}
        <div className="flex flex-row items-center w-full h-screen">
          <span className="bg-red-400 w-full h-fit text-center">Picture</span>
          <span className="bg-blue-400 w-full h-fit pl-20">Area 2</span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleBook;
