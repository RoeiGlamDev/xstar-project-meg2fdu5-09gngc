import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubmit: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setSubmitted(true);
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
      <motion.div
        className="text-3xl font-bold text-orange-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join the luxury LRP cosmetics Family
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sign up to receive exclusive offers, the latest news, and luxurious beauty tips tailored just for you.
      </motion.p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="flex-1 p-3 border border-gray-300 rounded-lg mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <motion.div
          type="submit"
          className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {submitted ? 'Thank You!' : 'Subscribe'}
        </motion.button>
      </form>
      <motion.div
        className="absolute inset-0 bg-orange-100 opacity-50 rounded-lg"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeInOut', loop: Infinity, repeatDelay: 1 }}
      />
    </section>
  );
};

export default NewsletterSection;