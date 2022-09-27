import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
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
        <p className="text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex">
          <input placeholder="Email address" className="bg-white p-4 " />
          <button className="bg-red-500 text-white font-lg">Get Started</button>
        </div>
      </main>
    </div>
  );
}
