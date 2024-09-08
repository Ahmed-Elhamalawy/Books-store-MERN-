import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import axios from "axios";
import Image from "next/image";

export default async function SingleBook({ params }) {
  const { data } = await axios.get(
    `http://localhost:4000/getSingleBook/${params.id}`
  );

  return (
    <>
      <section className="h-screen bg-[#5956e9]">
        {/* ******************************  NavBar ****************************** */}
        <NavBar />
        {/* ******************************  SingleBook ****************************** */}
        <div className="flex flex-row items-center w-full h-screen gap-10">
          <span className="bg-white rounded-lg mx-5 w-[80%] h-fit flex py-5  items-center justify-center">
            <Image src={data.data.image} width={800} height={750} />
          </span>
          <span className="bg-white w-[65%] rounded-lg h-fit pl-20 py-5 flex flex-col gap-5 mr-10">
            <h1 className="text-4xl font-bold">{data.data.title}</h1>
            <h2 className="text-xl font-semibold">
              Author : {data.data.author}
            </h2>
            <p className="text-lg">
              <span className="text-xl font-semibold">Breif :</span>
              {data.data.description}
            </p>
            <h2 className="text-xl font-semibold">
              Publisher : {data.data.publisherId.name}
            </h2>
            <h2 className="text-xl font-semibold">Genre : {data.data.genre}</h2>
            <h2 className="text-xl font-semibold">Year : {data.data.year}</h2>
            <h2 className="text-xl font-semibold">
              Copies : {data.data.copies}
            </h2>
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
}
