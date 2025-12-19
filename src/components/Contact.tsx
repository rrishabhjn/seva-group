import React from 'react';
import { Section } from './ui/Section';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <div className="bg-stone-900 text-white" id="contact">
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-orange-500 font-semibold tracking-wide uppercase mb-3">Get Involved</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Help Us Keep the <br /> Kitchen Running.
            </h3>
            <p className="text-stone-300 text-lg mb-10 leading-relaxed">
              Your contribution feeds someone who physically cannot work to feed themselves. With our zero-overhead model, 
              every rupee you donate goes towards purchasing food ingredients.
              <br /><br />
              <span className="text-stone-400 text-base italic">Any amount of donation, however small, will be helpful.</span>
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Visit Us</h4>
                  <p className="text-stone-400">37 Bhajan Nagar, Ajmer Road,<br />Beawar, Rajasthan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Call Us</h4>
                  <a href="tel:+917727003484" className="text-stone-400 hover:text-orange-400 transition-colors">
                    +91-7727003484
                  </a>
                  <p className="text-sm text-stone-500 mt-1">Organizer: Preeti Jain</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <a href="mailto:007rishabhjain@gmail.com" className="text-stone-400 hover:text-orange-400 transition-colors">
                    007rishabhjain@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Donation / QR Code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white text-stone-900 rounded-2xl p-8 shadow-xl"
          >
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-100 rounded-full opacity-50 blur-xl"></div>
              <div className="relative z-10">
                <h4 className="font-bold text-orange-800 text-lg mb-2">Make a Big Impact</h4>
                <p className="text-orange-700">
                  A contribution of just <span className="font-bold">₹500 ($6)</span> helps serve one person for <span className="font-bold">12 days</span>.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Donate via UPI</h3>
            <p className="text-stone-600 mb-8">Scan the QR code to contribute instantly.</p>

            <div className="bg-stone-100 border-2 border-dashed border-stone-300 rounded-xl aspect-square flex items-center justify-center mb-8 relative group">
              <div className="text-center">
                <div className="w-48 h-48 bg-white mx-auto mb-4 p-2 shadow-sm rounded-lg">
                    <img 
                        src="https://i.ibb.co/k6PLCH71/Preeti-Jain-UPI-QR.png" 
                        alt="Preeti Jain UPI QR" 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <p className="text-sm text-stone-500 font-mono">UPI ID: preeti-jain@niyoicici</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                International Donors
                <ExternalLink className="h-4 w-4" />
              </h4>
              <div className="space-y-3">
                <p className="text-sm text-blue-800 mb-2">
                  Please contact us for international bank transfer details:
                </p>
                <a 
                  href="mailto:007rishabhjain@gmail.com" 
                  className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors font-medium"
                >
                  <Mail className="h-4 w-4" />
                  <span>007rishabhjain@gmail.com</span>
                </a>
                <a 
                  href="http://wa.me/+12245661479" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors font-medium"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
