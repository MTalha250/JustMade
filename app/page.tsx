import Hero from "@/components/Home/Hero";
import Plan from "@/components/Home/Plan";
import Services from "@/components/Home/Services";
import Faq from "@/components/Home/faq";
import React from "react";
const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Plan />
      <Faq />
    </div>
  );
};

export default page;
