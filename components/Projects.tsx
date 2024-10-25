'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with Next.js and TypeScript',
      image: 'https://via.placeholder.com/500x300',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Project 2',
      description: 'Full-stack e-commerce platform with real-time features',
      image: 'https://via.placeholder.com/500x300',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'Project 3',
      description: 'Mobile-first social media dashboard',
      image: 'https://via.placeholder.com/500x300',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: '#',
      live: '#'
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#06181B]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-glass rounded-xl overflow-hidden group"
            >
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-teal-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-teal-500/20 rounded-full text-teal-300 hover:text-teal-200"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-teal-500/20 rounded-full text-teal-300 hover:text-teal-200"
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-teal-200">{project.title}</h3>
                <p className="text-teal-100/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}