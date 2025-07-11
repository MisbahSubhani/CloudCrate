"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8 pb-20 sm:p-20 font-sans">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-300 dark:bg-indigo-800 blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-300 dark:bg-blue-800 blur-3xl opacity-30"></div>
      </motion.div>

      <main className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[80vh] gap-12">
        {/* Logo with animation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
        
            <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">+</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400"
            >
              MyStorage
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            Secure cloud storage for your important documents. Store, organize, and access your Google Drive links in one safe place.
          </motion.p>
        </motion.div>

        {/* Features list with staggered animation */}
        <motion.ul className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            {
              icon: "🔒",
              title: "Secure Storage",
              description: "Military-grade encryption for your sensitive documents"
            },
            {
              icon: "🔗",
              title: "Link Management",
              description: "Organize all your Google Drive links in one place"
            },
            {
              icon: "⚡",
              title: "Instant Access",
              description: "Retrieve your documents anytime, anywhere"
            }
          ].map((feature, index) => (
            <motion.li
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA buttons with animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <Link href="/signup" passHref>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium text-lg shadow-md hover:shadow-lg transition-all"
            >
              Get Started - It&apos;s Free
            </motion.button>
          </Link>
          <Link href="/login" passHref>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 py-3 px-6 rounded-lg font-medium text-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              Existing User? Login
            </motion.button>
          </Link>
        </motion.div>
      </main>

      {/* Footer with subtle animation */}
      {/* <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 mt-20 flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
      >
        <Link href="/privacy" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          Terms of Service
        </Link>
        <Link href="/about" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          Contact
        </Link>
      </motion.footer> */}
    </div>
  );
}