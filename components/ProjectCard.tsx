"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({ title, description }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border dark:border-gray-700 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        rotateX: hovered ? 10 : 0,
        rotateY: hovered ? -10 : 0,
        scale: hovered ? 1.05 : 1,
      }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}
