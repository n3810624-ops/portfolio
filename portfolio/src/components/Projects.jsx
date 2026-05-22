import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Laptop } from 'lucide-react';

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A highly creative, modern, and visually stunning personal portfolio designed with React.js and Tailwind CSS featuring smooth animations and glassmorphism UI.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
    image: "Portfolio"
  },
  {
    title: "College Event Website",
    description: "A comprehensive web portal for managing and showcasing college events, registrations, and schedules with an interactive user interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-purple-500 to-pink-500",
    image: "Event Web"
  },
  {
    title: "Physics Mini Projects Hub",
    description: "An educational platform showcasing various physics concepts through interactive web-based simulations and detailed explanations.",
    tech: ["Web Development", "UI/UX"],
    color: "from-emerald-500 to-teal-500",
    image: "Physics App"
  },
  {
    title: "Responsive Web Designs",
    description: "A collection of highly responsive, mobile-first web interface designs demonstrating mastery over modern CSS layouts and media queries.",
    tech: ["CSS3", "Flexbox", "Grid"],
    color: "from-orange-500 to-red-500",
    image: "Designs"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/10 hover:border-white/30 transition-all duration-500"
            >
              {/* Project Image Placeholder */}
              <div className={`h-64 w-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 flex items-center justify-center relative overflow-hidden`}>
                <Laptop size={48} className="text-white/50" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-white/10 rounded-full hover:bg-white/30 transition-colors backdrop-blur-md">
                    <ExternalLink className="text-white" size={20} />
                  </button>
                  <button className="p-3 bg-white/10 rounded-full hover:bg-white/30 transition-colors backdrop-blur-md">
                    <Code className="text-white" size={20} />
                  </button>
                </div>
              </div>

              <div className="p-8 relative">
                {/* Glow effect line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
