import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="text-black">
      <Head>
        <title>nine4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto text-center mt-52 max-w-2x1">
        <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
          404 – Unavailable
        </h1>
        <br />
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4"
          href="/"
        >
          Return Home
        </a>
      </div>
      <div className="mt-64"></div>
      <Footer />
    </div>
  );
}
