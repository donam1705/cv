"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function Skills() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Kỹ Năng Chuyên Môn
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {content.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
