import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-4xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-orange-100 p-8 rounded-lg shadow-lg">
        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </motion.div>
        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={4}
          ></textarea>
        </motion.div>
        <motion.div
          type="submit"
          className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-orange-600">Our Location</h2>
        <p className="text-gray-700">123 Luxury Lane, Glamour City, LC 45678</p>
        <h2 className="text-2xl font-semibold text-orange-600 mt-4">Business Hours</h2>
        <p className="text-gray-700">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-gray-700">Saturday: 10 AM - 4 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;