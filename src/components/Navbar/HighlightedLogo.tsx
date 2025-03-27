"use client";
import { motion } from "framer-motion";

export default function HighlightedLogo() {
  return (
    <div className="relative overflow-hidden p-4 scale-150 mx-8">
      {/* The text */}
      <span className="font-serif text-white font-thin relative z-10 text-md mix-blend-difference flex space-x-1">
        <h3>Image-IN</h3>
        <svg
          width="31"
          height="21"
          viewBox="0 0 50 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25.5" cy="15.5" r="14.5" stroke="white" strokeWidth="2" />
          <circle cx="15.5" cy="15.5" r="14.5" stroke="white" strokeWidth="2" />
        </svg>
      </span>

      {/* The animated highlight */}
      <motion.span
        className="absolute top-3 left-3 h-8 w-[76%] bg-foreground pointer-events-none"
        initial={{ x: "-150%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
