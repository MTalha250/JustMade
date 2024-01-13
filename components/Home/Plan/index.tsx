"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import VisibilitySensor from "react-visibility-sensor";
const Plan = () => {
  const [yearly, setYearly] = React.useState(false);

  return (
    <div className="md:px-32 px-16 my-20">
      <VisibilitySensor
        partialVisibility
        offset={{ top: 100, bottom: 100 }}
        delayedCall
        // active={!check} // This will make sure VisibilitySensor becomes inactive after first count
      >
        {({ isVisible }: { isVisible: any }) => (
          <h1 className="relative font-bold text-center items-center text-5xl text-secondary">
            <svg
              viewBox="63.222 141.9655 565.2742 41.0005"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition duration-1000 ease-in-out absolute -bottom-5 rotate-[0.5deg] w-1/3 origin-left left-1/2 -translate-x-[60%] -z-10 scale-x-${
                isVisible ? `100` : `0`
              }`}
            >
              <path
                d="M 63.222 170.63 C 116.369 145.339 667.433 131.693 626.306 151.264 L 627.423 150.541 C 627.736 150.524 627.994 151.342 627.999 152.369 C 628.005 153.379 626.947 149.124 626.64 149.165 L 627.407 149.489 C 593.945 129.158 60.16 174.244 63.683 182.966 L 63.222 170.63 Z"
                fill="#FFA7EC"
                transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, -7.105427357601002e-15)"
              />
            </svg>
            <span>Find Your Right Plan</span>
          </h1>
        )}
      </VisibilitySensor>
      <p className="text-secondary text-center my-b mt-10 text-xl">
        We offer a variety of pricing packages to meet the unique <br /> needs
        of our services.
      </p>
      <div className="my-10 flex justify-center space-x-5 text-sm">
        <p>Pay Monthly</p>
        <Switch checked={yearly} onCheckedChange={() => setYearly(!yearly)} />
        <p>Pay Yearly</p>
      </div>
      <div className="grid grid-cols-3 w-full gap-5 text-secondary">
        <div className="group transition duration-300 w-full border-2 rounded-xl p-10 space-y-6  hover:shadow-2xl hover:scale-y-105 shadow-secondary hover:border-secondary">
          <h1 className="font-bold text-2xl">Freebie</h1>
          <p className="text-sm">
            Ideal for individuals who need quick access to basic features.
          </p>
          <br />
          <h1>
            <span className="font-bold text-5xl">$0</span> / Month
          </h1>
          <Link
            href=""
            className="transition duration-300 group-hover:bg-secondary group-hover:text-white w-full block text-center rounded-full border-2 border-secondary py-3"
          >
            Get Started
          </Link>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaCheck className="text-lg bg-secondary text-white rounded-full p-1" />
              <span>AABCDEF</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoCloseSharp className="text-xl bg-gray-100 font-bold rounded-full p-0.5" />
              <span>GHIJKL</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoCloseSharp className="text-xl bg-gray-100 font-bold rounded-full p-0.5" />
              <span>MNOPQR</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoCloseSharp className="text-xl bg-gray-100 font-bold rounded-full p-0.5" />
              <span>STUVWX</span>
            </li>
          </ul>
        </div>
        <div className="relative group transition duration-300 w-full border-2 rounded-xl p-10 space-y-6  hover:shadow-2xl hover:scale-y-105 shadow-secondary hover:border-secondary">
          <h1 className="font-bold text-2xl">Professional</h1>
          <p className="text-sm">
            Ideal for individuals who who need advanced features and tools for
            client work.
          </p>
          <h1>
            <span className="font-bold text-5xl">${yearly ? "96" : "08"}</span>{" "}
            / Month
          </h1>
          <Link
            href=""
            className="transition duration-300  group-hover:bg-secondary group-hover:text-white w-full block text-center rounded-full border-2 border-secondary py-3"
          >
            Get Started
          </Link>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaCheck className="text-lg bg-secondary text-white rounded-full p-1" />
              <span>AABCDEF</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-lg bg-secondary text-white rounded-full p-1" />
              <span>GHIJKL</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoCloseSharp className="text-xl bg-gray-100 font-bold rounded-full p-0.5" />
              <span>MNOPQR</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoCloseSharp className="text-xl bg-gray-100 font-bold rounded-full p-0.5" />
              <span>STUVWX</span>
            </li>
          </ul>
          <span className="absolute top-0 right-5 text-white bg-secondary rounded-full p-2 text-xs shadow shadow-secondary">
            Save 25%
          </span>
        </div>
        <div className="group transition duration-300 w-full border-2 rounded-xl p-10 space-y-6  hover:shadow-2xl hover:scale-y-105 shadow-secondary hover:border-secondary">
          <h1 className="font-bold text-2xl">Enterprise</h1>
          <p className="text-sm">
            Ideal for businesses who need personalized services and security for
            large teams.
          </p>
          <h1>
            <span className="font-bold text-5xl">${yearly ? "168" : "14"}</span>{" "}
            / Month
          </h1>
          <Link
            href=""
            className="transition duration-300  group-hover:bg-secondary group-hover:text-white w-full block text-center rounded-full border-2 border-secondary py-3"
          >
            Get Started
          </Link>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaCheck className="text-lg bg-secondary text-white rounded-full p-1" />
              <span>AABCDEF</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-lg bg-secondary text-white rounded-full p-1" />
              <span>GHIJKL</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-lg bg-secondary text-white rounded-full p-1" />
              <span>MNOPQR</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-lg bg-secondary text-white rounded-full p-1" />
              <span>STUVWX</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plan;
