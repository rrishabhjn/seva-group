import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1920&auto=format&fit=crop"
          alt="Community Service in India"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-block bg-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-orange-200 font-medium text-sm tracking-wide uppercase">Serving Beawar Since 2020</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Serving Humanity, <br />
            <span className="text-orange-500">One Meal at a Time.</span>
          </h1>
          
          <p className="text-xl text-stone-200 mb-10 leading-relaxed max-w-2xl">
            We provide daily meals to the elderly, the needy, and blue-collar workers who have been left behind. 
            Zero overhead. 100% impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-600/30 hover:-translate-y-1"
            >
              Support Our Cause
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
