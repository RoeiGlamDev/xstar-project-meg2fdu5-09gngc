import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Basic Glow Package',
    price: '$50',
    features: ['Makeup consultation', 'Basic skincare routine', 'Luxury LRP cosmetics product sample'],
  },
  {
    title: 'Luxury Radiance Package',
    price: '$120',
    features: ['Full makeup application', 'Personalized skincare plan', 'Exclusive luxury LRP cosmetics gift set'],
  },
  {
    title: 'Premium Elegance Package',
    price: '$200',
    features: ['Bridal or special event makeup', 'Extended skincare consultation', 'Luxury LRP cosmetics VIP membership'],
  },
];

const FAQ = [
  {
    question: 'What makes luxury LRP cosmetics different?',
    answer: 'Luxury LRP cosmetics focuses on premium quality ingredients and bespoke beauty solutions tailored to your unique needs.',
  },
  {
    question: 'How can I book a service?',
    answer: 'You can easily book a service through our website by selecting your desired package and scheduling your appointment.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'Absolutely! Luxury LRP cosmetics is committed to ethical practices and all our products are cruelty-free.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.div
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pricing for luxury LRP cosmetics
      </motion.h1>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>
            <p className="text-xl font-bold mb-4">{option.price}</p>
            <h3 className="font-medium mb-2">Includes:</h3>
            <ul className="list-disc ml-5">
              {option.features.map((feature, idx) => (
                <li key={idx} className="mb-1">{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-3xl font-bold mt-12 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {FAQ.map((item, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 p-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-semibold">{item.question}</h3>
            <p>{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;