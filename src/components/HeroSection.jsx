// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import LogoMagnet from "./LogoMagnet";
import RotatingText from "./bits/RotatingText";

const HeroSection = () => {
    return (
        <section
            className="
            relative
            min-h-[80vh]
            pt-32 lg:pt-40
            flex items-start justify-center
        "
        >

            <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* TEXTO */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest bg-blue-100 text-blue-700">
                        GRÊMIO ESTUDANTIL
                    </span>

                    <h1 className="">
                        {/* Texto rotativo */}
                        <span className="inline-flex items-center">
                            <RotatingText
                                texts={['Liderança',
                                    'Eventos',
                                    'Projetos',
                                    'Conquistas',
                                    'Inovação',
                                    'Participação',
                                    'Estudantes',
                                    'Futuro']}
                                mainClassName="px-5 py-2 bg-cyan-300 text-black rounded-xl text-xl md:text-3xl lg:text-4xl inline-flex items-center  font-bold"
                                staggerFrom="last"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden inline-flex"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={4000}
                            />

                        </span>

                        {/* Resto do título */}
                        <span className="mt-2 md:mt-0 md:ml-4 text-3xl md:text-3xl lg:text-4xl font-semibold leading-snug text-gray-900">
                            <span className=""> </span> impulsionam o <br />
                            <span className="text-blue-600 font-bold">grêmio estudantil com mais força e participação</span>
                        </span>


                    </h1>

                    <p className="text-base md:text-lg text-gray-600 max-w-lg">
                        O Grêmio Estudantil Horizonte nasce para representar, inovar e fortalecer
                        a voz dos alunos, promovendo participação, união e protagonismo.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <a href="#propostas">
                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md"
                            >
                                Conhecer propostas
                            </motion.button>
                        </a>
                    </div>
                </motion.div>

                {/* LOGO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-center"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full blur-2xl scale-105" />
                        <LogoMagnet />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
