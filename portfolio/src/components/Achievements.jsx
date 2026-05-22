import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const achievementsList = [
  {
    icon: <Trophy size={32} />,
    count: "2+",
    label: "Years in NCC",
    desc: "Active participation in Navy Wing camps & parades",
    color: "from-yellow-400 to-amber-600"
  },
  {
    icon: <Award size={32} />,
    count: "1",
    label: "Internship Completed",
    desc: "Web Development at DCI",
    color: "from-blue-400 to-indigo-600"
  },
  {
    icon: <Star size={32} />,
    count: "5+",
    label: "Mini Projects",
    desc: "Built responsive and interactive web applications",
    color: "from-emerald-400 to-teal-600"
  },
  {
    icon: <Medal size={32} />,
    count: "Top",
    label: "Leadership Roles",
    desc: "Managed college events & teamwork activities",
    color: "from-purple-400 to-pink-600"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Achievements</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievementsList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl text-center relative group overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="flex justify-center mb-6 relative">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-300"></div>
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} p-[2px]`}>
                  <div className="w-full h-full bg-[#0a0a1a] rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
              </div>

              <h3 className={`text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                {item.count}
              </h3>
              <h4 className="text-lg font-bold text-white mb-3">{item.label}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
