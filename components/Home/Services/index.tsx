"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import line from "@/assets/line.svg";
import { motion } from "framer-motion";
import img1 from "@/assets/s1.png";
import img2 from "@/assets/s2.png";
import img3 from "@/assets/s3.png";
import img4 from "@/assets/s4.png";
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

const services = [
  {
    title: "Blog Writing",
    description:
      "Dive into the world of impactful storytelling with our blog writing services. Our team of expert writers is adept at creating engaging, informative, and SEO-friendly content that resonates with your audience. From industry-specific articles to general interest blogs, we ensure your voice is heard.",
    img: img1.src,
  },
  {
    title: "BLOG SCHEDULING",
    description:
      "Stay ahead in the game with our seamless blog scheduling solutions. We understand the importance of consistency in content creation. Our strategic scheduling ensures your blog stays fresh, relevant, and continually engaging, keeping your audience hooked and coming back for more.",
    img: img2.src,
  },
  {
    title: "SOCIAL MEDIA AUTOMATION",
    description:
      "Embrace the future with our social media automation services. We streamline your social media management, ensuring consistent and timely posting across all platforms. Our tools and expertise in automation let you connect with your audience efficiently, enhancing engagement and brand presence.",
    img: img3.src,
  },
  {
    title: "SEARCH ENGINE OPTIMIZATION",
    description:
      "Elevate your online visibility with our specialized SEO services. We employ the latest techniques and tools to enhance your website’s ranking on search engines. By optimizing your content and structure, we drive more organic traffic to your site, increasing leads and conversions.",
    img: img4.src,
  },
];

const Services = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="services"
      className="py-20 lg:px-32 sm:px-16 px-8"
    >
      <div className="flex gap-10 flex-col md:flex-row items-center justify-around text-secondary">
        <motion.div variants={variants}>
          <h1 className="text-4xl md:text-[45px] font-light">What can</h1>
          <h1 className="text-4xl md:text-5xl font-bold font-bask relative">
            <motion.svg
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
              viewBox="63.222 141.9655 565.2742 41.0005"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-4 rotate-[0.5deg] md:w-3/4 origin-left left-0 -z-10"
            >
              <path
                d="M 63.222 170.63 C 116.369 145.339 667.433 131.693 626.306 151.264 L 627.423 150.541 C 627.736 150.524 627.994 151.342 627.999 152.369 C 628.005 153.379 626.947 149.124 626.64 149.165 L 627.407 149.489 C 593.945 129.158 60.16 174.244 63.683 182.966 L 63.222 170.63 Z"
                fill="#FFA7EC"
                transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, -7.105427357601002e-15)"
              />
            </motion.svg>
            <span> JustMade do for you?</span>
          </h1>
        </motion.div>
        <motion.p
          variants={variants}
          className="w-full md:w-2/5 text-justify tracking-wider"
        >
          Boost your blog's efficiency and visibility by automating content
          creation, SEO, and analytics. Intelligent tools will streamline
          workflows, enhance quality, and optimize performance, leading to
          increased traffic and growth with minimal manual effort.
        </motion.p>
      </div>
      <div className="relative mt-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s) => (
            <motion.div
              variants={variants}
              className="bg-[#ffa7ec] hover:bg-primary  transition duration-300 text-secondary p-5 space-y-5 rounded-xl"
            >
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <img
                  src={s.img}
                  className="w-32 h-32 md:w-28 md:h-28 object-contain"
                />
                <h1 className="font-bold text-2xl md:text-3xl font-bask">
                  {s.title}
                </h1>
              </div>
              <p className="text-justify text-sm">{s.description}</p>
              <Link
                href=""
                className="group w-fit hover:bg-[#f2bd9d] py-1 px-5 rounded-full transition duration-300 items-center space-x-3 font-bold text-xl flex"
              >
                <span>Get Started</span>{" "}
                <FaArrowRight className="text-2xl group-hover:animate-bounce-x" />
              </Link>
            </motion.div>
          ))}
          <motion.img
            variants={variants}
            className="lg:block hidden absolute xl:top-[20%] left-0 w-full -z-10 top-0"
            src={line.src}
            alt="useful info track"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
