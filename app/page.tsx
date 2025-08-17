import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <motion.div
        className="text-6xl font-bold text-orange-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="mt-4 text-2xl text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Elevate Your Beauty Experience
      </motion.p>
      <motion.div
        className="mt-8 px-6 py-2 bg-orange-600 text-white font-semibold rounded shadow-lg hover:bg-orange-500 transition duration-300"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-20 bg-orange-100">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-5xl font-bold text-orange-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Why Choose luxury LRP cosmetics?
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-semibold text-orange-600">Premium Ingredients</h3>
            <p className="mt-2 text-gray-700">
              Our cosmetics are crafted with the highest quality ingredients that nourish and enhance your skin.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-semibold text-orange-600">Luxurious Packaging</h3>
            <p className="mt-2 text-gray-700">
              Each product is elegantly packaged to reflect the luxury you deserve.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-semibold text-orange-600">Sustainable Practices</h3>
            <p className="mt-2 text-gray-700">
              We are committed to environmentally friendly practices in all aspects of our production.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const LuxuryLRPCosmeticsPage: React.FC = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <FeaturesSection />
      <footer className="py-10 bg-white text-center">
        <p className="text-gray-700">&copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmeticsPage;