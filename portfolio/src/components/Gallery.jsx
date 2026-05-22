import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';

const categories = ["All", "NCC", "College", "Internship", "Coding"];

const galleryImages = [
  { id: 1, category: "NCC", title: "Parade Day", size: "tall" },
  { id: 2, category: "College", title: "Physics Lab", size: "wide" },
  { id: 3, category: "Internship", title: "Office Setup", size: "square" },
  { id: 4, category: "Coding", title: "Project Demo", size: "square" },
  { id: 5, category: "NCC", title: "Navy Camp", size: "wide" },
  { id: 6, category: "College", title: "Event Organising", size: "tall" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 relative bg-[#050511]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Gallery</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full mb-10"></div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-like Grid Placeholder */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 ${
                  img.size === 'tall' ? 'row-span-2' : img.size === 'wide' ? 'col-span-1 md:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black/80 flex items-center justify-center">
                  <span className="text-white/20 font-bold text-2xl uppercase tracking-widest">{img.category}</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <ZoomIn className="text-white mb-2 transform scale-50 group-hover:scale-100 transition-transform duration-300" size={32} />
                  <h3 className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/20 flex flex-col items-center justify-center shadow-2xl overflow-hidden"
              >
                <div className="text-white/30 text-4xl font-bold uppercase tracking-widest">{selectedImage.category} Photo</div>
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-gray-400">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
