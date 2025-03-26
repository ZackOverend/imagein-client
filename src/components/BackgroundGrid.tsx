"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BackgroundGrid() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 600]);

  return (
    <motion.div
      style={{ y }}
      className="-z-10 absolute 
      inset-0  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
      bg-[size:36px_36px] 
      [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,#000_70%,transparent_110%)]"
    />
  );
}
