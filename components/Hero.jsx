"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 dark:opacity-20"
      />

      <motion.div
        style={{ y: y1 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
          ABC
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
          Hello
        </p>
      </motion.div>
    </section>
  );
}
