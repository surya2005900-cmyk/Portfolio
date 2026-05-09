import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark/50 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold outfit"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl border border-white/5 space-y-8">
              <h3 className="text-2xl font-bold outfit mb-6">Contact Information</h3>
              
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg font-medium text-slate-200">surya2005900@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-secondary/10 rounded-2xl group-hover:bg-secondary/20 transition-all">
                  <MapPin className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-lg font-medium text-slate-200">Tamil Nadu,India</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-pink-500/10 rounded-2xl group-hover:bg-pink-500/20 transition-all">
                  <Phone className="text-pink-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Socials</p>
                  <div className="flex gap-4 mt-2">
                    <a 
                      href="https://github.com/surya2005900-cmyk" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/surya-s-880a70340/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-3xl border border-primary/20 bg-primary/5">
              <p className="text-slate-300 text-center font-medium">
                "I usually respond within 24 hours. Looking forward to our chat!"
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-slate-200"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-slate-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea 
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-slate-200 resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-primary/20">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
