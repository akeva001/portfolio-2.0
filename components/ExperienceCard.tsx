import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

function ExperienceCard({}: Props) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full
    md:w-[800px] xl:w-[900px] snap-center bg-[#292929] px-3 py-10 md:p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-0 md:px-10 flex flex-col md:flex-row">
        {!showDetails && (
          <div className="md:w-1/2 md:mt-5">
            <div className="flex justify-center md:justify-start mb-3">
              <motion.img
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full md:rounded-full xl:w-32 xl:h-32 object-cover object-center"
                src="https://www.alexkevakian.com/static/media/Me2.5ddc11fc3ae865e50923.jpg"
                alt=""
              />
            </div>

            <h4 className="text-3xl font-light">Frontend Developer</h4>
            <p className="font-bold text-1xl mt-1">East of Western</p>
            <div className="flex space-x-2 my-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://www.alexkevakian.com/static/media/Me2.5ddc11fc3ae865e50923.jpg"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://www.alexkevakian.com/static/media/Me2.5ddc11fc3ae865e50923.jpg"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://www.alexkevakian.com/static/media/Me2.5ddc11fc3ae865e50923.jpg"
                alt=""
              />
            </div>
            <p className="uppercase py-5 text-gray-300">
              Started work... - Ended...
            </p>
          </div>
        )}
        <div className="justify-center items-center md:w-3/5 lg:ml-10 hidden md:flex">
          <ul className="list-disc space-y-4 ml-5 text-md">
            <li>
              Summary pointsSummary pointsSummary points Summary points Summary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary points Summary points Summary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary points Summary points Summary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary points Summary points Summary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary points Summary points Summary
              points
            </li>
          </ul>
        </div>

        {showDetails && (
          <ul className="flex flex-col list-disc space-y-2 ml-5 text-md w-full md:hidden">
            <li>
              Summary pointsSummary points Summary points Summary pointsSummary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary points Summary pointsSummary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary points Summary pointsSummary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary points Summary pointsSummary
              points
            </li>
            <li>
              Summary pointsSummary pointsSummary points Summary pointsSummary
              points
            </li>
          </ul>
        )}

        <div className="flex justify-center items-center w-full md:hidden">
          {showDetails ? (
            <button
              className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mt-4 md:hidden"
              onClick={() => setShowDetails(false)}
            >
              Back
            </button>
          ) : (
            <button
              className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mt-4 md:hidden"
              onClick={() => setShowDetails(true)}
            >
              Details
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
