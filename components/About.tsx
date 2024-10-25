'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCloud } from 'react-icons/fi';

export default function About() {
  const skills = [
    { 
      icon: FiCode,
      title: 'Frontend Development',
      description: 'React, Next.js, Tailwind CSS',
      percentage: 90
    },
    {
      icon: FiServer,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL',
      percentage: 85
    },
    {
      icon: FiCloud,
      title: 'DevOps',
      description: 'Docker, AWS, CI/CD',
      percentage: 80
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#071318]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-glass rounded-xl hover:bg-white/10 transition duration-300"
            >
              <skill.icon className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-teal-200">{skill.title}</h3>
              <p className="text-teal-100/70 mb-4">{skill.description}</p>
              <div className="w-full h-2 bg-teal-900/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-teal-400 to-emerald-500"
                />
              </div>
              <span className="text-sm text-teal-300 mt-2 block">{skill.percentage}%</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}