"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src={content.about.image} 
                alt="Profile" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-500/30 rounded-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white relative inline-block">
              {content.about.title}
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {content.about.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">.</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Năm kinh nghiệm</span>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                <span className="block text-3xl font-bold text-purple-600 dark:text-purple-400">.</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Dự án hoàn thành</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
