import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Added import for Heroicons
import LogoMagnet from './LogoMagnet';
import TextPressure from './bits/TextPressure';

const Footer = () => {
    // Variants for Framer Motion animations
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <motion.footer
                className="py-16 px-4 relative overflow-hidden border-t border-gray-300"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* New background with radial gradient */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
                    }}
                ></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* About Section with Logo and Candidacy Text */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                    Sobre Nós
                                </h3>
                            </div>
                            <p className="text-gray-700 text-xs leading-relaxed mb-4">
                                Por meio deste site, gostaríamos de formalizar nossa candidatura para a eleição do Grêmio Estudantil 2026 do IFMS Campus Dourados.
                            </p>
                        </motion.div>

                        {/* Links Section */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                Links Úteis
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#home" className="text-blue-600 text-xs hover:text-indigo-400 transition-all duration-300 hover:translate-x-1 inline-block">
                                        <span className="flex items-center">
                                            <ArrowRightIcon className="w-4 h-4 mr-2" /> {/* Replaced custom SVG with Heroicons ArrowRightIcon */}
                                            Início
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#propostas" className="text-blue-600 text-xs hover:text-indigo-400 transition-all duration-300 hover:translate-x-1 inline-block">
                                        <span className="flex items-center">
                                            <ArrowRightIcon className="w-4 h-4 mr-2" /> {/* Replaced custom SVG with Heroicons ArrowRightIcon */}
                                            Propostas
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 text-xs hover:text-indigo-400 transition-all duration-300 hover:translate-x-1 inline-block">
                                        <span className="flex items-center">
                                            <ArrowRightIcon className="w-4 h-4 mr-2" /> {/* Replaced custom SVG with Heroicons ArrowRightIcon */}
                                            Contato
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Social Media Section */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                Siga-nos
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-white text-xs hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-blue-600 p-3 rounded-full shadow-lg"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-white text-xs hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-blue-600 p-3 rounded-full shadow-lg"
                                    aria-label="Twitter"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-white text-xs hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-blue-600 p-3 rounded-full shadow-lg"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.253 14.894 3.762 13.743 3.762 12.446s.49-2.448 1.364-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.875-2.026 1.365-3.323 1.365s-2.448-.49-3.323-1.365c-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-white text-xs hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-blue-600 p-3 rounded-full shadow-lg"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>

                        {/* Logo Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="flex items-center justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-50"></div>
                                <LogoMagnet />
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        variants={itemVariants}
                        className="border-t border-gray-700 mt-12 pt-8 text-center"
                    >
                        <p className="text-gray-400 text-xs">
                            &copy; 2023 Horizonte. Todos os direitos reservados. Desenvolvido com ❤️ por{' '}
                            <a
                                href="https://instagram.com/jaoo.predo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-purple-400 transition-colors duration-300"
                            >
                                João Pedro Cristaldo Ferraz
                            </a>
                            .
                        </p>
                    </motion.div>
                </div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <TextPressure
                        text="HORIZONTE"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#000000"
                        strokeColor="#ff0000"
                        minFontSize={12}
                    />
                </div>
            </motion.footer>
        </>
    );
};

export default Footer;
