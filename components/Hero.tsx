"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { content } from "@/data/content";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const roles = content.hero.roles;
    const currentRole = roles[roleIndex];
    
    const tick = () => {
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(50);
      }

      if (!isDeleting && updatedText === currentRole) {
        setIsDeleting(true);
        setDelta(2000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setDelta(150);
      }
    };

    const ticker = setTimeout(tick, delta);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, roleIndex, delta]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 blur-3xl"
      />
      
      <div 
        className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        style={{
          backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/cv" : ""}/grid.svg')`
        }}
      />

      <motion.div
        style={{ y: y1 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl px-6"
      >
        <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-4">
          Xin chào, tôi là
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
          {content.hero.name}
        </h1>
        
        <div className="h-12 md:h-16 mb-8 flex items-center justify-center">
          <span className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
            Tôi là một <span className="text-blue-600 dark:text-blue-400">{text}</span>
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.hero.description}
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
            {content.hero.cta}
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-semibold transition-all">
            Liên Hệ
          </button>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
