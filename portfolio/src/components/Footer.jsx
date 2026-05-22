import React from 'react';
import { Mail, Globe, Phone, Star } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative bg-[#020205] pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Animated waves or particles could go here */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 border-b border-white/10 pb-12 mb-8">
          
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Nithya.P
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              B.Sc Physics with Computer Applications Student. Aspiring web developer and proud NCC Navy Wing Cadet, dedicated to learning, creating, and leading.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a href="mailto:n3810624@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500 border border-transparent transition-all">
                <Mail size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nithya-p-81516140b" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500 border border-transparent transition-all">
                <Globe size={18} />
              </a>
              <a href="tel:9363417398" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500 border border-transparent transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 text-center">
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['Home', 'About', 'Education', 'Skills', 'Internship', 'NCC', 'Projects', 'Gallery'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={-80}
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-white font-semibold text-lg mb-6">Quote of the Day</h3>
            <blockquote className="italic text-gray-400 text-sm border-l-2 md:border-l-0 md:border-r-2 border-purple-500 pl-4 md:pl-0 md:pr-4">
              "The future belongs to those who learn more skills and combine them in creative ways."
            </blockquote>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} P. Nithya. All rights reserved.</p>
          <p className="flex items-center">
            Designed & Built with <Star size={14} className="text-red-500 mx-1 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
