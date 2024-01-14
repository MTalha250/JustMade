"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation } from "swiper/modules";
import { PiArrowRightThin } from "react-icons/pi";
import { PiArrowLeftThin } from "react-icons/pi";
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
const faqs = [
  {
    question: "What Does It Mean to Automate Content Creation for a Blog?",
    answer:
      "AI and tools can automatically generate blog content by using set prompts or parameters, saving time and ensuring a steady flow of posts.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/650317409072e4508ad6271f_stangel-2022-0602%207.png",
  },
  {
    question:
      "In What Ways Can Automation Enhance the Quality of Blog Content?",
    answer:
      "AI tools assist in editing for grammar, style, and readability, maintaining consistent quality and tone across blog posts.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65031739db45eb306470fb4a_stangel-2022-0602%206.png",
  },
  {
    question:
      "What Kind of Growth Can I Expect from Using Automation in Blogging?",
    answer:
      "Effective use of automation can lead to increased traffic and better audience engagement, but growth also depends on content quality and market dynamics.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/64ff155bce1b57b6afcb9052_faq-illustration.png",
  },
  {
    question:
      "Can Automation Really Lead to Increased Traffic and Blog Growth?",
    answer:
      "Analysis of how automating content creation, SEO, and analytics contributes to attracting more visitors and fostering blog growth.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65031732a36eda439895da45_stangel-2022-0602%204.png",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="md:px-32 px-16 py-10 overflow-hidden"
    >
      <motion.h1
        variants={variants}
        className="text-center text-5xl font-light text-secondary"
      >
        Frequently
      </motion.h1>
      <motion.h1
        variants={variants}
        className="my-5 text-center text-6xl font-bask font-bold text-secondary"
      >
        Asked Questions
      </motion.h1>
      <motion.div variants={variants}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          speed={1000}
          cardsEffect={{
            perSlideRotate: 0,
            perSlideOffset: 16,
          }}
          modules={[EffectCards, Navigation]}
          className="mySwiper h-[50vh] w-[75%] my-10"
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
        >
          {faqs.map((faq, index) => (
            <SwiperSlide
              key={index}
              className="hover:bg-[#dbc5fc] transition duration-100 border-2 border-white relative w-full rounded-3xl text-xl text-white bg-[#ba9afd]"
            >
              <span className="font-extralight font-bask absolute text-4xl top-5 right-5">
                0{index + 1}.
              </span>
              <div className="flex w-full h-full">
                <div className=" bg-[#190d39] w-[28%] rounded-r-2xl overflow-hidden flex flex-col justify-end space-y-10">
                  <img src={faq.img} alt="" className="w-full h-full" />
                </div>
                <div className="w-[72%] text-secondary py-10 px-5 flex flex-col justify-between space-y-10">
                  <p className="text-secondary font-bask font-extralight text-4xl pr-10">
                    {faq.question}
                  </p>

                  <p className="text-sm">{faq.answer}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="flex justify-center space-x-3 text-4xl text-white my-5">
            <button className="prev">
              <PiArrowLeftThin
                className={`p-1 bg-secondary rounded-full ${
                  activeIndex == 0 ? "hidden" : ""
                }`}
              />
            </button>

            <button className="next">
              <PiArrowRightThin
                className={`p-1 bg-secondary rounded-full ${
                  activeIndex == faqs?.length - 1 ? "hidden" : ""
                }`}
              />
            </button>
          </div>
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Faq;
