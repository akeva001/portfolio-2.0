import React, { useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "@/typings";

type Props = { skills: SkillType[] };

function Skills({ skills }: Props) {
  const [hoveredSkill, setHoveredSkill] = useState("");
  const [hover, setHover] = useState(false);

  function handleHover(title: string, hover: boolean) {
    setHoveredSkill(title);
    setHover(hover);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <motion.h1
        key={hoveredSkill}
        className="absolute leading-[4rem] md:leading-[16rem] bottom-32 md:bottom-auto text-5xl md:text-[14rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-600 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 0.3 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {hoveredSkill}
      </motion.h1>
      <h3 className="absolute top-24 uppercase ml-[20px] tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5 md:pt-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} onHover={handleHover} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
            directionLeft
            onHover={handleHover}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
