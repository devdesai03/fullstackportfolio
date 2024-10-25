'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Generate particles
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const socialLinks = [
    { icon: FiGithub, href: '#' },
    { icon: FiTwitter, href: '#' },
    { icon: FiLinkedin, href: '#' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-emerald-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_50%)]" />
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-500/20 rounded-full"
            initial={{ x: particle.x, y: particle.y }}
            animate={{
              y: [particle.y, particle.y + Math.random() * 100, particle.y],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-full bg-glass mx-auto mb-8 animate-glow"
        >
          <img
            src="https://via.placeholder.com/128"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>

        <h1 className="text-6xl font-bold mb-6 text-gradient">
          John Doe
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-teal-200/80 mb-8"
        >
          Full Stack Developer
        </motion.p>

        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -3 }}
              className="text-2xl text-teal-300 hover:text-teal-400 transition-colors"
            >
              <social.icon />
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-glass rounded-full font-semibold text-teal-300 hover:text-teal-200 hover:bg-teal-900/20 transition duration-300"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
}