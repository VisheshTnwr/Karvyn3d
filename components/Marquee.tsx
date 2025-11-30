"use client";

import { motion } from "framer-motion";

const items = [
  "CUSTOM DESIGN",
  "•",
  "RAPID PROTOTYPING",
  "•",
  "ECO-FRIENDLY PLA",
  "•",
  "PRECISION PRINTING",
  "•",
];

export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden bg-accent py-4 border-y border-black">
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-accent to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-accent to-transparent z-10" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <span
                key={index}
                className="text-black font-heading font-black text-2xl mx-8 tracking-tighter"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}