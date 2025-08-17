import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const baseStyle = 'px-6 py-3 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50';
  const primaryStyle = 'bg-orange-500 text-white hover:bg-orange-600';
  const secondaryStyle = 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white';

  const buttonStyle = variant === 'primary' ? ${baseStyle} ${primaryStyle} : ${baseStyle} ${secondaryStyle};

  return (
    <motion.div
      className="buttonStyle"
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      aria-label={Button for luxury LRP cosmetics - ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;