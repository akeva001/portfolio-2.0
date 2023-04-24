import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full
    md:w-[800px] xl:w-[900px] snap-center bg-[#292929] px-3 pt-7 pb-5 md:p-10 md:hover:opacity-100 md:opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden min-h-[65vh] md:min-h-full"
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
                className="w-32 h-32 md:rounded-full mb-10 md:mb-7 xl:w-32 xl:h-32 object-contain object-center"
                src={urlFor(experience?.companyImage).url()}
                alt=""
              />
            </div>

            <h4 className="text-3xl font-light">{experience?.jobTitle}</h4>
            <p className="font-bold text-1xl mt-1">{experience?.company}</p>
            <div className="flex space-x-2 my-2">
              {experience.technologies?.map((technology) => (
                <img
                  key={technology._id}
                  className="h-10 w-10 rounded-full"
                  src={urlFor(technology.image).url()}
                  alt=""
                />
              ))}
            </div>
            <p className="uppercase py-5 text-gray-300">
              {new Date(experience.dateStarted).toDateString()} -{" "}
              {experience.isCurrentlyWorkingHere
                ? "Present"
                : new Date(experience.dateEnded).toDateString()}
            </p>
          </div>
        )}
        <div className="justify-center items-center md:w-3/5 lg:ml-10 hidden md:flex">
          <ul className="list-disc space-y-4 ml-5 text-md">
            {experience.points.map((point, i) => (
              <li key={i}> {point}</li>
            ))}
          </ul>
        </div>

        {showDetails && (
          <ul className="flex flex-col list-disc space-y-2 ml-5 pr-5 text-md w-full md:hidden">
            {experience.points.map((point, i) => (
              <li key={i}> {point}</li>
            ))}
          </ul>
        )}

        <div className="flex justify-center items-center w-full md:hidden">
          {showDetails ? (
            <button
              className="text-blue-500 font-bold py-0 px-4 rounded mt-4 md:hidden"
              onClick={() => setShowDetails(false)}
            >
              Back
            </button>
          ) : (
            <button
              className="text-blue-500 font-bold py-2 px-4 rounded mt-4 md:hidden"
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
