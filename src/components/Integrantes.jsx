import React from "react";
import { motion } from "framer-motion";
import TiltedCard from "./bits/TiltedCard";
import integrantes from "../data/integrantes.json";

const Integrantes = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="px-4 md:px-16 lg:px-32">
      {/* Título com efeito de gradiente e sombra */}
      <div className="divider mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent 
               bg-clip-text bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-400
               drop-shadow-lg my-12">
          Integrantes da Chapa
        </h2>

      </div>

      {/* Grade responsiva com efeitos de hover e transições */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {integrantes.map((integrante, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            {/* Efeito de brilho de carta Pokémon */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 rounded-lg"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%", opacity: 0.6 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ pointerEvents: "none" }}
            />
            <TiltedCard
              imageSrc={integrante.image}
              altText={`${integrante.name} - ${integrante.album} Album Cover`}
              captionText={`${integrante.name} - ${integrante.album}`}
              containerHeight="200px"
              containerWidth="200px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
              overlayContent={null}
            />
            {/* Texto limpo abaixo da imagem */}
            <div className="mt-4 text-center text-sm font-medium text-gray-800 bg-white bg-opacity-90 
                            rounded-md px-3 py-2 shadow-sm max-w-[200px] w-full border border-gray-200">
              <span className="block">{integrante.name}</span>
              <span className="block text-blue-600 font-semibold">{integrante.album}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Integrantes;
