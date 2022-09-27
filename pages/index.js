import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsChevronRight } from "react-icons/bs";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black"
      style={{
        "background-image":
          "linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8)), url(/netflix-image.jpg)",
      }}
    >
      <Head>
        <title>Netflix CLone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center ">
        <h1 className="text-5xl font-bold text-white max-w-lg">
          Unlimited Movies, Tv shows, and more
        </h1>
        <h2 className="text-2xl text-white mt-4 mb-8">
          {" "}
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-white text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex mt-4">
          <input
            placeholder="Email address"
            className="bg-white p-4 min-w-[400px]"
          />
          <button className=" flex items-center bg-[#e50914] text-white font-xl px-4">
            Get Started
            <BsChevronRight />
          </button>
        </div>
      </main>
    </div>
  );
}
