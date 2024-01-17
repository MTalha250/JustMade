"use client";
import React, { useRef, useState } from "react";
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
    question: "What makes your blog writing service unique?",
    answer:
      "Our blog writing service stands out due to our team of experienced writers who specialize in creating SEO-friendly, engaging content tailored to your brand's voice. We focus on delivering high-quality content that drives traffic and engagement, aligning with your business goals.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/650317409072e4508ad6271f_stangel-2022-0602%207.png",
  },
  {
    question: "How do you ensure the timely scheduling of blogs?",
    answer:
      "We use advanced scheduling tools and strategies to manage your content calendar effectively. Our team ensures that your blogs are published at optimal times for maximum reach and engagement, maintaining a consistent and impactful online presence for your brand.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65031739db45eb306470fb4a_stangel-2022-0602%206.png",
  },
  {
    question:
      "Can your social media automation services handle multiple platforms?",
    answer:
      "Yes, our social media automation services are designed to manage and streamline your presence across various platforms. We ensure consistent posting, engagement analysis, and audience growth strategies tailored to each social media platform's unique characteristics.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/64ff155bce1b57b6afcb9052_faq-illustration.png",
  },
  {
    question:
      "Do you offer customized content strategies for different industries?",
    answer:
      "Absolutely! We believe in the importance of a tailored content strategy for each industry. Our team conducts in-depth research to understand your industry's specifics, audience needs, and competitive landscape, ensuring a personalized and effective content strategy.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65031728db45eb306470eee8_stangel-2022-0602%203.png",
  },
  {
    question: "Can I measure the impact of your SEO services?",
    answer:
      "Absolutely! We provide detailed reports and analytics to track the performance of our SEO strategies, helping you see the tangible impact on your website's traffic and search engine rankings. Our team also provides recommendations for further improvement and growth.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65031732a36eda439895da45_stangel-2022-0602%204.png",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>();
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="lg:px-32 md:px-16 px-8 py-10 overflow-hidden"
      id="faqs"
    >
      <motion.h1
        variants={variants}
        className="text-center text-4xl md:text-5xl font-light text-secondary"
      >
        Frequently
      </motion.h1>
      <motion.h1
        variants={variants}
        className="my-5 text-center text-5xl md:text-6xl font-bask font-bold text-secondary"
      >
        <span
          className="bg-transparent"
          style={{
            background:
              "url('https://assets-global.website-files.com/64fed7eecff9e45d4bb373ed/653654b69ea7b7c5f9dbec63_underline.svg') left bottom no-repeat",
          }}
        >
          Asked Questions
        </span>
      </motion.h1>
      <motion.div variants={variants}>
        <Swiper
          effect={"cards"}
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          grabCursor={true}
          speed={1000}
          cardsEffect={{
            perSlideRotate: 0,
            perSlideOffset: 17,
          }}
          modules={[EffectCards, Navigation]}
          className="mySwiper h-[80vh] md:h-[45vh] w-full md:w-[70%] my-10"
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
        >
          {faqs.map((faq, index) => (
            <SwiperSlide
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`border border-white w-full rounded-3xl text-xl text-white ${
                index == activeIndex ? "bg-[#ba9afd]" : "bg-[#8060c3]"
              }`}
            >
              <div className="hover:bg-[#dbc5fc] transition duration-300 flex flex-col md:flex-row w-full h-full">
                <div className=" bg-[#190d39] w-full md:w-[28%] h-[25vh] md:h-auto rounded-r-2xl overflow-hidden flex flex-col justify-end space-y-10">
                  <img src={faq?.img} alt="" className="w-full h-full" />
                </div>
                <div className="w-full md:w-[72%] text-secondary p-5 flex flex-col justify-between space-y-10">
                  <p className="text-secondary font-bask text-3xl lg:text-4xl flex flex-col-reverse md:flex-row justify-between gap-5">
                    <span>{faq?.question}</span>
                    <span className="text-white text-4xl">0{index + 1}.</span>
                  </p>

                  <p className="text-sm">{faq?.answer}</p>
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
