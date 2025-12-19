import React from 'react';
import { Section } from './ui/Section';
import { Users, Utensils, Calendar, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  {
    id: 1,
    name: 'Daily Meals Served',
    value: '50+',
    icon: Utensils,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    id: 2,
    name: 'Families Supported',
    value: '150+',
    icon: Users,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 3,
    name: 'Years of Service',
    value: '5+',
    icon: Calendar,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 4,
    name: 'Zero Overhead',
    value: '100%',
    icon: Heart,
    color: 'bg-red-100 text-red-600',
  },
];

export function Stats() {
  return (
    <div className="bg-white border-b border-stone-100" id="stats">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-stone-50 transition-colors"
            >
              <div className={`p-4 rounded-full mb-4 ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-stone-900 mb-2">{stat.value}</div>
              <div className="text-stone-600 font-medium">{stat.name}</div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
