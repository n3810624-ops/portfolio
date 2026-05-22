import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Shield, Target, Users } from 'lucide-react';

const Ncc = () => {
  return (
    <section id="ncc" className="py-20 relative bg-[#040b16] border-y border-blue-900/30">
      {/* Background Navy Theme */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto mb-6 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <Anchor className="text-blue-400" size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider text-white"
          >
            NCC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Navy Wing</span>
          </motion.h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-blue-200 italic font-light max-w-2xl mx-auto">
            "Discipline, Leadership, and Patriotism."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-2xl border border-blue-500/20 shadow-[0_0_40px_rgba(30,58,138,0.2)]">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-blue-500/20 pb-4">Core Values Cultivated</h3>
              
              <div className="space-y-6">
                {[
                  { icon: <Shield size={24} />, title: "Discipline", desc: "Upholding the highest standards of conduct and punctuality." },
                  { icon: <Target size={24} />, title: "Leadership", desc: "Taking initiative and guiding peers towards common goals." },
                  { icon: <Users size={24} />, title: "Teamwork", desc: "Collaborating effectively under pressure and varied conditions." },
                  { icon: <Anchor size={24} />, title: "Dedication", desc: "Unwavering commitment to duties and national values." }
                ].map((val, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 p-2 rounded-lg bg-blue-900/40 text-blue-400 border border-blue-500/20">
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">{val.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 h-full"
          >
            <div className="flex flex-col gap-4">
              <div className="bg-blue-900/20 h-48 rounded-2xl border border-blue-500/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <div className="w-full h-full flex items-center justify-center text-blue-500/30 text-xs uppercase tracking-widest font-bold">NCC Photo 1</div>
              </div>
              <div className="bg-blue-900/20 h-64 rounded-2xl border border-blue-500/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <div className="w-full h-full flex items-center justify-center text-blue-500/30 text-xs uppercase tracking-widest font-bold">NCC Photo 2</div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <div className="bg-blue-900/20 h-64 rounded-2xl border border-blue-500/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <div className="w-full h-full flex items-center justify-center text-blue-500/30 text-xs uppercase tracking-widest font-bold">NCC Photo 3</div>
              </div>
              <div className="bg-blue-900/20 h-48 rounded-2xl border border-blue-500/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <div className="w-full h-full flex items-center justify-center text-blue-500/30 text-xs uppercase tracking-widest font-bold">NCC Photo 4</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ncc;
