import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sophia Williams",
    photo: "/images/testimonials/sophia.jpg",
    review: "Luxury LRP cosmetics transformed my skincare routine! The products are so rich and nourishing, my skin has never felt better. Highly recommend!",
    rating: 5
  },
  {
    name: "Olivia Johnson",
    photo: "/images/testimonials/olivia.jpg",
    review: "I absolutely adore the luxury LRP lipsticks. The colors are vibrant and the formula is long-lasting. It feels like a treat every time I apply it!",
    rating: 5
  },
  {
    name: "Isabella Brown",
    photo: "/images/testimonials/isabella.jpg",
    review: "The quality of luxury LRP cosmetics is unmatched. Their foundation blends perfectly and provides a flawless finish. I will never go back to my old brand!",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={testimonial.photo} alt={testimonial.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">{testimonial.name}</h3>
              <p className="text-gray-700 my-2">{testimonial.review}</p>
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.086 1.12-6.535-4.49-4.058 6.5-.943L10 1l2.248 5.65 6.5.943-4.49 4.058 1.12 6.535z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;