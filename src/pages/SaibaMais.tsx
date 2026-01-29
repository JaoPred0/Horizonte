import { motion } from 'framer-motion';

const SaibaMais = () => {
  const features = [
    { title: "Segurança", desc: "Criptografia de ponta a ponta em todos os seus dados." },
    { title: "Velocidade", desc: "Interface otimizada para uma resposta instantânea." },
    { title: "Nuvem", desc: "Sincronização perfeita entre todos os seus dispositivos." }
  ];

  return (
    <div className="min-h-screen bg-[#010f3f] text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Explorando o Horizonte
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-blue-100/80 leading-relaxed mb-12"
        >
          Nosso app foi desenhado para quem busca clareza e eficiência. 
          Mais do que uma ferramenta, uma nova forma de visualizar seus projetos.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-400">{f.title}</h3>
              <p className="text-blue-100/60">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            ← Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaibaMais;