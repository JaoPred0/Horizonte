import { useState } from 'react';
import { Download, Globe, Smartphone, Apple, Shield, Mail, ChevronDown, ChevronUp, ExternalLink, Sparkles, Users, Zap, CheckCircle2, HelpCircle, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SaibaMais = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const updates = [
    {
      version: "v0.4.4 - Beta",
      date: "Jan 27, 2026",
      changes: [
        "Novos aquivos de env",
        "Arrumando local de login no app",
      ]
    },
    {
      version: "v0.4.4 - Beta",
      date: "Jan 25, 2026",
      changes: [
        "Arrumando dnv mesma coisa",
        "Arrumando para aplicativo mobile",
      ]
    },
    {
      version: "v0.4.2 - Beta",
      date: "Jan 8, 2026",
      changes: [
        "Arrumando erros para vecel",
        "Novas páginas e rotas; funcionalidades principais prontas (responsividade pendente)",
      ]
    },
    {
      version: "v0.4.1 - Beta",
      date: "Jan 6, 2026",
      changes: [
        "Ajustando erros",
        "Ajustes no login e perfil com exibição do username",
        "Corrigir erro de variável não definida",
        "Deploy inicial para Vercel (em desenvolvimento)",
      ]
    },
    {
      version: "v0.4.0 - Beta",
      date: "Jan 5, 2026",
      changes: [
        "Reorganiza estrutura de pastas e arquivos",
      ]
    },
    {
      version: "v0.3.0 - Beta",
      date: "Jan 4, 2026",
      changes: [
        "Corrige erros de tipagem e build para gerar app Android com Capacitor",
      ]
    },
    {
      version: "v0.2.8 - Beta",
      date: "Dec 29, 2025",
      changes: [
        "Área de conteúdos do VestPro+ com simulado pronto (pendente conteúdos e provas)",
      ]
    },
    {
      version: "v0.2.1 - Beta",
      date: "Dec 25, 2025",
      changes: [
        "Área de conteudos na aba VestPro+ com alguns conteudos ja prontos em forma de test",
        "Área do calendário acadêmico na aba IF",
      ]
    },
    {
      version: "v0.2.0 - Beta",
      date: "Dec 24, 2025",
      changes: [
        "Aba IF criada com horários provisórios para futura importação de arquivos",
        "Clocando as paginas na pasta src/components/estudos/page",
        "Adiciona tabs de cards para IFMS, VestPro+, BaseNerd e download de eBooks",
        "Ranking funcional com base inicial de alunos; sujeito a melhorias e correções",
      ]
    },
    {
      version: "v0.1.6 - Beta",
      date: "Dec 23, 2025",
      changes: [
        "Atualiza formatUserName para suportar nomes customizados por email",
        "Estudos Beta 1.1 — módulo de conquistas em fase de testes com integração ao Firebase",
        "Ganhos de XP e sistema de streak concluídos (Estudos Beta 1.0)",
        "Implementa template da página de estudos",
      ]
    },
    {
      version: "v0.1.1 - Beta",
      date: "Dec 22, 2025",
      changes: [
        "XHorizonte Beta 1.0 – primeiro aplicativo concluído",
      ]
    },
    {
      version: "v0.0.9 - Beta",
      date: "Dec 21, 2025",
      changes: [
        "Inicia nova aba de aplicativos do Horizontes",
        "Finaliza página hub de aplicativos com busca, links e layout responsivo",
      ]
    },
    {
      version: "v0.0.6 - Beta",
      date: "Dec 19, 2025",
      changes: [
        "Cria página de mudança de senha com medidor de força, animações e layout responsivo (desktop e mobile)",
      ]
    },
    {
      version: "v0.0.5 - Beta",
      date: "Dec 18, 2025",
      changes: [
        "Remover seção Quick Stats da página de configurações",
      ]
    },
    {
      version: "v0.0.3 - Beta",
      date: "Dec 18, 2025",
      changes: [
        "Adicionar rotas 404 e páginas em construção",
        "Criar página de temas",
        "Adicionados componentes Desktop e Mobile para perfil com designs diferentes",
        "Implementação da página de perfil com dados do usuário via Firebase Auth",
        "Sidebar com dados do Firebase, roles e animação de transição de página",
      ]
    },
    {
      version: "v0.0.1 - Beta",
      date: "Dec 17, 2025",
      changes: [
        "Configuração completa do app/site",
        "Arrumando classes com DaisyUI",
        "Adicionando Navbar, Sidebar e conteúdo de teste fixos; base para organização e navegação",
      ]
    },
  ];

  const faqs = [
    {
      question: "Como conseguir e acessar meu e-mail estudantil?",
      answer: "O e-mail com domínio @estudante.ifms.edu.br é criado automaticamente após a matrícula. Para acessá-lo:\n\n1. **Localize seu endereço:** Acesse o Sistema Acadêmico (via conta gov.br ou banco), vá em 'Dados Pessoais' e procure por 'E-mail do estudante'. O padrão costuma ser nome.ultimosobrenome@estudante.ifms.edu.br.\n2. **Primeiro acesso:** Vá ao Gmail e informe seu e-mail estudantil.\n3. **Senha inicial:** Utilize o número do seu CPF (apenas números). Caso seu CPF comece com zero e dê erro, tente digitar sem os zeros iniciais.\n4. **Ativação:** Aceite os termos de uso e altere sua senha imediatamente.\n\nPronto! Agora você já pode utilizar os serviços do Google com sua conta institucional."
    },
    {
      question: "Como funciona a segurança e o acesso ao app?",
      answer: "Sua segurança é nossa prioridade. Utilizamos a infraestrutura do Firebase (Google) com banco de dados Firestore, protegendo suas informações com criptografia. \n\n**Regras de Acesso Estritas:** \n1. **Acesso Restrito:** O projeto é privado e exclusivo para a comunidade acadêmica. \n2. **Verificação Obrigatória:** É indispensável o uso do e-mail estudantil institucional. \n3. **Política de Uso:** Usuários sem e-mail estudantil válido ou que descumprirem as normas de acesso serão permanentemente banidos e proibidos de reingressar na plataforma."
    },
    {
      question: "Preciso de internet para usar o app?",
      answer: "Sim. Como o aplicativo está em fase de desenvolvimento e utiliza a infraestrutura de dados em tempo real do Google, uma conexão ativa é necessária para acessar as informações. Futuras atualizações poderão incluir suporte para visualização de dados offline."
    },
    {
      question: "O app é gratuito?",
      answer: "Sim, o aplicativo é completamente gratuito para estudantes com email institucional verificado. Não cobramos nenhuma taxa de uso ou assinatura."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente! Seguimos rigorosos protocolos de segurança, incluindo backups diários, criptografia de dados em repouso e em trânsito, e conformidade com a LGPD (Lei Geral de Proteção de Dados)."
    },
    {
      question: "Posso usar em múltiplos dispositivos?",
      answer: "Sim! Seus dados são sincronizados na nuvem, permitindo acesso através do Android, navegador web e em breve no iOS. Basta fazer login com sua conta em qualquer dispositivo."
    }
  ];

  return (
    <div className="min-h-screen pt-20 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradients animados */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-50 right-1/4 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16 relative">
          {/* Header com animação de fade-in */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-500/30 bg-clip-text text-transparent animate-gradient">
              Plataforma
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubra tudo sobre nosso aplicativo, como funciona e como começar a usar
            </p>
          </div>

          {/* Download Section com animações escalonadas */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Card Android */}
            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-slide-up">
              {/* Borda animada */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                    <Smartphone className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Android</h3>
                </div>
                <p className="text-gray-400 mb-4">Baixe agora e comece a usar</p>
                <a
                  href="/Horizonte.apk" // Nome do arquivo dentro da pasta public
                  download="Horizonte.apk" // Nome que o arquivo terá ao ser baixado
                  className="w-full"
                >
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 shadow-lg hover:shadow-green-500/50">
                    <Download className="w-5 h-5" />
                    Baixar para Android
                  </button>
                </a>
              </div>
            </div>

            {/* Card Navegador */}
            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-slide-up delay-100">
              {/* Borda animada */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Navegador</h3>
                </div>
                <p className="text-gray-400 mb-4">Acesse direto do seu navegador</p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 shadow-lg hover:shadow-blue-500/50">
                  <ExternalLink className="w-5 h-5" />
                  Abrir no Navegador
                </button>
              </div>
            </div>

            {/* Card iOS */}
            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 opacity-60 hover:opacity-70 transition-all duration-300 animate-slide-up delay-200">
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center">
                    <Apple className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold">iOS</h3>
                </div>
                <p className="text-gray-400 mb-4">Em desenvolvimento</p>
                <button disabled className="w-full bg-gray-600 text-gray-400 py-3 rounded-lg font-semibold cursor-not-allowed relative overflow-hidden">
                  <span className="relative z-10">Em Breve</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <style>{`
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes shimmer {
      100% { transform: translateX(100%); }
    }
    
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }
    
    .animate-fade-in {
      animation: fade-in 0.8s ease-out;
    }
    
    .animate-slide-up {
      animation: slide-up 0.6s ease-out;
    }
    
    .delay-100 {
      animation-delay: 0.1s;
    }
    
    .delay-200 {
      animation-delay: 0.2s;
    }
    
    .delay-1000 {
      animation-delay: 1s;
    }
    
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
  `}</style>
      </div>

      {/* Como Funciona */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Como Funciona
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Simples, rápido e seguro
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {/* Step 1 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative z-10 text-center">
              <motion.div
                className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Círculo com borda animada */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />

                <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/20 group-hover:border-blue-400/40 transition-colors">
                  <Mail className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
                </div>

                {/* Número do passo */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/50"
                  whileHover={{ scale: 1.2 }}
                >
                  1
                </motion.div>
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Cadastro</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed px-2">
                Use seu email estudantil para criar uma conta
              </p>
            </div>

            {/* Linha conectora (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative z-10 text-center">
              <motion.div
                className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7
                  }}
                />

                <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-600/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/20 group-hover:border-blue-400/40 transition-colors">
                  <Shield className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
                </div>

                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/50"
                  whileHover={{ scale: 1.2 }}
                >
                  2
                </motion.div>
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Termos</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed px-2">
                Aceite os termos de uso e políticas de privacidade.
              </p>
            </div>

            <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative z-10 text-center">
              <motion.div
                className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9
                  }}
                />

                <div className="relative w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/20 group-hover:border-blue-400/40 transition-colors">
                  <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
                </div>

                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/50"
                  whileHover={{ scale: 1.2 }}
                >
                  3
                </motion.div>
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Acesso</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed px-2">
                Entre na plataforma e explore os recursos
              </p>
            </div>

            <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
          </motion.div>

          {/* Step 4 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative z-10 text-center">
              <motion.div
                className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.1
                  }}
                />

                <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-600/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/20 group-hover:border-blue-400/40 transition-colors">
                  <Zap className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
                </div>

                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/50"
                  whileHover={{ scale: 1.2 }}
                >
                  4
                </motion.div>
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Use</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed px-2">
                Aproveite todas as funcionalidades disponíveis
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HelpCircle className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tire suas dúvidas sobre o aplicativo
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative group rounded-xl overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Borda animada ao hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-sm"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                />

                <div className="relative backdrop-blur-lg rounded-xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors bg-blue-950/20">
                  <motion.button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 hover:bg-blue-500/5 transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-semibold text-left text-white text-base md:text-lg">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{
                        rotate: openFaq === index ? 180 : 0,
                        scale: openFaq === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      className="flex-shrink-0"
                    >
                      {openFaq === index ? (
                        <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <ChevronUp className="w-5 h-5 text-blue-400" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </div>
                      )}
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut"
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-4 md:px-6 md:pb-5 border-t border-blue-500/20"
                        >
                          <div className="pt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </div>

                          {/* Indicador visual de resposta */}
                          <motion.div
                            className="mt-3 flex items-center gap-2 text-blue-400 text-xs md:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            <span>Resposta</span>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Atualizações */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Histórico de Atualizações
            </h2>
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Acompanhe a evolução do aplicativo
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Linha vertical conectora (desktop) */}
          <div className="hidden md:block absolute left-[29px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent" />

          <div className="space-y-6 md:space-y-8">
            {updates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Ponto na linha do tempo */}
                  <motion.div
                    className="hidden md:block absolute left-0 top-6 w-[60px] h-[60px]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-blue-500/20 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.2, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Card de atualização */}
                  <div className="md:ml-20 relative">
                    {/* Borda animada */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundSize: '200% 200%'
                      }}
                    />

                    <div className="relative backdrop-blur-lg rounded-xl p-5 md:p-6 border border-blue-500/20 group-hover:border-blue-400/40 transition-colors bg-blue-950/10 hover:bg-blue-950/20">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5">
                        <motion.div
                          className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-400/20 group-hover:border-blue-400/40 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Sparkles className="w-7 h-7 text-blue-400" />
                        </motion.div>

                        <div className="flex-1">
                          <motion.h3
                            className="text-xl md:text-2xl font-bold text-white mb-1"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {update.version}
                          </motion.h3>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Clock className="w-4 h-4" />
                            <p>{update.date}</p>
                          </div>
                        </div>

                        {/* Badge "Novo" para o primeiro item */}
                        {index === 0 && (
                          <motion.div
                            className="self-start sm:self-center px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-xs font-bold shadow-lg shadow-blue-500/50"
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              delay: 0.5
                            }}
                          >
                            NOVO
                          </motion.div>
                        )}
                      </div>

                      {/* Lista de mudanças */}
                      <ul className="space-y-3">
                        {update.changes.map((change, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.05 + 0.4 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            </motion.div>
                            <span className="text-sm md:text-base leading-relaxed">{change}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Linha decorativa inferior */}
                      <motion.div
                        className="mt-5 h-1 bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer com informação adicional */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-400 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Novas atualizações chegando em breve</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SaibaMais;