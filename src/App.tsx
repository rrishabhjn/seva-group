/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Stats } from './components/Stats';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-orange-200 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

