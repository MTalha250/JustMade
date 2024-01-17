import Link from "next/link";
import React from "react";
import logo from "@/assets/logo2.png";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
            <li>
              <Link href="#services">Servies</Link>
            </li>
            <li>
              <Link href="#about"> About Us</Link>
            </li>
            <li>
              <Link href="#contact"> Contact Us</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#faqs">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex justify-end space-x-3">
        <a href="">
          <FaTwitter className="text-2xl" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61555324606">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="https://www.instagram.com/justmade.io/">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/company/justmadeio/">
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
      <div className="text-sm flex justify-end space-x-5 md:space-x-10 py-5 border-b">
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <p className="text-center text-xs py-5">
        © Copyright 2023 JustMade, All Rights are Reserved.
      </p>
    </div>
  );
};

export default Footer;
