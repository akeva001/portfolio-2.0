import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = { pageInfo: PageInfo };

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase ml-[20px] tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="relative flex flex-col md:flex-row justify-evenly md:justify-center items-center mt-20 h-full">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative -mb-20 md:mb-0 flex-shrink-0 w-36 h-36 md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
        >
          <Image
            src={urlFor(pageInfo?.profilePic).url()}
            fill
            alt=""
            className="rounded-full object-cover md:rounded-lg"
            sizes="(min-width: 768px) 256px, (min-width: 1024px) 384px, 128px" // 128px used if width < 768px
          />
        </motion.div>

        <div className="space-y-10 px-0 md:px-10">
          {/* <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#464646]">little</span>{" "}
          background
        </h4> */}
          <p className="text-base hidden md:block">
            {pageInfo.backgroundInformation.split(". ").slice(0, 4).join(". ") +
              ". "}
          </p>
          <p className="text-base hidden md:block">
            {pageInfo.backgroundInformation.split(". ").slice(4).join(". ")}
          </p>
          <p className="text-base md:hidden">
            {pageInfo.backgroundInformation.split(". ").slice(0, 4).join(". ") +
              ". "}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
