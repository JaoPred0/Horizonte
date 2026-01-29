import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const teamMembers = [
  {
    name: 'LUIZ PRESIDENTE',
    role: 'Presidente',
    image: './integrantes/LUIZ-PAULO.jpg',
  },
  {
    name: 'PEDRO ISSAMU',
    role: 'Vice Presidente',
    image: './integrantes/PEDRO-ISSAMU.jpg',
  },
  {
    name: 'EMILLY RIBEIRO.jpg',
    role: 'Secretária Geral',
    image: './integrantes/EMILLY-RIBEIRO.jpg',
  },
  {
    name: 'VITÓRIA ORIS',
    role: '1° Secretária',
    image: './integrantes/VITÓRIA-ORIS.jpg',
  }
];

const IntegrantesHome = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decorativo muito sutil - apenas para adicionar profundidade */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
              Equipe Horizonte
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
          >
            Mentes no Horizonte
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed"
          >
            Conheça os cargos da equipe Horizonte.
          </motion.p>
        </motion.div>

        {/* Team Grid - Quadrados com linhas decorativas */}
        <div ref={gridRef} className="relative mb-16">
          {/* Linhas decorativas - Desktop (4 colunas) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Linhas verticais */}
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
            <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>

            {/* Linhas horizontais */}
            <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
            <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
            <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          </div>

          {/* Linhas decorativas - Mobile (2 colunas) */}
          <div className="lg:hidden absolute inset-0 pointer-events-none">
            {/* Linha vertical central */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>

            {/* Linha horizontal central */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={
                  isInView
                    ? {
                      opacity: 1,
                      y: 0,
                      scale: hoveredIndex === index ? 1.08 : 1
                    }
                    : {}
                }
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Card Quadrado */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900/40 to-blue-950/40 backdrop-blur-sm border border-blue-400/20 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-400/40">
                  {/* Imagem */}
                  <div className="absolute inset-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010f3f] via-[#010f3f]/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                  </div>

                  {/* Info overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transform transition-transform duration-500">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-300 text-sm font-medium uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>
                  {/* Brilho no hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA - Ver Todos os IntegrantesHome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/IntegrantesHome"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group"
          >
            <span>Conhecer Toda a Equipe</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <p className="text-blue-300/60 text-sm mt-4">
            Veja todos os membros do time Horizonte
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default IntegrantesHome;