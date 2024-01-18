"use client";
import React from "react";
import logo from "@/assets/logo.png";
import { navLinks } from "@/constants";
import { BiSolidChevronDown } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Navbar/Sidebar";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  return (
    <div className="bg-white text-black shadow-xl px-8 py-5 w-[95%] relative flex items-center justify-between rounded-2xl">
      <Link href="/" className="flex">
        <motion.img
          initial={{ rotate: 180 }}
          whileInView={{ rotate: 0, transition: { duration: 0.5, delay: 1 } }}
          viewport={{ once: true }}
          src={logo.src}
          alt=""
          className="w-8"
        />
        <span className="font-bold font-bask text-2xl">ustMade</span>
      </Link>
      <div className="text-sm items-center justify-center space-x-5 lg:space-x-10 md:flex hidden">
        {navLinks.map((link, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(-1)}
            className="relative"
          >
            <Link
              href={link.href}
              className="flex items-center hover:text-primary transition duration-300"
            >
              {link.label}
              {link.children && (
                <BiSolidChevronDown className="inline-block ml-1" />
              )}
            </Link>
            {link.children && activeDropdown === index && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.3, type: "spring" },
                }}
                className="text-white absolute top-full left-[-10px] bg-secondary p-5 rounded-2xl w-[250px] shadow-lg"
              >
                {link.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.href}
                    className="rounded block p-2 font-bask text-base hover:bg-[#f2bd9d] hover:text-secondary"
                  >
                    {child.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="hidden md:block font-semibold text-sm space-x-5">
        <Link href="/login">Login</Link>
        <Link className="hidden lg:inline" href="/trial">
          Free Trail
        </Link>
        <Link
          href="/demo"
          className="transition duration-300 hover:bg-secondary hover:text-white py-3 px-5 rounded-full text-black bg-primary shadow-md shadow-black/30"
        >
          Get a demo
        </Link>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
