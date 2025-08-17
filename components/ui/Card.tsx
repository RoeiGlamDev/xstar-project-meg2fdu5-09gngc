import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-orange-500 opacity-40 rounded-t-lg"></div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-orange-600">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
      <div className="p-4">
        <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default Card;