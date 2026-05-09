import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-blue-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold outfit mb-6"
          >
            Hi, I'm <span className="gradient-text">Surya</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-medium text-slate-400 mb-8"
          >
            Aspiring Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto text-slate-500 text-lg mb-10 leading-relaxed"
          >
            I build modern, scalable, and user-centric web applications with a focus on performance and stunning design. Passionate about turning ideas into reality through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <Link to="projects" smooth={true} duration={500}>
              <button className="group px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-primary/20">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="px-8 py-4 glass border border-white/10 rounded-2xl font-bold text-white hover:bg-white/10 transition-all duration-300">
                Contact Me
              </button>
            </Link>
            <a 
              href="https://github.com/surya2005900-cmyk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 glass border border-white/10 rounded-2xl text-white hover:text-primary hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
            >
              <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/surya-s-880a70340/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 glass border border-white/10 rounded-2xl text-white hover:text-primary hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
            >
              <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="/Surya_Resume.pdf" 
              download="Surya_Resume.pdf" 
              className="p-4 glass border border-white/10 rounded-2xl text-white hover:text-primary hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
              title="Download Resume"
            >
              <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 opacity-50"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
