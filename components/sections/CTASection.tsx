import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Elevate Your Beauty with Luxury LRP Cosmetics", 
  description = "Discover the art of luxury with our exclusive range of cosmetics. Experience the brilliance and elegance that only luxury LRP cosmetics can offer. Your skin deserves the best.", 
  buttonText = "Shop Now", 
  buttonLink = "/shop" 
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-12">
      <motion.div 
        className="text-4xl font-bold text-orange-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="text-lg text-gray-700 text-center mb-8 max-w-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <motion.div 
        href={buttonLink}
        className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;