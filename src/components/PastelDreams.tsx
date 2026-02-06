import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    id: 1,
    title: "Coral Curve Skirt",
    price: "$100",
    oldPrice: "$177",
    image:
      "https://framerusercontent.com/images/VHaF569fb0QkKbhR6tdzQEY8JA.png",
    bg: "bg-pink-100",
  },
  {
    id: 2,
    title: "Mist Ruffle Top",
    price: "$113",
    oldPrice: "$160",
    image:
      "https://framerusercontent.com/images/dZOU0u3VFzUJMLX3zy3Z53X0r4.png",
    bg: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Willow Knit Top",
    price: "$94",
    oldPrice: null,
    image:
      "https://framerusercontent.com/images/j1YTtjh4d3olozP0KbgUQ89FKw.png",
    bg: "bg-purple-100",
  },
  {
    id: 4,
    title: "Midnight Hoodie",
    price: "$97",
    oldPrice: null,
    image:
      "https://framerusercontent.com/images/pdpwG6bDdOjAhj33bUGuIKYmAEM.png",
    bg: "bg-orange-100",
  },
];

export default function PastelDreams() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -10]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  // Animations
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <motion.section
      ref={ref}
      style={{
        y,
        scale,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
      }}
      className="relative z-20 bg-white py-11"
    >
      {/* Title */}
      <motion.div
        className="mb-10 text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.h2 className="text-4xl font-poppins text-black">
          Pastel Dreams
        </motion.h2>
        <motion.p className="mt-3 text-sm text-gray-500">
          Soft hues, bold styles — embrace the pastel aesthetic.
        </motion.p>
      </motion.div>

      {/* Products */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer"
          >
            <div
              className={`relative overflow-hidden rounded-3xl ${product.bg}`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-black">
                {product.title}
              </h3>
              <div className="mt-1 flex gap-2 text-sm">
                <span className="font-semibold text-black">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center items-center justify-center flex">
        <button className="text-1xl font-poppins text-black underline cursor-pointer">
          View All →
        </button>
      </div>
    </motion.section>
  );
}
