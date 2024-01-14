"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="invisible md:visible w-[20px] h-[20px] bg-[#f2bd9d] border border-white rounded-full fixed z-50 pointer-events-none"
      animate={{ x: position.x - 12, y: position.y - 12 }}
    ></motion.div>
  );
};

export default Cursor;
