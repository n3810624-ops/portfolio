import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-[#07071a]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Background</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent transform md:-translate-x-1/2"></div>
            
            {/* Education Card */}
            <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between mb-12">
              <div className="hidden md:block w-5/12"></div>
              
              <div className="absolute left-[-8px] md:left-1/2 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)] border-2 border-white transform md:-translate-x-1/2 z-10"></div>
              
              <div className="w-full md:w-5/12 ml-6 md:ml-0 glass-card p-6 rounded-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300">
                <div className="flex items-center space-x-2 text-pink-400 mb-2 text-sm font-semibold tracking-wider">
                  <Calendar size={16} />
                  <span>Currently Pursuing (2nd Year)</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">B.Sc Physics with Computer Applications</h3>
                <div className="flex flex-col space-y-2 mt-4 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <GraduationCap size={18} className="text-purple-400" />
                    <span>Lady Doak College</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-purple-400" />
                    <span>Madurai, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* School Education Card (Example Placeholder) */}
            <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between mb-12">
              <div className="w-full md:w-5/12 ml-6 md:ml-0 md:mr-auto md:text-right glass-card p-6 rounded-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 order-2 md:order-1">
                <div className="flex items-center md:justify-end space-x-2 text-purple-400 mb-2 text-sm font-semibold tracking-wider">
                  <Calendar size={16} />
                  <span>Completed</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Higher Secondary Education</h3>
                <div className="flex flex-col md:items-end space-y-2 mt-4 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <GraduationCap size={18} className="text-pink-400" />
                    <span>School Name Here</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-[-8px] md:left-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] border-2 border-white transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
              
              <div className="hidden md:block w-5/12 order-3"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
