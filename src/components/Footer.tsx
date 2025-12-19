import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-orange-600 fill-current" />
          <span className="font-bold text-stone-200 text-lg">Seva Group</span>
        </div>
        
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Seva Group. All rights reserved.</p>
          <p className="mt-1">Designed with love for the community.</p>
        </div>
      </div>
    </footer>
  );
}
