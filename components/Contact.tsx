"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Liên Hệ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Bạn đang tìm kiếm một lập trình viên cho dự án tiếp theo? Hãy liên hệ với tôi!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.a
            href={`mailto:${content.contact.email}`}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl flex flex-col items-center gap-4 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">{content.contact.email}</p>
          </motion.a>

          <motion.a
            href={`tel:${content.contact.phone}`}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl flex flex-col items-center gap-4 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Điện thoại</h3>
            <p className="text-gray-600 dark:text-gray-400">{content.contact.phone}</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
