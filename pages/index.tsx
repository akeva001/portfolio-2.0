import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alex's Portfolio</title>
      </Head>

      <h1>Hey GM</h1>
    </div>
  );
};

export default Home;
