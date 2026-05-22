import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "HTML5", level: 90, color: "from-orange-400 to-red-500" },
      { name: "CSS3 / Tailwind", level: 85, color: "from-blue-400 to-cyan-500" },
      { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600" },
      { name: "Web Development", level: 85, color: "from-purple-400 to-pink-500" },
    ]
  },
  {
    title: "Professional Skills",
    skills: [
      { name: "Communication", level: 90, color: "from-green-400 to-emerald-600" },
      { name: "Team Leadership", level: 95, color: "from-blue-500 to-indigo-600" },
      { name: "NCC Training", level: 100, color: "from-blue-800 to-slate-800" },
      { name: "Creativity", level: 90, color: "from-pink-400 to-rose-600" },
    ]
  }
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Tamil", level: "Native" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative glow-effect`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Languages Known</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="glass-card px-8 py-4 rounded-full border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-default">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
                  {lang.name}
                </span>
                <span className="ml-3 text-sm text-gray-500 uppercase tracking-widest">{lang.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
