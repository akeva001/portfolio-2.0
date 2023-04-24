import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

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
      <div className="flex flex-col md:flex-row justify-evenly md:justify-center items-center mt-20 h-full">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src={urlFor(pageInfo?.heroImage).url()}
          className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
        />
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
          {/* <p className="text-base hidden md:block">
            Hello! My name is Alex Kevakian and I currently reside in Glendale,
            California. I graduated from the University of California,
            Riverside; with a bachelors degree in Computer Science. Over the
            past 3 years as a Front-end Developer, I have designed, developed,
            and launched custom, highly responsive websites using React and
            NextJS. My Front-end experience also extends to building mobile
            applications using React Native. <br />
            <br />I have been very fortunate to have the opportunity to play
            tennis my entire life. I started playing tennis when I was 5 years
            old, and was a competitive tennis player from 9 years old through
            junior college. Tennis has taught me many valuable lessons that have
            built my character into that of a problem solver, leader, and an
            individual with integrity.
          </p>
          <p className="text-base md:hidden">
            Hello! My name is Alex Kevakian and I currently reside in Glendale,
            California. I graduated from the University of California,
            Riverside; with a bachelors degree in Computer Science. Over the
            past 3 years as a Front-end Developer, I have designed, developed,
            and launched custom, highly responsive websites using React and
            NextJS. My Front-end experience also extends to building mobile
            applications using React Native. <br />
            {/* <br />I have been very fortunate to have the opportunity to play
          tennis my entire life. I started playing tennis when I was 5 years
          old, and was a competitive tennis player from 9 years old through
          junior college. Tennis has taught me many valuable lessons that have
          built my character into that of a problem solver, leader, and an
          individual with integrity. 
          </p>
        */}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
