import React from 'react';
import ScrollStack, { ScrollStackItem } from './Scrollstack';
import { motion } from 'framer-motion';

const propostas = [
  {
    numero: "01",
    titulo: "Transparência Total",
    descricao: "Decisões abertas e comunicação direta com todos os estudantes. Você terá voz ativa em cada projeto.",
    cor: "from-blue-500 to-cyan-500",
    corBg: "bg-gradient-to-br from-blue-900/30 to-cyan-900/30",
    corBorda: "border-blue-400/20",
    icon: "👁️",
    detalhes: ["Reuniões abertas mensais", "Portal de votações online", "Feedback direto e rápido"]
  },
  {
    numero: "02",
    titulo: "Eventos Inovadores",
    descricao: "Festas, competições e atividades culturais que transformam a experiência escolar em algo inesquecível.",
    cor: "from-purple-500 to-pink-500",
    corBg: "bg-gradient-to-br from-purple-900/30 to-pink-900/30",
    corBorda: "border-purple-400/20",
    icon: "🎉",
    detalhes: ["Festas temáticas bimestrais", "Campeonatos esportivos", "Semana cultural integrada"]
  },
  {
    numero: "03",
    titulo: "Tecnologia & Educação",
    descricao: "Plataforma digital integrada para estudos, organização e comunicação eficiente entre alunos.",
    cor: "from-indigo-500 to-blue-500",
    corBg: "bg-gradient-to-br from-indigo-900/30 to-blue-900/30",
    corBorda: "border-indigo-400/20",
    icon: "💻",
    detalhes: ["App exclusivo da escola", "Grupos de estudo online", "Agenda digital sincronizada"]
  },
  {
    numero: "04",
    titulo: "Bem-Estar Estudantil",
    descricao: "Programas de apoio psicológico, espaços de relaxamento e iniciativas para saúde mental dos alunos.",
    cor: "from-cyan-500 to-teal-500",
    corBg: "bg-gradient-to-br from-cyan-900/30 to-teal-900/30",
    corBorda: "border-cyan-400/20",
    icon: "🌟",
    detalhes: ["Sala de descompressão", "Apoio psicológico gratuito", "Programas anti-stress"]
  }
];

export const PropostasHome = () => {
  return (
    <div className="relative">
      {/* Header fixo - sempre visível */}
      <div className="sticky top-0 z-[60] py-6 md:py-10 lg:py-12backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs md:text-sm font-medium backdrop-blur-sm inline-block mb-3 md:mb-4">
              ✨ Nossas Propostas
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-2">
              Propostas
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-blue-200/70 max-w-2xl mx-auto">
              Transformando ideias em ações concretas para melhorar nossa escola
            </p>
          </motion.div>
        </div>
      </div>

      {/* ScrollStack Container */}
      <ScrollStack
        useWindowScroll={true}
        itemDistance={150}
        itemScale={0.05}
        itemStackDistance={40}
        stackPosition="30%"
        scaleEndPosition="20%"
        baseScale={0.85}
      >
        {propostas.map((proposta, index) => (
          <ScrollStackItem
            key={proposta.numero}
            itemClassName={`${proposta.corBg} backdrop-blur-xl border ${proposta.corBorda} shadow-2xl hover:shadow-3xl transition-shadow duration-300`}
          >
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[40px] pointer-events-none" />
            
            {/* Partículas decorativas */}
            <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl opacity-30" />

            {/* Número grande no fundo */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 text-6xl sm:text-8xl md:text-9xl lg:text-[150px] font-bold text-white/[0.03] select-none leading-none pointer-events-none">
              {proposta.numero}
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-3 md:space-y-4">
                {/* Badge com ícone e número */}
                <div className="inline-flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2.5 rounded-2xl border border-white/10">
                  <span className="text-2xl sm:text-3xl md:text-4xl">{proposta.icon}</span>
                  <div className="flex flex-col">
                    <span className={`text-xs md:text-sm font-bold bg-gradient-to-r ${proposta.cor} bg-clip-text text-transparent`}>
                      Proposta {proposta.numero}
                    </span>
                    <span className="text-[10px] md:text-xs text-white/50">
                      {index === 0 ? 'Essencial' : index === 1 ? 'Popular' : index === 2 ? 'Inovador' : 'Vital'}
                    </span>
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {proposta.titulo}
                </h3>

                {/* Descrição */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100/80 leading-relaxed max-w-3xl">
                  {proposta.descricao}
                </p>

                {/* Detalhes com bullets */}
                <div className="hidden sm:flex flex-wrap gap-2 pt-2">
                  {proposta.detalhes.map((detalhe, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${proposta.cor}`} />
                      <span className="text-xs md:text-sm text-white/70">{detalhe}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer com linha decorativa e badge */}
              <div className="flex items-center justify-between mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/10">
                <div className={`h-1 w-16 md:w-24 bg-gradient-to-r ${proposta.cor} rounded-full shadow-lg`} 
                     style={{
                       boxShadow: `0 0 20px rgba(${index === 0 ? '59, 130, 246' : index === 1 ? '168, 85, 247' : index === 2 ? '99, 102, 241' : '6, 182, 212'}, 0.5)`
                     }}
                />
                <span className="text-xs md:text-sm text-white/40 font-medium">
                  Prioridade {index + 1}
                </span>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      {/* Botão Ver Todas as Propostas */}
      <div className="relative z-50 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Card wrapper do botão */}
          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Quer saber mais?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-blue-100/70 mb-6 md:mb-8 max-w-2xl mx-auto">
              Explore todas as nossas propostas detalhadas e veja como vamos transformar nossa escola juntos
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl font-bold text-white text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Efeito de brilho animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative z-10">Ver Todas as Propostas</span>
              
              <svg 
                className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>

            {/* Estatísticas rápidas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-10">
              {[
                { label: 'Propostas', value: '12+' },
                { label: 'Categorias', value: '4' },
                { label: 'Benefícios', value: '50+' },
                { label: 'Impacto', value: '100%' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PropostasHome;