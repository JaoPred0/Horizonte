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
    name: 'EMILLY RIBEIRO',
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
  const isInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decorativo simplificado */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Animações simplificadas */}
        <div className="text-center mb-16 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
              Equipe Horizonte
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Mentes no Horizonte
          </h1>

          <p className="text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            Conheça os cargos da equipe Horizonte.
          </p>
        </div>

        {/* Team Grid - Quadrados com linhas decorativas */}
        <div ref={gridRef} className="relative mb-16">
          {/* Linhas decorativas - Desktop (4 colunas) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Linhas verticais */}
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
            <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>

            {/* Linhas horizontais */}
            <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
            <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
            <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
          </div>

          {/* Linhas decorativas - Mobile (2 colunas) */}
          <div className="lg:hidden absolute inset-0 pointer-events-none">
            {/* Linha vertical central */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>

            {/* Linha horizontal central */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
                style={{
                  transform: hoveredIndex === index ? 'scale(1.03)' : 'scale(1)',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Card Quadrado */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900/40 to-blue-950/40 backdrop-blur-sm border border-blue-400/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/30">
                  {/* Imagem */}
                  <div className="absolute inset-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010f3f] via-[#010f3f]/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>

                  {/* Info overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-blue-300 text-sm font-medium uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Brilho sutil no hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA - Ver Todos os Integrantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <a
            href="/integrantes"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-200 hover:scale-[1.02] group"
          >
            <span>Conhecer Toda a Equipe</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <p className="text-blue-300/60 text-sm mt-4">
            Veja todos os membros do time Horizonte
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrantesHome;