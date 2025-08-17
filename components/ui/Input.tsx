import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6">
      <label className="block text-white text-lg mb-2" htmlFor={label}>
        {label}
      </label>
      <motion.div
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={border-2 border-white rounded-lg px-4 py-2 w-full transition-all duration-200 ease-in-out ${isFocused ? 'border-orange-500' : 'border-opacity-50'} bg-opacity-10 bg-white placeholder-white focus:outline-none}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      <p className="text-white text-sm mt-1 opacity-70">
        Experience the elegance of luxury LRP cosmetics with quality ingredients and sophisticated formulations.
      </p>
    </div>
  );
};

export default Input;