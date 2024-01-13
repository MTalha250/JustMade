"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const Plan = () => {
  const [yearly, setYearly] = React.useState(false);

  return (
    <div className="md:px-16 px-8 my-20">
      <h1 className="font-bold text-center text-5xl text-secondary">
        Find Your Right Plan
      </h1>
      <p className="text-secondary text-center my-5 text-xl">
        We offer a variety of pricing packages to meet the unique <br /> needs
        of our services.
      </p>
      <div className="my-10 flex justify-center space-x-5 text-sm">
        <p>Pay Monthly</p>
        <Switch checked={yearly} onCheckedChange={() => setYearly(!yearly)} />
        <p>Pay Yearly</p>
      </div>
      <div className="grid grid-cols-3 w-full gap-5 px-32 text-secondary">
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
