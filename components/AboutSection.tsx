import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Carter',
    title: 'Founder & CEO',
    bio: 'With over a decade of experience in the cosmetics industry, Sophia leads luxury LRP cosmetics with a vision for innovation and luxury.',
    image: '/images/team/sophia.jpg',
  },
  {
    name: 'Daniel Kim',
    title: 'Creative Director',
    bio: 'An award-winning designer, Daniel brings a unique flair to our luxury product lines, ensuring each item reflects our brand’s high standards.',
    image: '/images/team/daniel.jpg',
  },
  {
    name: 'Isabella Rossi',
    title: 'Head of Marketing',
    bio: 'Isabella’s expertise in luxury brand marketing helps us connect with our clientele, showcasing the elegance and sophistication of luxury LRP cosmetics.',
    image: '/images/team/isabella.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <motion.div
        className="container mx-auto text-center px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-orange-600 mb-6">About luxury LRP cosmetics</h2>
        <p className="text-lg text-gray-700 mb-8">
          At luxury LRP cosmetics, we believe that beauty transcends the ordinary. Founded with a passion for exquisite formulations and elegant design, our mission is to provide high-end cosmetics that empower individuals to express their unique beauty.
        </p>
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-8">
          Our mission is to create luxurious, high-performance cosmetics that inspire confidence and elevate self-expression. We strive to be at the forefront of innovation, using the finest ingredients to craft products that are as effective as they are indulgent.
        </p>
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-orange-600">{member.name}</h4>
                <h5 className="text-md text-gray-500">{member.title}</h5>
                <p className="text-gray-700 mt-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;