import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';

// Dummy data for participants (integrantes)
const participantes = [
  {
    id: 1,
    name: 'João Silva',
    role: 'Presidente',
    description: 'Responsável pela liderança e coordenação geral.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    role: 'Vice-Presidente',
    description: 'Auxilia na gestão e organização de eventos.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Carlos Santos',
    role: 'Secretário',
    description: 'Cuida da documentação e comunicação interna.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Ana Costa',
    role: 'Tesoureira',
    description: 'Gerencia as finanças e orçamento.',
    image: 'https://via.placeholder.com/150',
  },
  // Add more participants as needed
];

const IntegrantesTest = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: containerRef.current,
      content: containerRef.current,
      smooth: true,
      lerp: 0.1, // Adjust for smoothness
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto bg-gray-100"
      style={{ height: '100vh' }}
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Participantes
        </h1>
        <div className="space-y-8">
          {participantes.map((participante, index) => (
            <motion.div
              key={participante.id}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={participante.image}
                alt={participante.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {participante.name}
                </h2>
                <p className="text-lg text-blue-600 font-medium">
                  {participante.role}
                </p>
                <p className="text-gray-600 mt-2">
                  {participante.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrantesTest;
