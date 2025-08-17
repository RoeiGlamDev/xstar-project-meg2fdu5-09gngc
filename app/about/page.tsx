import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Johnson',
    position: 'Founder & CEO',
    bio: 'With over 15 years in the cosmetics industry, Sophia has dedicated her career to creating luxurious products that enhance beauty.',
    imageUrl: '/images/sophia.jpg',
  },
  {
    name: 'Michael Brown',
    position: 'Head of Product Development',
    bio: 'Michael leads our innovative product development team, ensuring that every item meets the highest standards of luxury and effectiveness.',
    imageUrl: '/images/michael.jpg',
  },
  {
    name: 'Emily Davis',
    position: 'Marketing Director',
    bio: 'Emily crafts our brand narrative, bringing the essence of luxury LRP cosmetics to life through captivating campaigns.',
    imageUrl: '/images/emily.jpg',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.div
        className="text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-lg mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        At luxury LRP cosmetics, we believe that beauty is an experience. Our journey began with a vision to redefine luxury in the cosmetics industry, crafting products that not only enhance your beauty but also provide an indulgent experience.
      </motion.p>
      <motion.div
        className="text-3xl font-semibold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Our History
      </motion.h2>
      <motion.div
        className="text-lg mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
      >
        Founded in 2020, luxury LRP cosmetics was born from a passion for high-quality cosmetics. Our commitment to excellence has made us a leader in the industry, with a focus on sustainable practices and luxurious formulations.
      </motion.p>
      <motion.div
        className="text-3xl font-semibold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >
        Our Values
      </motion.h2>
      <motion.div
        className="text-lg mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        We stand for quality, luxury, and sustainability. Every product is a testament to our dedication to providing the best for our customers while caring for our planet.
      </motion.p>
      <motion.div
        className="text-3xl font-semibold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7 }}
      >
        Meet Our Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            className="bg-white border border-orange-600 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={member.imageUrl} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-md text-center text-orange-500">{member.position}</p>
            <p className="text-sm text-center mt-2">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;