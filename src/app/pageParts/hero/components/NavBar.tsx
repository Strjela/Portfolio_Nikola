"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineCloudDownload,
  AiOutlineMenu,
} from "react-icons/ai";

import { headerAnimation } from "../../../helpers/animations";

const Navbar = ({
  handlePageChange,
}: {
  handlePageChange: (page: number) => void;
}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Contact" },
  ];

  function onClickChangePage(item: number) {
    handlePageChange(item);
  }

  function onClickChangePageMobile(item: number) {
    handlePageChange(item);
    setNav(!nav);
  }

  return (
    <motion.div
      variants={headerAnimation}
      initial="hidden"
      animate="visible"
      className=" flex justify-between items-center h-24 max-w-[1400px] mx-auto px-4 text-white overflow-visible z-20"
    >
      {/* Logo */}
      <h1 className="text-white text-lg font-extrabold tracking-wider cursor-default select-none">
        Nikola Jelic
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center items-center space-x-7 text-[1.2rem] font-semibold cursor-default">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => onClickChangePage(item.id)}
            className=" inline-block
                text-white
                relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-white
                before:to-white
                hover:before:w-full
                hover:before:opacity-100"
          >
            {item.text}
          </li>
        ))}
        <li>
          <motion.a
            whileHover={{
              scale: 1.05,
              backgroundColor: "#15104c",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-black   hidden md:flex font-semibold   py-2 px-5 text-white rounded-xl tracking-wider justify-center items-center gap-2"
            href="https://drive.google.com/file/d/1e1XZPCtOhnSQbyZ3CVly3BSovwVql7vo/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineCloudDownload className="text-lg" />
            Download CV
          </motion.a>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div
        onClick={() => handleNav}
        className="block md:hidden z-50 cursor-pointer"
      >
        {nav ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000003af] ease-in-out duration-500 focus:overscroll-contain z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-xl font-bold  m-4 mt-8">Nikola Jelic</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => onClickChangePageMobile(item.id)}
            className="flex justify-center m-16 text-3xl cursor-pointer
                text-white
                relative
                transition-all
                duration-400
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-white
                before:to-white
                hover:before:w-[23%]
                hover:before:opacity-100"
          >
            {item.text}
          </li>
        ))}
        <li className="flex">
          <motion.a
            whileHover={{
              scale: 1.05,
              backgroundColor: "#2826b0",
            }}
            initial="hidden"
            whileInView="visible"
            className="bg-[#1F1CA1]  inline-block font-semibold text-center text-2xl  py-2 px-5 text-white rounded-2xl tracking-wider  ml-auto mr-auto max-w-fit "
            href="https://drive.google.com/file/d/1e1XZPCtOhnSQbyZ3CVly3BSovwVql7vo/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </motion.a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
