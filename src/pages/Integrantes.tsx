import ScrollStack, { ScrollStackItem } from '@/components/Scrollstack';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const propostas = [
  {
    numero: "01",
    titulo: "Presidente",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "👨‍💼",
    responsavel: {
      nome: "LUIZ PAULO",
      foto: "./integrantes/LUIZ-PAULO.jpg",
      contato: {
        instagram: "",
      }
    }
  },
  {
    numero: "02",
    titulo: "Vice Presidente",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "👨‍",
    responsavel: {
      nome: "PEDRO ISSAMU",
      foto: "./integrantes/PEDRO-ISSAMU.jpg",
      contato: {
        instagram: "",
      }
    },
  },
  {
    numero: "03",
    titulo: "Secretária Geral",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "👩‍💼",
    responsavel: {
      nome: "EMILLY RIBEIRO",
      foto: "./integrantes/EMILLY-RIBEIRO.jpg",
      contato: {
        instagram: "",
      }
    }
  },
  {
    numero: "04",
    titulo: "1° Secretária",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "👩‍💼",
    responsavel: {
      nome: "VITÓRIA ORIS",
      foto: "./integrantes/VITÓRIA-ORIS.jpg",
      contato: {
        instagram: "",
      }
    }
  },
  {
    numero: "05",
    titulo: "Tesoureiro",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "💰",
    responsavel: {
      nome: "IAN HENRIQUE",
      foto: "./integrantes/IAN-HENRIQUE.jpg",
      contato: {
        instagram: "",
      }
    }
  },
  {
    numero: "06",
    titulo: "1° Tesoureira",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "💰",
    responsavel: {
      nome: "SOFIA PORTILHO",
      foto: "./integrantes/SOFIA-PORTILHO.jpg",
      contato: {
        instagram: "",
      }
    }
  },
  {
    numero: "07",
    titulo: "Diretora SocioCultural",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "💰",
    responsavel: {
      nome: "ELLEN",
      foto: "./integrantes/ELLEN.jpg",
      contato: {
        instagram: "",
      }
    }
  },
  {
    numero: "08",
    titulo: "Diretor de Comunicação e Imprensa",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "💰",
    responsavel: {
      nome: "LYAN DELLA LIBERA",
      foto: "./integrantes/LYAN-DEL-LIBERA.jpg",
      contato: {
        instagram: "",
      }
    }
  },
  {
    numero: "09",
    titulo: "Diretora Saúde e Meio Ambiente",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "💰",
    responsavel: {
      nome: "THAILA FERNANDES",
      foto: "./integrantes/THAILA-FERNANDES.jpg",
      contato: {
        instagram: "",
      }
    }
  },
  {
    numero: "10",
    titulo: "Diretor de Políticas Educacionais",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "💰",
    responsavel: {
      nome: "JEFERSON MANFRE",
      foto: "./integrantes/JEFERSON-MANFRE.jpg",
      contato: {
        instagram: "",
      }
    }
  },
  {
    numero: "11",
    titulo: "Diretor de Cultura, Esporte e Lazer",
    cor: "from-blue-500 to-cyan-500",
    corGlow: "rgba(59, 130, 246, 0.4)",
    icon: "💰",
    responsavel: {
      nome: "JOÃO GUSTAVO ARAÚJO",
      foto: "./integrantes/JOÃO-GUSTAVO-ARAÚJO.jpg",
      contato: {
        instagram: "",
      }
    }
  },
];

export const PropostasHome = () => {
  return (
    <div className="relative overflow-hidden pt-40">

      {/* Header minimalista */}
      <div className="relative pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Badge Refinado */}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-blue-400 tracking-widest uppercase mb-4 bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              Nossa Equipe 
            </span>

            {/* Título com Contraste Melhorado */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">
                Integrantes do Grêmio Horizonte
              </span>
            </h2>

            {/* Descrição com cor mais equilibrada */}
            <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
              Conheça os dedicados membros que compõem a equipe do Grêmio Estudantil Horizonte, comprometidos em representar e servir nossa comunidade escolar com paixão e responsabilidade.
            </p>

            {/* Divisor Sutil (Opcional) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-8 opacity-50"
            />
          </motion.div>
        </div>
      </div>

      {/* ScrollStack */}
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
          {propostas.map((proposta) => (
            <ScrollStackItem
              key={proposta.numero}
              itemClassName="group relative w-full"
            >
              {/* Card */}
              <div
                className="relative backdrop-blur-xl bg-white/[0.02] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 w-full"
                style={{
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px -20px ${proposta.corGlow}`,
                  willChange: 'transform'
                }}
              >

                {/* Glow sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Partícula */}
                <div
                  className={`hidden sm:block absolute top-6 right-6 w-24 h-24 bg-gradient-to-br ${proposta.cor} rounded-full blur-3xl opacity-20`}
                />

                {/* Conteúdo */}
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

                  {/* Linha */}
                  <div className={`w-12 sm:w-16 h-1 bg-gradient-to-r ${proposta.cor} rounded-full mb-3`} />


                  {/* Seção do Responsável */}
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

                      {/* Foto e Info */}
                      <div className="flex items-center gap-3 flex-1">
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${proposta.cor} rounded-full blur-md opacity-40`} />
                          <img
                            src={proposta.responsavel.foto}
                            alt={proposta.responsavel.nome}
                            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white/20"
                          />
                        </div>

                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white">
                            {proposta.responsavel.nome}
                          </h4>
                        </div>
                      </div>

                      {/* Contatos */}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {/* Só mostra o Instagram se ele existir */}
                        {proposta.responsavel.contato.instagram && (
                          <a
                            href={`https://instagram.com/${proposta.responsavel.contato.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/icon flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                            title="Instagram"
                          >
                            <Instagram className="w-4 h-4 text-slate-400 group-hover/icon:text-white transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
};

export default PropostasHome;