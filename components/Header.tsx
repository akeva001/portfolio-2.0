import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = {
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export default function Header({ handleScroll }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="hidden md:flex flex-row items-center"
      >
        <div className="hidden md:flex md:flex-row md:items-center">
          <SocialIcon
            url="https://github.com/akeva001"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            className="transform transition-all hover:scale-125"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/alexkevakian/"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            className="transform transition-all hover:scale-125"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <div className="hidden md:flex md:flex-row md:items-center">
          <Link href="#about" onClick={handleScroll}>
            <button className="headerButton">About</button>
          </Link>
          <Link href="#experience" onClick={handleScroll}>
            <button className="headerButton">Experience</button>
          </Link>
          <Link href="#skills" onClick={handleScroll}>
            <button className="headerButton">Skills</button>
          </Link>
          <Link href="#projects" onClick={handleScroll}>
            <button className="headerButton">Projects</button>
          </Link>
        </div>
        <button
          className="md:hidden px-2 py-2 border border-none rounded-full uppercase tracking-widest text-sm text-gray-500 
          transition-all hover:text-[#FFF]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ y: -500, opacity: 0 }}
        animate={{
          y: isMenuOpen ? 0 : -500,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col w-full h-screen bg-[rgb(36,36,36)] fixed top-0 left-0 z-50`}
      >
        <button
          className="ml-auto mt-5 mr-5 mb-2 px-2 py-2 border border-none rounded-full uppercase tracking-widest text-sm text-gray-500 
          transition-all hover:text-[#FFF]"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full mb-20">
          <Link href="#about" onClick={handleScroll}>
            <button className="headerButtonMobile my-4" onClick={toggleMenu}>
              About
            </button>
          </Link>
          <Link href="#experience" onClick={handleScroll}>
            <button className="headerButtonMobile my-4" onClick={toggleMenu}>
              Experience
            </button>
          </Link>
          <Link href="#skills" onClick={handleScroll}>
            <button className="headerButtonMobile my-4" onClick={toggleMenu}>
              Skills
            </button>
          </Link>
          <Link href="#projects" onClick={handleScroll}>
            <button className="headerButtonMobile my-4" onClick={toggleMenu}>
              Projects
            </button>
          </Link>
          <div className="flex md:flex-row md:items-center mt-10">
            <SocialIcon
              url="https://github.com/akeva001"
              target="_blank"
              fgColor="gray"
              bgColor="transparent"
              className="transform transition-all hover:scale-125 mx-3"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/alexkevakian/"
              target="_blank"
              fgColor="gray"
              bgColor="transparent"
              className="transform transition-all hover:scale-125 mx-3"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        /> */}
        <Link href="#contact" onClick={handleScroll}>
          <div className="flex justify-center items-center transform transition-all hover:scale-110">
            <div>
              <img src="./mail.svg" className="cursor-pointer w-5 mx-3" />
            </div>

            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
