import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Compass, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition-all duration-500"></div>
              
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400">
                  <Compass size={18} />
                </span>
                My Journey
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                I am <span className="text-white font-medium">P. Nithya</span>, currently pursuing my 2nd Year in <span className="text-blue-400">B.Sc Physics with Computer Applications</span> at the prestigious <span className="text-purple-400">Lady Doak College</span>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My academic path uniquely positions me at the intersection of fundamental science and modern technology. I am deeply passionate about leveraging technological innovations to solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond academics, I am a proud <span className="text-cyan-400 font-medium">NCC Navy Wing Cadet</span>, which has instilled in me unparalleled discipline, leadership, and a spirit of teamwork. I am constantly exploring the realms of web development, seeking to create visually stunning and highly functional digital experiences.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { icon: <BookOpen className="text-blue-400" size={24} />, title: "Education", desc: "Physics & CS" },
              { icon: <Award className="text-purple-400" size={24} />, title: "NCC", desc: "Navy Wing Cadet" },
              { icon: <Code className="text-cyan-400" size={24} />, title: "Development", desc: "Web Technologies" },
              { icon: <Compass className="text-pink-400" size={24} />, title: "Leadership", desc: "Team Management" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
