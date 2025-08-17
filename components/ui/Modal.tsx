import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full transform transition-all"
            initial={{ scale: 0}}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">
                {title}
              </h2>
              <p className="text-gray-700 mb-6">
                {content}
              </p>
              <button
                className="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-500 transition duration-200"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </motion.div>
          <div 
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose}
            role="button"
            aria-label="Close modal"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClose()}
          />
        </div>
      )}
    </>
  );
};

export default Modal;