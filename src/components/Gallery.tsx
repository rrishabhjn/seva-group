import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'motion/react';
import { X, PlayCircle } from 'lucide-react';

// Placeholder data - Replace src with actual local paths when available
// e.g., import image1 from '../assets/photo1.jpg';
const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: '/assets/seva-1.jpeg',
    alt: 'Food Distribution',
    caption: 'Daily evening meal distribution'
  },
  {
    id: 2,
    type: 'image',
    src: '/assets/seva-2.jpeg',
    alt: 'Happy Beneficiaries',
    caption: 'Smiles that motivate us'
  },
  {
    id: 3,
    type: 'image',
    src: '/assets/seva-3.jpeg',
    alt: 'Preparation',
    caption: 'Freshly prepared nutritious meals'
  },
  {
    id: 4,
    type: 'image',
    src: '/assets/seva-4.jpeg',
    alt: 'Community',
    caption: 'Serving the elderly with respect'
  },
  {
    id: 5,
    type: 'image',
    src: '/assets/seva-5.jpeg',
    alt: 'Helping Hand',
    caption: 'Volunteers in action'
  },
  {
    id: 6,
    type: 'video',
    src: '/assets/seva-6.mp4',
    alt: 'Distribution Video',
    caption: 'Live from the distribution center'
  },
  {
    id: 7,
    type: 'video',
    src: '/assets/seva-7.mp4',
    alt: 'Community Message',
    caption: 'A message from our volunteers'
  }
];

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <div className="bg-white" id="gallery">
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Glimpses of Hope</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            See the impact of your contributions on the ground. Every meal served is a story of gratitude.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={`media-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-xl shadow-md aspect-[4/3] cursor-pointer bg-stone-100"
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <PlayCircle className="w-12 h-12 text-white opacity-80" />
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-stone-300 p-2 z-10"
                onClick={() => setSelectedItem(null)}
              >
                <X className="h-8 w-8" />
              </button>

              <motion.div
                layoutId={`media-${selectedItem.id}`}
                className="relative max-w-5xl max-h-[90vh] w-full overflow-hidden rounded-lg bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItem.type === 'video' ? (
                  <video
                    src={selectedItem.src}
                    className="w-full h-full max-h-[80vh] object-contain mx-auto"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full h-full max-h-[80vh] object-contain mx-auto"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="bg-stone-900 text-white p-4 text-center">
                  <p className="text-lg font-medium">{selectedItem.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </div>
  );
}
