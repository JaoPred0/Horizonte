import ScrollStack, { ScrollStackItem } from './Scrollstack';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const propostas = [
  {
    numero: "01",
    titulo: "Esporte, Cultura e Lazer",
    descricao: "Manutenção e reposição de materiais esportivos para garantir segurança, qualidade nas aulas, incentivo à participação dos alunos e melhor aproveitamento das atividades físicas.",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "🏀",
    detalhes: ["Manutenção materiais esportivos", "Melhor organização do uso", "Criação de um espaço de estudos"]
  },
  {
    numero: "02",
    titulo: "SocioCultural",
    descricao: "Dinâmicas e eventos culturais planejados com participação dos estudantes, promovendo integração, representatividade, criatividade e um ambiente escolar mais acolhedor, participativo e divertido.",
    cor: "from-purple-500 to-pink-500",
    corGlow: "rgba(168, 85, 247, 0.4)",
    icon: "🎭",
    detalhes: ["Dinâmicas de integração", "Ampliação dos intervalos culturais", "Organização de eventos antecipadas"]
  },
  {
    numero: "03",
    titulo: "Saúde & Meio ambiente",
    descricao: "Organização, sustentabilidade e valorização dos projetos escolares, promovendo higiene adequada, consciência ambiental e reconhecimento dos estudantes por meio de ações educativas e certificações.",
    cor: "from-indigo-500 to-blue-500",
    corGlow: "rgba(99, 102, 241, 0.4)",
    icon: "🌿",
    detalhes: ["Organização dos produtos de higiene", "Semana do Meio Ambiente", "Intervalos de feiras para o agro"]
  },
  {
    numero: "04",
    titulo: "Relações Educacionais",
    descricao: "Fortalecer clubes estudantis, ampliar participação nos turnos, criar canais seguros de comunicação e garantir mais experiências práticas, promovendo integração, representatividade e aprendizado além da sala de aula.",
    cor: "from-cyan-500 to-teal-500",
    corGlow: "rgba(6, 182, 212, 0.4)",
    icon: "🤝",
    detalhes: ["Apresentar os clubes aos calouros", "Espaço de denúncias anônimas", "Visitas técnicas para os cursos de informática"]
  }
];

export const PropostasHome = () => {
  return (
    <div className="relative overflow-hidden">

      {/* Header minimalista - ESPAÇAMENTO REDUZIDO */}
      <div className="relative z-[60] pb-4 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold text-blue-400 tracking-wide uppercase mb-2">
              Nossas Propostas
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Transformação Real
              </span>
            </h2>

            <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
              Alguns pilares para melhorar nossa escola
            </p>
          </motion.div>
        </div>
      </div>

      {/* ScrollStack OTIMIZADO */}
      <div className="relative z-10">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={80}
          itemScale={0.05}
          itemStackDistance={15}
          stackPosition="30%"
          scaleEndPosition="20%"
          baseScale={0.96}
        >
          {propostas.map((proposta, index) => (
            <ScrollStackItem
              key={proposta.numero}
              itemClassName="group relative w-full"
            >
              {/* Card OTIMIZADO para mobile */}
              <div
                className="relative backdrop-blur-xl bg-white/[0.02] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 w-full"
                style={{
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px -20px ${proposta.corGlow}`,
                  willChange: 'transform'
                }}
              >

                {/* Glow sutil - SIMPLIFICADO */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Partícula - SEM animação em mobile */}
                <div
                  className={`hidden sm:block absolute top-6 right-6 w-24 h-24 bg-gradient-to-br ${proposta.cor} rounded-full blur-3xl opacity-20`}
                />

                {/* Conteúdo compacto */}
                <div className="relative z-10 p-5 sm:p-6 md:p-8">

                  {/* Header com ícone e número */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl sm:text-5xl">
                      {proposta.icon}
                    </div>

                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${proposta.cor} flex items-center justify-center text-white font-bold shadow-lg text-sm sm:text-base`}
                      style={{ boxShadow: `0 8px 20px ${proposta.corGlow}` }}>
                      {proposta.numero}
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                    {proposta.titulo}
                  </h3>

                  {/* Linha - SEM animação */}
                  <div className={`w-12 sm:w-16 h-1 bg-gradient-to-r ${proposta.cor} rounded-full mb-3`} />

                  {/* Descrição */}
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-3 leading-relaxed">
                    {proposta.descricao}
                  </p>

                  {/* Detalhes - SIMPLIFICADOS */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {proposta.detalhes.map((detalhe, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-white/5 backdrop-blur-sm rounded-lg text-xs text-slate-400 border border-white/5"
                      >
                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${proposta.cor}`} />
                        {detalhe}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer discreto */}
                <div className="relative z-10 px-5 sm:px-6 md:px-8 pb-3 sm:pb-4 flex items-center justify-between border-t border-white/5 pt-3">
                  <span className="text-[10px] sm:text-xs text-slate-600 font-medium tracking-wider">
                    PRIORIDADE {index + 1}
                  </span>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${proposta.cor} animate-pulse`} />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* CTA horizontal - OTIMIZADO */}
      <div className="relative z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative backdrop-blur-xl bg-white/[0.02] rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

            {/* Efeito de fundo - SEM animação em mobile */}
            <div className="absolute inset-0">
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-50" />
            </div>

            {/* Conteúdo horizontal */}
            <div className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">

              {/* Texto lado esquerdo */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 leading-tight">
                  Quer conhecer{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    todas as propostas?
                  </span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                  Explore nosso plano completo com 12+ propostas detalhadas
                </p>
              </div>

              {/* Botão lado direito */}
              <Link to="/propostas">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-white shadow-lg hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] transition-all duration-300"
                >
                  <span className="text-xs sm:text-sm md:text-base">Ver Propostas</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </Link>
            </div>

            {/* Linha decorativa no fundo */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PropostasHome;