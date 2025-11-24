"use client";

import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    demo: string;
    github: string;
  };
}

export default function ProjectCard({ title, description, tech, image, links }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={links.demo}
            className="px-4 py-2 bg-white text-gray-900 rounded-full font-medium text-sm hover:bg-gray-100 transition"
          >
            Live Demo
          </a>
          <a
            href={links.github}
            className="px-4 py-2 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-md font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
