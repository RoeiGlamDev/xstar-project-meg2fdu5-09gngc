import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Premium Formulations',
    description: 'Discover our luxurious, high-quality formulations infused with the finest ingredients for radiant skin.',
    icon: <i className="fas fa-star text-orange-500 text-3xl"></i>,
  },
  {
    title: 'Elegant Packaging',
    description: 'Our products come in beautifully designed packaging that reflects the luxury of luxury LRP cosmetics.',
    icon: <i className="fas fa-gift text-orange-500 text-3xl"></i>,
  },
  {
    title: 'Exceptional Customer Experience',
    description: 'We prioritize your satisfaction with personalized services and a seamless shopping experience.',
    icon: <i className="fas fa-comments text-orange-500 text-3xl"></i>,
  },
  {
    title: 'Sustainability Commitment',
    description: 'We are committed to sustainable practices, ensuring our products are eco-friendly and responsibly sourced.',
    icon: <i className="fas fa-leaf text-orange-500 text-3xl"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">Experience the Luxury of luxury LRP cosmetics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold text-orange-500 mt-4">{feature.title}</h3>
                <p className="text-gray-700 mt-2">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;