import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-orange-200">
      <motion.div
        className="absolute inset-0 bg-[url('/path/to/luxury-background.jpg')] bg-cover bg-center opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <div className="relative z-10 text-center">
        <motion.div
          className="text-6xl font-bold text-orange-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          luxury LRP cosmetics
        </motion.h1>
        <motion.div
          className="mt-4 text-lg text-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Indulge in our luxurious range of cosmetics designed to enhance your natural beauty with elegance and sophistication.
        </motion.p>
        <div className="mt-6">
          <motion.div
            className="px-6 py-3 text-white bg-orange-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Collection
          </motion.button>
          <motion.div
            className="ml-4 px-6 py-3 text-orange-500 bg-white border-2 border-orange-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Luxury Services
          </motion.button>
        </div>
      </div>
      <div className="absolute bottom-10 text-center z-10">
        <p className="text-sm text-gray-600">
          Trusted by beauty enthusiasts and professionals alike.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;