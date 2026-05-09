import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Rocket } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <User className="w-6 h-6 text-blue-400" />,
      title: "Who am I?",
      description: "A passionate developer who loves crafting beautiful digital experiences. I thrive on solving complex problems and learning new technologies."
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "My Goal",
      description: "To become a world-class Full Stack Developer and contribute to innovative projects that make a real difference in people's lives."
    },
    {
      icon: <Rocket className="w-6 h-6 text-pink-400" />,
      title: "My Approach",
      description: "I believe in clean code, user-centric design, and continuous improvement. Every project is an opportunity to push boundaries."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-semibold tracking-widest uppercase text-sm"
          >
            Discovery
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold outfit mt-2"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group"
            >
              <div className="p-4 bg-white/5 rounded-2xl w-fit mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold outfit mb-4">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default About;
