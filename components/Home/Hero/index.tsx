"use client";
import Image from "next/image";
import img from "@/assets/hero.png";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const text = "Save time and build strong digital presence";
const text2 = "Be a brand of future";
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

const Hero = () => {
  const [hasCountedReach, setHasCountedReach] = useState(false);
  const [hasCountedSocial, setHasCountedSocial] = useState(false);
  const [hasCountedRevenue, setHasCountedRevenue] = useState(false);
  return (
    <div className="relative px-8 md:px-16 min-h-screen bg-gradient-to-b from-primary to-white flex justify-center space-x-10 items-center">
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        src={img.src}
        alt=""
        draggable={false}
        className="w-1/2"
      />
      <div className="flex flex-col w-1/2">
        <h1 className="leading-[3.5rem] pr-3 font-bold font-bask uppercase text-4xl text-secondary">
          {text.split(" ").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -10 * index }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  delay: index * 0.1,
                },
              }}
              viewport={{ once: true }}
              className="mr-4 inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <h1 className="text-[#f59f0a] font-bold text-4xl mt-5 font-bask">
          {text2.split(" ").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -10 * index }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                },
              }}
              viewport={{ once: true }}
              className="mr-4 inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="text-center mt-10 text-base text-gray-500"
        >
          <Link
            href="/contact"
            className="transition duration-300 hover:bg-[#f2bd9d] hover:text-secondary font-bold mx-auto px-5 py-3 text-base rounded-xl text-white bg-secondary shadow-md shadow-black/30"
          >
            Get a demo
          </Link>
        </motion.span>
      </div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-around absolute bg-secondary w-full bottom-0 right-0 py-5 px-8 md:px-16 text-white"
      >
        <VisibilitySensor
          partialVisibility
          offset={{ top: 10 }}
          delayedCall
          onChange={(isVisible: any) => {
            if (isVisible) setHasCountedReach(true);
          }}
          active={!hasCountedReach} // This will make sure VisibilitySensor becomes inactive after first count
        >
          {({ isVisible }: { isVisible: any }) => (
            <motion.div variants={variants}>
              <h1 className="text-5xl font-extrabold text-center stroke text-transparent">
                +<CountUp end={isVisible ? 636 : 0} duration={3} />%
              </h1>
              <p className="text-xs mt-2">Increase in Reach, Year Over Year</p>
            </motion.div>
          )}
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility
          offset={{ top: 10 }}
          delayedCall
          onChange={(isVisible: any) => {
            if (isVisible) setHasCountedSocial(true);
          }}
          active={!hasCountedSocial} // This will make sure VisibilitySensor becomes inactive after first count
        >
          {({ isVisible }: { isVisible: any }) => (
            <motion.div variants={variants}>
              <h1 className="text-5xl font-extrabold text-center stroke text-transparent">
                +<CountUp end={isVisible ? 500 : 0} duration={3} />%
              </h1>
              <p className="text-xs mt-2">Growth Accross All Social Channels</p>
            </motion.div>
          )}
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility
          offset={{ top: 10 }}
          delayedCall
          onChange={(isVisible: any) => {
            if (isVisible) setHasCountedRevenue(true);
          }}
          active={!hasCountedRevenue} // This will make sure VisibilitySensor becomes inactive after first count
        >
          {({ isVisible }: { isVisible: any }) => (
            <motion.div variants={variants}>
              <h1 className="text-5xl font-extrabold text-center stroke text-transparent">
                +<CountUp end={isVisible ? 250 : 0} duration={3} />%
              </h1>
              <p className="text-xs mt-2">
                Increase in Sourced Revenue, Year Over Year
              </p>
            </motion.div>
          )}
        </VisibilitySensor>
      </motion.div>
    </div>
  );
};

export default Hero;
