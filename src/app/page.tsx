"use client";
import { motion } from "framer-motion";
import ImageUploader from "@/components/ImageUploader";
import Navbar from "@/components/Navbar/Navbar";
import BackgroundGrid from "@/components/BackgroundGrid";
import Image from "next/image";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <main>
      <Navbar />
      <main className="flex flex-col px-[3rem] sm:px-24 py-24 w-screen">
        {/* Section 1 */}
        <motion.section
          className="grid sm:grid-cols-2 items-center h-[85vh]"
          whileInView="animate"
          viewport={{ once: true }}
          {...fadeInUp}
        >
          <motion.h1
            className="text-6xl text-center sm:text-6xl md:text-7xl sm:text-start lg:text-8xl xl:text-9xl leading-tight"
            {...fadeInUp}
          >
            SEE <br />
            BEYOND <br />
            THE <br />
            PIXELS
          </motion.h1>

          <motion.div
            className="flex flex-col rounded-[2rem] justify-center items-center bg-gradient-to-r from-[#FAFAFA] to-[#EAEAEA] text-center text-[#707070] h-3/4 p-8 md:p-16 lg:p-20 xl:p-24 space-y-2 shadow-neumorphic"
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="pb-8 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xlxl">
              <p>Deep image insights.</p>
              <p>Easy analysis.</p>
            </div>

            <Image src="/analysis.svg" alt="analysis" width={700} height={10} />
          </motion.div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          className="w-full h-auto rounded-4xl relative overflow-hidden pb-8"
          whileInView="animate"
          viewport={{ once: true }}
          {...fadeInUp}
        >
          <div className="scale-75 sm:scale-100">
            <ImageUploader />
          </div>

          <Image
            src="/abstract.png"
            alt="Abstract Background"
            fill
            className="object-cover -z-[5]"
            priority
            quality={100}
          />
        </motion.section>
      </main>

      <BackgroundGrid />
    </main>
  );
}
