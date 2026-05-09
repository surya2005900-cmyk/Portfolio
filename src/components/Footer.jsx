import React from 'react';
import { Share2, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 bg-[#030712]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold outfit gradient-text mb-2">SURYA</h3>
            <p className="text-slate-500 text-sm max-w-xs">
              Building the future of the web, one component at a time.
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/surya2005900-cmyk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 glass rounded-lg hover:text-primary transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/surya-s-880a70340/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 glass rounded-lg hover:text-primary transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 glass rounded-lg hover:text-primary transition-all duration-300">
              <Share2 className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Surya
            </p>
            <p className="text-slate-600 text-[10px] mt-2 uppercase tracking-widest font-bold">
              © {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
