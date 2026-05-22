import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, ExternalLink } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="py-20 relative bg-[#060616]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Experience</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-emerald-500/20 relative overflow-hidden group"
        >
          {/* Animated Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-emerald-500/20 transition-all duration-700"></div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white/5 border-2 border-emerald-500/30 flex items-center justify-center p-4 shadow-[0_0_30px_rgba(16,185,129,0.1)] mb-6">
                {/* Fallback for DCI logo */}
                <span className="text-4xl font-bold text-emerald-400">DCI</span>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-white">DCI</h4>
                <p className="text-emerald-400 font-medium text-sm mt-1">Internship</p>
              </div>
            </div>

            <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="text-emerald-400" size={24} />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Web Development Intern</h3>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400 mb-6 text-sm">
                <Code size={16} />
                <span>Domain: Web Technologies</span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Successfully completed an internship program focusing on modern web development practices. Gained hands-on experience in building responsive user interfaces, structuring robust layouts, and understanding the core principles of front-end development.
              </p>

              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JavaScript', 'Responsive Design'].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;
