import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function Mission() {
  return (
    <div className="bg-stone-50" id="mission">
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-orange-600 font-semibold tracking-wide uppercase mb-3">Our Mission</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              Feeding the Hungry, <br />
              <span className="text-stone-600">With Dignity and Love.</span>
            </h3>
            
            <div className="prose prose-lg text-stone-600 mb-8">
              <p className="mb-4">
                The Seva Group initiative began in 2020, during the height of the Covid pandemic. 
                What started as a small effort by <strong>Preeti Jain and her friends</strong> to help those who lost their livelihoods has grown into 
                a daily commitment to the community of Beawar.
              </p>
              <p>
                We focus on the elderly poor and blue-collar workers who often go unnoticed. 
                Our model is simple but powerful: <strong>Zero Overhead.</strong>
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Local caterers provide food at-cost",
                "100% of donations go directly to meals",
                "Daily distribution in Beawar",
                "Community-driven and volunteer-led"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-200 rounded-2xl transform rotate-2 opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop"
                alt="Volunteers distributing food"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg italic">
                  "Service to others is the rent you pay for your room here on earth."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
