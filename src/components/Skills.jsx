import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileJson, 
  Globe, 
  Layers, 
  Server, 
  Terminal,
  Monitor,
  Cpu,
  Award
} from 'lucide-react';
import { FaPython } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <Code2 className="text-blue-400" />, color: 'bg-blue-400/10' },
    { name: 'JavaScript', icon: <FileJson className="text-yellow-400" />, color: 'bg-yellow-400/10' },
    { name: 'HTML5', icon: <Globe className="text-orange-400" />, color: 'bg-orange-400/10' },
    { name: 'CSS3', icon: <Layers className="text-blue-500" />, color: 'bg-blue-500/10' },
    { name: 'Node.js', icon: <Server className="text-green-500" />, color: 'bg-green-500/10' },
    { name: 'Python', icon: <FaPython className="text-blue-500" />, color: 'bg-blue-500/10' },
    { name: 'UI Design', icon: <Monitor className="text-pink-400" />, color: 'bg-pink-400/10' },
    { name: 'Tailwind', icon: <Cpu className="text-cyan-400" />, color: 'bg-cyan-400/10' },
  ];

  const certificates = [
    {
      title: "Python for Data Science",
      issuer: "SkillUp",
      description: ""
    },
    {
      title: "Cyber Security Analyst",
      issuer: "Tata Group",
      description: ""
    },
    {
      title: "Wifi Pentesting",
      issuer: "Cappricises University",
      description: ""
    },
    {
      title: "Introduction to JavaScript",
      issuer: "SkillUp",
      description: ""
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 bg-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold outfit"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-4 group hover:border-primary/30 transition-all duration-300"
            >
              <div className={`p-4 rounded-xl ${skill.color} group-hover:scale-110 transition-transform`}>
                {React.cloneElement(skill.icon, { size: 32 })}
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Section */}
        <div className="text-center mt-24 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold outfit"
          >
            My <span className="gradient-text">Certificates</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl border border-white/5 flex flex-col gap-4 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 leading-tight">{cert.title}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{cert.issuer}</p>
                  {cert.description && (
                    <p className="text-sm text-slate-400 leading-relaxed">{cert.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
