import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* About Section */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <div className="flex items-center mb-6">
                                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                    Sobre Nós
                                </h3>
                            </div>
                            <p className="text-gray-700 text-xs leading-relaxed mb-4">
                                Por meio deste site, gostaríamos de formalizar nossa candidatura para a eleição do Grêmio Estudantil 2026 do IFMS Campus Dourados.
                            </p>
                        </motion.div>

                        {/* Links Section - Centered */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                Links Úteis
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#home" className="text-blue-600 text-xs hover:text-indigo-400 transition-all duration-300 hover:translate-x-1 inline-block">
                                        <span className="flex items-center">
                                            <ArrowRightIcon className="w-4 h-4 mr-2" />
                                            Início
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#propostas" className="text-blue-600 text-xs hover:text-indigo-400 transition-all duration-300 hover:translate-x-1 inline-block">
                                        <span className="flex items-center">
                                            <ArrowRightIcon className="w-4 h-4 mr-2" />
                                            Propostas
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 text-xs hover:text-indigo-400 transition-all duration-300 hover:translate-x-1 inline-block">
                                        <span className="flex items-center">
                                            <ArrowRightIcon className="w-4 h-4 mr-2" />
                                            Contato
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Logo Section - To the side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="flex items-center justify-end"
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
                            &copy; 2023 Horizonte. Todos os direitos reservados. Desenvolvido com ❤️ por{" "}
                            <a
                                href="https://www.instagram.com/jaoo.predo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition underline"
                            >
                                João Pedro Cristaldo Ferraz
                            </a>.
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
