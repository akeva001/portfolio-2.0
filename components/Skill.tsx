import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative object-cover w-16 h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out hidden md:block"
      >
        <Image
          src={urlFor(skill?.image).url()}
          alt="Skill image"
          fill
          className="rounded-full border border-gray-500"
          sizes="(min-width: 768px) 256px, (min-width: 1024px) 384px, 128px" // 128px used if width < 768px
        />
      </motion.div>
      <div className="relative object-cover w-16 h-16 filter group-hover:grayscale transition duration-300 ease-in-out md:hidden">
        <Image
          src={urlFor(skill?.image).url()}
          alt="Skill image"
          fill
          className="rounded-full border border-gray-500"
          sizes="(min-width: 768px) 256px, (min-width: 1024px) 384px, 128px" // 128px used if width < 768px
        />
      </div>

      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white  w-16 h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-1xl md:text-2xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
