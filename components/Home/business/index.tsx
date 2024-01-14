"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Business = () => {
  return (
    <div className="py-10 px-16 md:px-32">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="bg-primary flex flex-col items-center justify-between rounded-2xl p-10 space-y-3 text-secondary"
      >
        <h1 className="text-4xl font-extralight font-bask">Make Better</h1>
        <h1
          className="text-4xl font-bold bg-transparent"
          style={{
            background:
              "url('https://assets-global.website-files.com/64fed7eecff9e45d4bb373ed/653654b69ea7b7c5f9dbec63_underline.svg') left bottom no-repeat",
          }}
        >
          Business Decisions
        </h1>
        <p className="w-1/2 py-10 text-center">
          Explore our success stories and learn how we've successfully helped
          different businesses. Or get in touch with us to schedule an
          introductory call.
        </p>
        <Link
          href="/contact"
          className="px-5 py-3 text-base rounded-xl text-white bg-secondary shadow shadow-black/30"
        >
          Get a demo
        </Link>
      </motion.div>
    </div>
  );
};

export default Business;
