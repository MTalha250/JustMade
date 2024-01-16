"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};
const Business = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-10 px-8 md:px-16 lg:px-32"
    >
      <motion.div
        variants={variants}
        className="bg-primary flex flex-col items-center justify-between rounded-2xl p-5 md:p-10 space-y-3 text-secondary"
      >
        <motion.h1
          variants={variants}
          className="text-3xl md:text-4xl font-extralight font-bask"
        >
          Make Better
        </motion.h1>
        <motion.h1
          variants={variants}
          className="text-3xl md:text-4xl text-center font-bold bg-transparent"
          style={{
            background:
              "url('https://assets-global.website-files.com/64fed7eecff9e45d4bb373ed/653654b69ea7b7c5f9dbec63_underline.svg') left bottom no-repeat",
          }}
        >
          <span>Business Decisions</span>
        </motion.h1>
        <motion.p variants={variants} className="md:w-1/2 py-5 text-center">
          Discover the inspiring success stories of various businesses that have
          benefited from our services. Delve into detailed case studies
          showcasing our effective strategies and the positive outcomes
          achieved. Alternatively, connect with us directly to arrange an
          initial conversation where we can discuss your specific needs and
          explore how we can assist you in achieving your business goals.
        </motion.p>
        <motion.span variants={variants}>
          <Link
            href="/contact"
            className="transition duration-300 hover:bg-[#f2bd9d] hover:text-secondary font-bold px-5 py-3 text-base rounded-xl text-white bg-secondary shadow my-5 inline-block shadow-black/30"
          >
            Get a demo
          </Link>
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Business;
