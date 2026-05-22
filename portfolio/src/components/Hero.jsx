import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Globe, Phone } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Navy Waves Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1e3a8a" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,154.7C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Floating Physics Symbols */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div animate={{ y: [0, -20, 0], rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-1/4 text-blue-500/20 text-4xl">∑</motion.div>
        <motion.div animate={{ y: [0, 30, 0], rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/3 right-1/4 text-purple-500/20 text-5xl">Ω</motion.div>
        <motion.div animate={{ y: [0, -40, 0], rotate: 180 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/4 left-1/3 text-cyan-500/20 text-6xl">Δ</motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: 90 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/3 right-1/3 text-pink-500/20 text-4xl">λ</motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-sm"
          >
            Welcome to my portfolio
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-sans"
          >
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">P. Nithya</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 h-20"
          >
            <p>B.Sc Physics with Computer Applications Student</p>
            <p className="text-blue-400 font-medium mt-2">NCC Navy Wing Cadet | Web Developer</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link to="projects" smooth={true} offset={-80}>
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                View Portfolio
              </button>
            </Link>
            <Link to="contact" smooth={true} offset={-80}>
              <button className="px-8 py-3 rounded-full bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-md">
                Contact Me
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 animate-spin-slow opacity-20 blur-2xl"></div>
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
            <div className="absolute inset-6 rounded-full border border-blue-500/30"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
              {/* Fallback image if user hasn't provided one yet */}
              <div className="text-6xl font-bold text-white/50 bg-clip-text">PN</div>
            </div>
            
            {/* Orbiting Elements */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full">
              <div className="absolute -top-3 left-1/2 w-6 h-6 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            </motion.div>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full">
              <div className="absolute bottom-10 -right-2 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2 tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-blue-400 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
