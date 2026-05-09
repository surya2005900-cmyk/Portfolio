import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PassShield",
      description: "A responsive, client-side Password Strength Checker web application with a modern, cybersecurity-inspired UI.",
      tech: ["React", "Vite", "Tailwind CSS"],
      image: "/projects/expense-tracker.png", // Using existing placeholder
      github: "https://github.com/surya2005900-cmyk",
      demo: "https://surya2005900-cmyk.github.io/PassShield/"
    },
    {
      title: "Expense Tracker",
      description: "A comprehensive financial dashboard with real-time tracking, budgeting categories, and data visualization using Recharts.",
      tech: ["React", "Tailwind CSS", "Recharts", "LocalStorage"],
      image: "/projects/todo-app.png", // Using existing placeholder
      github: "https://github.com/surya2005900-cmyk",
      demo: "https://surya2005900-cmyk.github.io/expense-tracker/"
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold outfit"
            >
              <span className="text-primary">Projects</span>
            </motion.h2>
            <p className="text-slate-500 mt-4 max-w-xl">
              A selection of my recent work, showcasing my ability to build complex and beautiful applications.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-medium"
          >
            <Layers className="w-4 h-4 text-primary" />
            <span>Showcasing {projects.length} Works</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card overflow-hidden flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold outfit mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-4">
                    <a href={project.github} className="p-2 glass rounded-lg hover:text-primary transition-all duration-300">
                      <Terminal className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="p-2 glass rounded-lg hover:text-primary transition-all duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <button className="text-sm font-bold text-primary flex items-center gap-1 group/btn">
                    Details
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      className="inline-block"
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
