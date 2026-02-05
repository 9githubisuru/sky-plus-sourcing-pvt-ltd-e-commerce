import { motion } from "framer-motion";
import heroVideo from "../assets/vedio8.mp4";

const Hero = () => {
  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-10 text-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "anticipate" }}
          className="max-w-xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "backIn" }}
            className="text-5xl font-semibold leading-tight "
          >
            Effortless Style, <br /> Thoughtfully Made
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "backIn" }}
            className="mt-4 text-sm text-gray-200"
          >
            Modern essentials in soft tones and timeless cuts — <br />
            designed to feel good and look even better.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 4, ease: "backIn" }}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Shop Women →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 4.5, ease: "backIn" }}
              className="rounded-full border border-white px-6 py-3 text-sm"
            >
              Shop Men →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
