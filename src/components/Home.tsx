import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import image from "../assets/image.png";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  return (
    <motion.section className="relative z-20 bg-white py-11" ref={containerRef}>
      <div className="flex flex-row items-center justify-center bg-[#FFB3D6] mx-15 h-[520px] rounded-[20px] overflow-hidden">
        <div className="flex justify-start items-center h-full ">
          <img
            src={image}
            alt="Home Section"
            className="h-[520px] w-full object-contain"
          />
        </div>
        <motion.div
          className="mt-4 w-[400px]"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.h3 className="text-5xl py-2 font-bold text-black">
            Sky Plus Sourcing
          </motion.h3>
          <motion.p className="mt-2 text-1xl font-medium text-gray-500">
            Effortless fashion for every mood — light, calm, and a little
            playful. Inspired by pastels, natural textures, and everyday
            essentials.
          </motion.p>
          <div className="mt-6 text-center flex items-center justify-center bg-black w-[200px] h-[40px] rounded-[30px] hover:border-2 border-[#535862] cursor-pointer ">
            <a className="text-1xl font-semibold text-white  cursor-pointer">
              Explore Collection →
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
