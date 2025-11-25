"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Kinh Nghiệm Làm Việc
        </motion.h2>

        <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-3 md:ml-6 space-y-12">
          {content.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                {exp.company}
              </h4>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
