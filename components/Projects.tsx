import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";
import Link from "next/link";

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const glowStyle = {
    filter: isHovered ? "drop-shadow(0 0 10px #06c)" : "none",
    transition: "filter 0.2s ease-in-out",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 ml-[20px] uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
        z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#06c]/80 mt-5 md:mt-0"
      >
        {projects.map((project, i) => (
          <div
            className="relative w-screen flex-shrink-0 snap-center flex flex-col space-y-0
          items-center justify-center p-5 md:p-20 h-screen"
            key={project._id}
          >
            <Link
              href={project?.linkToBuild ? project.linkToBuild : "/"}
              target="_blank"
            >
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-44 w-60 md:h-60 md:w-96 mb-2 md:mb-5 md:mt-20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={glowStyle}
              >
                <Image
                  src={urlFor(project?.image).url()}
                  alt=""
                  fill
                  className="object-contain z-10 "
                  sizes="(min-width: 768px) 256px, (min-width: 1024px) 384px, 128px" // 128px used if width < 768px
                />
                {/* <div className="absolute h-44 w-44 md:h-50 md:w-50 bg-blue-500 rounded-full z-0 -inset-0.5 m-auto left-0 right-0 justify-center blur opacity-50"></div> */}
              </motion.div>
            </Link>

            <div className="space-y-5 px-0 md:x-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center md:max-w-md">
                <span className="underline decoration-[#464646]/50">
                  {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
                {project?.isCurrentlyWorkingOn && (
                  <p className="text-sm md:text-xl text-center m-0">
                    (Currently in progress)
                  </p>
                )}
              </h4>

              <div className="relative flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <div className="relative h-10 w-10" key={technology._id}>
                    <Image
                      className="rounded-full border border-gray-500"
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 256px, (min-width: 1024px) 384px, 128px" // 128px used if width < 768px
                    />
                  </div>
                ))}
              </div>
              <p className="text-lg text-center md:text-left md:max-w-md">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-full absolute top-[30%]"></div> */}
    </motion.div>
  );
}

export default Projects;
