import Link from "next/link";
import React from "react";
import logo from "@/assets/logo2.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-secondary pt-10 px-8 md:px-16 text-white rounded-t-3xl">
      <div className="w-full flex justify-around flex-wrap gap-10">
        <Link href="/" className="w-[250px]">
          <img src={logo.src} alt="" className="w-full" />
        </Link>
        <div className="w-[250px]">
          <h1 className="text-xl">
            Our{" "}
            <span className="font-bold text-2xl font-bask italic">
              Services
            </span>
          </h1>
          <ul className="space-y-2 mt-5">
            <li>Blog Writing</li>
            <li>Blog Scheduling</li>
            <li>Social Media Automation</li>
            <li>Search Engine Optimisation</li>
          </ul>
        </div>
        <div className="w-[250px]">
          <h1 className="text-xl">
            <span className="font-bold text-2xl font-bask italic">Explore</span>
          </h1>
          <ul className="space-y-2 mt-5">
            <li>Blog</li>
            <li>Guides and Tutorials</li>
            <li>API</li>
            <li>Free Templates</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="w-[250px]">
          <h1 className="text-xl">
            Quick
            <span className="font-bold text-2xl font-bask italic"> Links</span>
          </h1>
          <ul className="space-y-2 mt-5">
            <li>Servies</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Pricing</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex justify-end space-x-3">
        <FaTwitter className="text-2xl" />
        <FaFacebook className="text-2xl" />
        <FaLinkedin className="text-2xl" />
        <FaPinterest className="text-2xl" />
      </div>
      <div className="text-sm flex justify-end space-x-5 md:space-x-10 py-5 border-b">
        <span>Terms</span>
        <span>Privacy Policy</span>
      </div>
      <p className="text-center text-xs py-5">
        © Copyright 2023 JustMade, All Rights are Reserved.
      </p>
    </div>
  );
};

export default Footer;
