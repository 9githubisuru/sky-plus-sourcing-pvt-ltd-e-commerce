import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Item = {
  id: number;
  title: string;
  image: string;
  accent: string;
};

const items: Item[] = [
  {
    id: 1,
    title: "Soft Pastel Set",
    image: "https://framerusercontent.com/images/47d0cefQBmQ4fqwuo5RMwwtM.png",
    accent: "#fca5a5",
  },
  {
    id: 2,
    title: "Urban Minimal",
    image:
      "https://framerusercontent.com/images/arUegGYWl4vQUi82ALnKoHPlsQ0.png",
    accent: "#c7d2fe",
  },
  {
    id: 3,
    title: "Modern Essentials",
    image:
      "https://framerusercontent.com/images/bcDbNUAwCatBrkh1skXQenb02c.png",
    accent: "#fde68a",
  },
  {
    id: 4,
    title: "Night Luxe",
    image:
      "https://framerusercontent.com/images/tSUdynma9eAhN6nzwtZayTfD1qY.png",
    accent: "#a7f3d0",
  },
  {
    id: 5,
    title: "Ivory Flow Dress",
    image:
      "https://framerusercontent.com/images/BJeLswQ2kJN6bxg673zBBV8E0o.png",
    accent: "#fef3c7",
  },
  {
    id: 6,
    title: "Stone Linen Set",
    image:
      "https://framerusercontent.com/images/lMA1QBdAKrooCuEWs5rl3W0ZO8.png",
    accent: "#e5e7eb",
  },
  {
    id: 7,
    title: "Blush Evening Wear",
    image:
      "https://framerusercontent.com/images/QihZfinbQ0JLmV0HhZLknKyjqsY.png",
    accent: "#fbcfe8",
  },
  {
    id: 8,
    title: "Midnight Silk",
    image:
      "https://framerusercontent.com/images/pdpwG6bDdOjAhj33bUGuIKYmAEM.png",
    accent: "#111827",
  },
  {
    id: 9,
    title: "Sage Comfort Fit",
    image:
      "https://framerusercontent.com/images/HvNB9Xgrnv77cBsqcY0cTWIHvaE.png",
    accent: "#d1fae5",
  },
];

const ITEM_WIDTH = 200;
const GAP = 32;

const HorizontalScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-white">
      <div className="absolute flex item-center justify-center top-0 left-0 w-full">
        <h3 className="text-3xl font-sans">Shop Categories</h3>
      </div>
      {/* Sticky Wrapper */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4 px-15 will-change-transform"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative h-125 w-87.5 shrink-0 overflow-hidden "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 60%, ${item.accent})`,
                  mixBlendMode: "multiply",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-8 left-8 text-white">
                <span className="mb-2 block text-xs opacity-80">
                  0{item.id}
                </span>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
