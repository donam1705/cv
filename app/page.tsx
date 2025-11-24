"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import { content } from "@/data/content";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-gray-50 dark:bg-black transition-colors duration-300">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-white/60 dark:bg-black/40 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20">
        <h1 className="font-bold text-xl text-gray-800 dark:text-gray-200">
          {content.hero.name}
        </h1>
        {/* <ThemeToggle /> */}
      </header>

      <Hero />
      <About />
      <Experience />
      <Skills />

      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Dự Án Tiêu Biểu
            </motion.h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Những sản phẩm tôi đã xây dựng và phát triển
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.projects.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold transition-all shadow-sm hover:shadow-md">
              Xem Tất Cả Dự Án →
            </button>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="py-10 text-center text-gray-600 dark:text-gray-400 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="mb-6">
          <SocialLinks />
        </div>
        <p>© {new Date().getFullYear()} {content.hero.name}. All rights reserved.</p>
      </footer>
    </main>
  );
}
