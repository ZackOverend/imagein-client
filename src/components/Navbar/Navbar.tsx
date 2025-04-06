"use client";
import HighlightedLogo from "@/components/Navbar/HighlightedLogo";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex w-full justify-between h-12 bg-[var(--background)] drop-shadow-xl items-center p-10 z-20 fixed">
        <HighlightedLogo />
        <motion.a
          href="https://zackaryoverend.vercel.app"
          target="_blank"
          className="relative inline-block text-sm text-gray-800 hover:text-black"
          whileHover="hover"
        >
          View My Other Work
          <motion.span
            variants={{
              hover: { scaleX: 1 },
              initial: { scaleX: 0 },
            }}
            initial="initial"
            className="absolute z-20 left-0 bottom-0 h-[2px] w-full bg-black origin-left"
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.a>
      </div>
    </>
  );
};

export default Navbar;
