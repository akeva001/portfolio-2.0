import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundPattern from "./BackgroundPattern";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "I-love-to-play-tennis.tsx",
      // "<ButLoveToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
      {/* <BackgroundPattern /> */}
      <div className="absolute h-32 w-32 top-48 md:top-[33vh] 2xl:h-52 2xl:w-52">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt=""
          fill
          className="rounded-full object-cover"
        />
      </div>

      <div className="z-10 absolute top-80 md:top-[50vh]">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="gray" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
