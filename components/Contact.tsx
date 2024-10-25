'use client';

import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-[#071318]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Get In Touch</h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="relative">
            <FiUser className="absolute top-1/2 -translate-y-1/2 left-4 text-teal-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 bg-glass rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition placeholder-teal-300/50 text-teal-200"
            />
          </div>
          <div className="relative">
            <FiMail className="absolute top-1/2 -translate-y-1/2 left-4 text-teal-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 bg-glass rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition placeholder-teal-300/50 text-teal-200"
            />
          </div>
          <div className="relative">
            <FiMessageSquare className="absolute top-4 left-4 text-teal-400" />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full pl-12 pr-4 py-3 bg-glass rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition placeholder-teal-300/50 text-teal-200"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg font-semibold text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}