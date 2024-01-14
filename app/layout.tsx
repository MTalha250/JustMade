"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/cursor";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>JustMade</title>
      </head>
      <body className={inter.className}>
        <Cursor />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.1,
            },
          }}
          className="w-[100vw] max-w-[1600px] transition-top duration-300 flex items-center justify-center top-5 fixed z-50"
        >
          <Navbar />
        </motion.div>
        <div>{children}</div>
        <Footer />
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            className="hidden md:inline-block fixed bottom-5 right-5 z-50 bg-secondary text-2xl border border-white text-white p-3 rounded-xl shadow-md shadow-black/30"
            onClick={() => window.scrollTo(0, 0)}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </body>
    </html>
  );
}
