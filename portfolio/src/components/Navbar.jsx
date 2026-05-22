import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Mail, Globe, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Education', to: 'education' },
  { name: 'Skills', to: 'skills' },
  { name: 'Internship', to: 'internship' },
  { name: 'NCC', to: 'ncc' },
  { name: 'Projects', to: 'projects' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050511]/80 backdrop-blur-md py-4 shadow-lg shadow-blue-900/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer"
          >
            Nithya.P
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <SocialIcon href="mailto:n3810624@gmail.com" icon={<Mail size={18} />} tooltip="Gmail" />
            <SocialIcon href="https://www.linkedin.com/in/nithya-p-81516140b" icon={<Globe size={18} />} tooltip="LinkedIn" />
            <SocialIcon href="tel:9363417398" icon={<Phone size={18} />} tooltip="Call Me" />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 bg-[#0a0a1a]/95 backdrop-blur-xl rounded-2xl p-4 border border-white/10"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-center space-x-6 pt-4 border-t border-white/10 mt-2">
                <a href="mailto:n3810624@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors"><Mail size={24} /></a>
                <a href="https://www.linkedin.com/in/nithya-p-81516140b" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><Globe size={24} /></a>
                <a href="tel:9363417398" className="text-gray-400 hover:text-blue-400 transition-colors"><Phone size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const SocialIcon = ({ href, icon, tooltip }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 glow-effect"
  >
    {icon}
    <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded-md pointer-events-none whitespace-nowrap border border-white/10">
      {tooltip}
    </span>
  </a>
);

export default Navbar;
