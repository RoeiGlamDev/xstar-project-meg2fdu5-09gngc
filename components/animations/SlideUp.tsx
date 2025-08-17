import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const slideUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: delay },
    },
  };

  return (
    <motion.div
      className="w-full"
      initial="initial"
      animate="animate"
      variants={slideUpAnimation}
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Luxury LRP Cosmetics</h1>
        <p className="text-lg">Elevate Your Beauty with Our Premium Range</p>
      </header>
      
      <SlideUp>
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Our Signature Collection</h2>
          <p className="text-md">Discover a selection of high-end cosmetics crafted for the sophisticated individual.</p>
        </section>
      </SlideUp>

      <SlideUp delay={0.2}>
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Luxurious formulations that nourish and enhance your beauty.</li>
            <li className="mb-2">Ethically sourced ingredients, combining luxury with responsibility.</li>
            <li className="mb-2">Exquisite packaging that reflects the elegance of our brand.</li>
          </ul>
        </section>
      </SlideUp>

      <SlideUp delay={0.4}>
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Experience the Luxury</h2>
          <p className="text-md">Join the luxury LRP cosmetics community and indulge in an unparalleled beauty experience.</p>
        </section>
      </SlideUp>

      <footer className="mt-10 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Luxury LRP Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmetics;