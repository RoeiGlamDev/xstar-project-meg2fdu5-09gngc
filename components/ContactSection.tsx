import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'Inquiry',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '', reason: 'Inquiry' });
      setErrors({});
    }
  };

  return (
    <section className="bg-white text-orange-600 py-10 px-5">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-5">Contact luxury LRP cosmetics</h2>
        <p className="text-center mb-5">We'd love to hear from you! Please reach out for any inquiries.</p>
        
        <form onSubmit={handleSubmit} className="bg-orange-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={mt-1 p-2 border rounded w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}} 
              required 
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className={mt-1 p-2 border rounded w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}} 
              required 
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium">Reason for Contact</label>
            <select 
              name="reason" 
              value={formData.reason} 
              onChange={handleChange} 
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="Inquiry">General Inquiry</option>
              <option value="Feedback">Feedback</option>
              <option value="Collaboration">Collaboration</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className={mt-1 p-2 border rounded w-full ${errors.message ? 'border-red-500' : 'border-gray-300'}} 
              rows={4} 
              required 
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-500 transition duration-300 ease-in-out"
          >
            Send Message
          </button>

          {successMessage && <p className="text-green-600 text-center mt-4">{successMessage}</p>}
        </form>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold">Business Information</h3>
          <p>luxury LRP cosmetics</p>
          <p>123 Luxury St, Glamour City, CA 90210</p>
          <p>Business Hours: Mon-Fri, 9 AM - 6 PM</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;