"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MySQL"],
  },
  { category: "Công cụ", items: ["Git", "Docker", "VS Code"] },
];

export default function Skills() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
        >
          Kĩ năng
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {skill.category}
              </h3>
              <div className="space-y-2">
                {skill.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
