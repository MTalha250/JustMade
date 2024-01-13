import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-secondary pt-10 px-8 md:px-16 text-white rounded-t-3xl">
      <div className="flex justify-between">
        <Link href="/" className="flex">
          <img src={logo.src} alt="" className="w-44 h-fit" />
        </Link>
        <ul className="space-y-2">
          <li>Blog Writer</li>
          <li>Blog Schedule</li>
          <li>Social Media Automation</li>
          <li>Search Engine Optimisation</li>
        </ul>
        <ul className="space-y-2">
          <li>Blog</li>
          <li>Guides and Tutorials</li>
          <li>API</li>
          <li>Free Templates</li>
          <li>Status</li>
        </ul>
        <ul className="space-y-2">
          <li>Servies</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Pricing</li>
          <li>Affiliate Program</li>
        </ul>
      </div>
      <div className="mt-20 flex justify-end space-x-3">
        <FaTwitter className="text-2xl" />
        <FaFacebook className="text-2xl" />
        <FaLinkedin className="text-2xl" />
        <FaPinterest className="text-2xl" />
      </div>
      <div className="text-sm flex justify-end space-x-10 px-44 py-3 border-b">
        <span>Terms</span>
        <span>Privacy Policy</span>
      </div>
      <p className="text-center text-sm py-5">
        © Copyright 2023 JustMade, All Rights are Reserved.
      </p>
    </div>
  );
};

export default Footer;
