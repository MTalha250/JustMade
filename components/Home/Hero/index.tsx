"use client";
import Image from "next/image";
import img from "@/assets/hero.png";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import CountUp from "react-countup";

const Hero = () => {
  const [hasCountedReach, setHasCountedReach] = useState(false);
  const [hasCountedSocial, setHasCountedSocial] = useState(false);
  const [hasCountedRevenue, setHasCountedRevenue] = useState(false);
  return (
    <div className="relative px-8 md:px-16 min-h-screen bg-gradient-to-b from-primary to-white flex justify-center space-x-10 items-center">
      <img src={img.src} alt="" className="w-1/2" />
      <div className="flex flex-col w-1/2 font-bold text-4xl tracking-wider">
        <h1 className="font-bask leading-[3.5rem] pr-3">
          SAVE TIME AND BUILD STRONG DIGITAL PPRESENCE
        </h1>
        <h1 className="text-[#f59f0a] my-5">BE A BRAND OF FUTURE</h1>
        <Link
          href="/contact"
          className="mx-auto p-5 text-base rounded-xl text-white bg-secondary shadow-md shadow-black/30"
        >
          Get a demo
        </Link>
      </div>
      <div className="flex justify-around absolute bg-secondary w-full bottom-0 right-0 py-5 px-8 md:px-16 text-white">
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
            <div>
              <h1 className="text-5xl font-extrabold text-center stroke text-transparent">
                +<CountUp end={isVisible ? 636 : 0} duration={3} />%
              </h1>
              <p className="text-xs mt-2">Increase in Reach, Year Over Year</p>
            </div>
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
            <div>
              <h1 className="text-5xl font-extrabold text-center stroke text-transparent">
                +<CountUp end={isVisible ? 500 : 0} duration={3} />%
              </h1>
              <p className="text-xs mt-2">Growth Accross All Social Channels</p>
            </div>
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
            <div>
              <h1 className="text-5xl font-extrabold text-center stroke text-transparent">
                +<CountUp end={isVisible ? 250 : 0} duration={3} />%
              </h1>
              <p className="text-xs mt-2">
                Increase in Sourced Revenue, Year Over Year
              </p>
            </div>
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default Hero;
