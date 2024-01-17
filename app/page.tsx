import Hero from "@/components/Home/Hero";
import Plan from "@/components/Home/Plan";
import Services from "@/components/Home/Services";
import About from "@/components/Home/about";
import Business from "@/components/Home/business";
import Contact from "@/components/Home/contact";
import Faq from "@/components/Home/faq";
import React from "react";
const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Plan />
      <About />
      <Faq />
      <Business />
      <Contact />
    </div>
  );
};

export default page;
