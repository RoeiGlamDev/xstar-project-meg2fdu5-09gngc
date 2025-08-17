import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="transition-opacity duration-500 ease-in-out"
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-orange-600 mb-4">Welcome to luxury LRP cosmetics</h1>
      <FadeIn>
        <p className="text-xl text-gray-700 mb-6 text-center">
          Discover our exquisite range of high-end cosmetics designed to elevate your beauty routine. 
          At luxury LRP cosmetics, we believe in luxury, quality, and elegance.
        </p>
      </FadeIn>
      <FadeIn>
        <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out">
          Shop Now
        </button>
      </FadeIn>
      <FadeIn>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-orange-600">Luxury Lipstick</h2>
            <p className="text-gray-600">Indulge in our luxurious lipstick collection for a perfect pout.</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-orange-600">Silk Foundation</h2>
            <p className="text-gray-600">Experience the silky smooth finish with our premium foundation.</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-orange-600">Elegant Eyeshadow</h2>
            <p className="text-gray-600">Transform your look with our stunning eyeshadow palettes.</p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default LuxuryLRPCosmetics;