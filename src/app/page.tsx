import ImageUploader from "@/components/ImageUploader";
import Navbar from "@/components/Navbar/Navbar";
import BackgroundGrid from "@/components/BackgroundGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <main className="flex flex-col px-24 py-24 w-screen">
        <section className="grid grid-cols-2 items-center h-[85vh]">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight">
            SEE <br />
            BEYOND <br />
            THE <br />
            PIXELS
          </h1>

          {/* Right image div */}
          <div className="flex flex-col rounded-[2rem] justify-center items-center bg-gradient-to-r from-[#FAFAFA] to-[#EAEAEA] text-center text-[#707070] h-3/4 p-8 md:p-16 lg:p-20 xl:p-24 space-y-2 shadow-neumorphic ">
            <div className="pb-8 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xlxl">
              <p>Deep image insights.</p>
              <p>Easy analysis.</p>
            </div>

            <Image
              src={"/analysis.svg"}
              alt="analysis"
              width={700}
              height={10}
            />
          </div>
        </section>
        <section className="w-full h-auto rounded-4xl relative overflow-hidden pb-8">
          <ImageUploader />
          <Image
            src="/abstract.png"
            alt="Abstract Background"
            fill
            className="object-cover -z-[5]"
            priority
            quality={100}
          />
        </section>
      </main>

      {/* Parralax grid component */}
      <BackgroundGrid />
    </main>
  );
}
