import { motion } from "framer-motion";
import image from "../assets/image.png";

export default function Home() {
  return (
    <motion.section className="relative z-20 bg-white py-11">
      {/* Products */}
      <div className="flex flex-row items-center justify-center bg-[#FFB3D6] mx-2 h-[520px] rounded-[20px]">
        <div className="flex justify-start items-center h-full w-1/2 px-10">
          <img
            src={image}
            alt="Home Section"
            className="h-[520px] w-full object-contain"
          />
        </div>
        <div className="mt-4  w-[500px]">
          <h3 className="text-2xl py-2 font-medium text-black">
            Welcome to Sky Plus
          </h3>
          <p className="mt-1 text-1xl font-semibold text-gray-500">
            Effortless fashion for every mood — light, calm, and a little
            playful. Inspired by pastels, natural textures, and everyday
            essentials.
          </p>
          <div className="mt-8 text-center flex">
            <button className="text-1xl font-poppins text-black underline cursor-pointer">
              Explore Collection →
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
