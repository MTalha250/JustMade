"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const faqs = [
  {
    question: "What Does It Mean to Automate Content Creation for a Blog?",
    answer:
      "AI and tools can automatically generate blog content by using set prompts or parameters, saving time and ensuring a steady flow of posts.",
  },
  {
    question:
      "In What Ways Can Automation Enhance the Quality of Blog Content?",
    answer:
      "AI tools assist in editing for grammar, style, and readability, maintaining consistent quality and tone across blog posts.",
  },
  {
    question:
      "What Kind of Growth Can I Expect from Using Automation in Blogging?",
    answer:
      "Effective use of automation can lead to increased traffic and better audience engagement, but growth also depends on content quality and market dynamics.",
  },
  {
    question:
      "Can Automation Really Lead to Increased Traffic and Blog Growth?",
    answer:
      "Analysis of how automating content creation, SEO, and analytics contributes to attracting more visitors and fostering blog growth.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="md:px-16 px-8 my-10 py-10 overflow-hidden">
      <h1 className="text-center text-5xl font-light text-secondary">
        Frequently
      </h1>
      <h1 className="my-5 text-center text-6xl font-bask font-bold text-secondary">
        Asked Questions
      </h1>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        className="mySwiper h-[60vh] w-[80%] my-10"
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
      >
        {faqs.map((faq, index) => (
          <SwiperSlide className="relative w-full rounded-xl text-xl text-white font-bold bg-[#c9a6fe]">
            <span className="font-bask absolute text-4xl top-5 right-5">
              0{index + 1}.
            </span>
            <div className="flex w-full h-full">
              <div className="bg-secondary w-1/3 rounded-r-full overflow-hidden flex flex-col justify-center space-y-10 p-10">
                <h1 className="text-3xl">QUESTION</h1>
                <p className="text-white">{faq.question}</p>
              </div>
              <div className="w-2/3 text-secondary p-20 flex flex-col justify-center text-justify space-y-10">
                <h1 className="text-3xl">ANSWER</h1>
                <p>{faq.answer}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="flex justify-center space-x-3 text-4xl text-white my-5">
          <button className="prev">
            <FaArrowLeft
              className={`p-1 bg-secondary rounded-full ${
                activeIndex == 0 ? "hidden" : ""
              }`}
            />
          </button>

          <button className="next">
            <FaArrowRight
              className={`p-1 bg-secondary rounded-full ${
                activeIndex == faqs?.length - 1 ? "hidden" : ""
              }`}
            />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Faq;
