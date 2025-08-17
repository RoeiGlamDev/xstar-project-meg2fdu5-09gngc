import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essential Glow',
    price: '$99',
    features: [
      'Skin Analysis',
      'Personalized Skincare Consultation',
      'Luxury Sample Kit',
      'Exclusive Discounts on Future Purchases'
    ]
  },
  {
    name: 'Radiant Luxe',
    price: '$199',
    features: [
      'All Essential Glow Features',
      'Custom Makeup Application',
      'Beauty Masterclass Access',
      'VIP Customer Support'
    ]
  },
  {
    name: 'Ultimate Elegance',
    price: '$299',
    features: [
      'All Radiant Luxe Features',
      'Personal Beauty Concierge',
      'Monthly Product Delivery',
      'Exclusive Access to New Launches'
    ]
  }
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          className="text-4xl font-bold text-orange-600 mb-10" 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}>
          Luxury LRP Cosmetics Pricing
        </motion.h2>
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div 
              key={index} 
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" 
              initial={{ scale: 1 }} 
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}>
              <h3 className="text-2xl font-semibold text-orange-600">{tier.name}</h3>
              <p className="text-xl font-bold text-gray-800 mt-2">{tier.price}</p>
              <ul className="mt-4 text-left">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 mb-2">
                    • {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#"
                className="mt-6 inline-block bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700 transition duration-300">
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;