import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="https://www.alexkevakian.com/static/media/Me2.5ddc11fc3ae865e50923.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#464646]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hello! My name is Alex Kevakian and I currently reside in Glendale,
          California. I graduated from the University of California, Riverside;
          with a bachelors degree in Computer Science. Over the past 3 years as
          a Front-end Developer, I have designed, developed, and launched
          custom, highly responsive websites using React and NextJS. My
          Front-end experience also extends to building mobile applications
          using React Native. <br />
          <br />I have been very fortunate to have the opportunity to play
          tennis my entire life. I started playing tennis when I was 5 years
          old, and was a competitive tennis player from 9 years old through
          junior college. Tennis has taught me many valuable lessons that have
          built my character into that of a problem solver, leader, and an
          individual with integrity.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
