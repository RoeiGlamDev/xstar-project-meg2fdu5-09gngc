import React from 'react';
import { motion } from 'framer-motion';

interface StatsItem {
  title: string;
  value: number;
  description: string;
}

const statsData: StatsItem[] = [
  {
    title: 'Luxury Products',
    value: 250,
    description: 'Exquisite products crafted with the finest ingredients.',
  },
  {
    title: 'Global Customers',
    value: 15000,
    description: 'Serving beauty enthusiasts across the globe.',
  },
  {
    title: 'Awards Won',
    value: 32,
    description: 'Recognized for excellence in the cosmetics industry.',
  },
  {
    title: 'Years of Experience',
    value: 10,
    description: 'Decade of delivering luxury in every bottle.',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">
          Our Achievements at luxury LRP cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-2">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {stat.value}
                </motion.span>
              </h3>
              <p className="text-lg font-semibold">{stat.title}</p>
              <p className="mt-4 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;