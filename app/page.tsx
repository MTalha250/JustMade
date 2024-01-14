import Hero from "@/components/Home/Hero";
import Plan from "@/components/Home/Plan";
import Services from "@/components/Home/Services";
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
      <Faq />
      <Business />
      <Contact />
    </div>
  );
};

export default page;
