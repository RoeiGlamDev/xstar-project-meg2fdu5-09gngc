import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
    links: { name: string; url: string }[];
    companyInfo: {
        address: string;
        phone: string;
        email: string;
    };
    socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ links, companyInfo, socialMedia }) => {
    return (
        <footer className="bg-white text-orange-600 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-5">
                <motion.div 
                    className="mb-6 md:mb-0" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold">luxury LRP cosmetics</h2>
                    <p className="mt-2">Elevating beauty with luxury and elegance.</p>
                    <p className="mt-1">{companyInfo.address}</p>
                    <p className="mt-1">{companyInfo.phone}</p>
                    <p className="mt-1">{companyInfo.email}</p>
                </motion.div>
                
                <motion.div 
                    className="mb-6 md:mb-0" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="mt-2">
                        {links.map((link, index) => (
                            <li key={index} className="my-1">
                                <a 
                                    href={link.url} 
                                    className="text-orange-600 hover:underline transition duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
                
                <motion.div 
                    className="mb-6 md:mb-0" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-xl font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        {socialMedia.map((media, index) => (
                            <a 
                                key={index} 
                                href={media.url} 
                                className="text-orange-600 hover:scale-105 transition-transform duration-300"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {media.platform}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
            <div className="text-center mt-10 border-t border-orange-200 pt-5">
                <p className="text-sm">© {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;