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
      className="flex flex-col rounded-lg items-center justify-center space-y-7 md:space-y-10 flex-shrink-0 w-full
    md:w-[800px] xl:w-[900px] snap-center bg-[#292929] px-3 pt-7 pb-5 md:p-10 md:hover:opacity-100 md:opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden min-h-[65vh] md:min-h-full"
    >
      <div className="px-0 md:px-10 flex flex-col md:flex-row md:justify-center md:items-center">
        {!showDetails && (
          <div className="mx-5 md:mx-0 md:w-1/2 md:mt-5 md:pr-5">
            <div className="flex justify-center md:justify-start mb-3">
              <motion.div
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-32 h-32 mb-10 md:mb-7 xl:w-32 xl:h-32 object-contain object-center"
              >
                <Image
                  className="rounded-full border border-gray-500"
                  src={urlFor(experience?.companyImage).url()}
                  alt=""
                  fill
                />
              </motion.div>
            </div>

            <h4 className="text-3xl font-light">{experience?.jobTitle}</h4>
            <p className="font-bold text-1xl mt-1">{experience?.company}</p>
            <div className="flex flex-wrap justify-start gap-2 my-2">
              {experience.technologies?.map((technology) => (
                <div className="relative h-10 w-10">
                  <Image
                    key={technology._id}
                    fill
                    src={urlFor(technology.image).url()}
                    alt=""
                    className="rounded-full border border-gray-500"
                  />
                </div>
              ))}
            </div>

            <p className="uppercase py-5 text-gray-300">
              {new Date(experience.dateStarted).toLocaleString("default", {
                month: "short",
                year: "numeric",
              })}{" "}
              -{" "}
              {experience.isCurrentlyWorkingHere
                ? "Present"
                : new Date(experience.dateEnded).toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                  })}
            </p>
          </div>
        )}
        <div className="justify-center items-center md:w-3/5 lg:ml-10 hidden md:flex">
          <ul className="list-disc space-y-3 ml-5 text-md">
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
