"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiArrowRightThin } from "react-icons/pi";
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
const About = () => {
  return (
    <motion.div
      className="pt-20 pb-10 lg:px-32 sm:px-16 px-8"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="about"
    >
      <div className="flex gap-10 flex-col md:flex-row items-center justify-around text-secondary">
        <motion.div className="w-full lg:w-auto" variants={variants}>
          <h1 className="text-4xl font-light font-bask">Who We Are</h1>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span
              style={{
                background:
                  "url('https://assets-global.website-files.com/64fed7eecff9e45d4bb373ed/653654b69ea7b7c5f9dbec63_underline.svg') left bottom no-repeat",
              }}
            >
              Behind the Scenes
            </span>
          </h1>
        </motion.div>
        <motion.p
          variants={variants}
          className="w-full lg:w-3/5 text-justify tracking-wider"
        >
          Welcome to the intersection of creativity and technology. We excel in
          delivering top-notch blog writing and smart scheduling, enhancing your
          online presence. Our social media automation and SEO services are
          tailored to boost your visibility and engagement. We're here to
          amplify your digital footprint, efficiently and effectively.
          <motion.span variants={variants}>
            <Link
              href=""
              className="mt-5 group w-fit hover:bg-[#f2bd9d] hover:text-black py-1 px-5 rounded-full transition duration-300 items-center space-x-3 font-bold font-bask bg-secondary text-white flex"
            >
              <span>Join Us</span>
              <span className="w-[25px] overflow-hidden">
                <span className="transition-transform duration-500 flex w-full -translate-x-full group-hover:translate-x-0">
                  <PiArrowRightThin className="text-2xl shrink-0" />
                  <PiArrowRightThin className="text-2xl shrink-0" />
                </span>
              </span>
            </Link>
          </motion.span>
        </motion.p>
      </div>
      <motion.div
        variants={variants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-secondary mt-10"
      >
        <motion.div
          variants={variants}
          className="w-full text-justify tracking-wider px-0 py-10 sm:p-10 space-y-5"
        >
          <h1 className="text-4xl font-light font-bask text-center">
            Our Mission
          </h1>
          <p>
            We aim to connect your story with the world, inspiring engagement
            through innovative content and strategies. Our focus is on
            amplifying your digital presence, making every interaction count and
            ensuring your message shines in the digital realm.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className="w-full text-justify tracking-wider border-y-2 md:border-y-0 md:border-x-2 px-0 py-10 sm:p-10 space-y-5"
        >
          <h1 className="text-4xl font-light font-bask text-center">
            Our Vision
          </h1>
          <p>
            Our vision is to shape the future of digital narratives by setting
            new standards in content creation and online engagement. We aspire
            to be at the forefront of digital innovation, constantly evolving to
            keep your content fresh, relevant, and impactful.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className="w-full text-justify tracking-wider px-0 py-10 sm:p-10 space-y-5"
        >
          <h1 className="text-4xl font-light font-bask text-center">
            Our Commitment
          </h1>
          <p>
            We are dedicated to pushing the boundaries of digital content
            creation. By constantly innovating and adapting to the latest
            trends, our commitment lies in delivering unparalleled quality and
            results for every client.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
