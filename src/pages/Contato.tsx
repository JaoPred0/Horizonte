
export const Contato = () => {

  const contacts = [
    {
      id: 'gremio',
      title: 'Grêmio Estudantil',
      subtitle: 'Fale com a gente',
      description: 'Tire suas dúvidas, envie sugestões ou entre em contato com o Grêmio Estudantil.',
      icon: '🎓',
      whatsapp: '5567996440931', // Substitua pelo número real do Grêmio
      color: 'from-blue-400 to-blue-600',
      label: 'Falar com o Grêmio'
    },
    {
      id: 'developer',
      title: 'Desenvolvedor',
      subtitle: 'Suporte Técnico',
      description: 'Problemas técnicos, bugs ou sugestões sobre o site? Entre em contato com o desenvolvedor.',
      icon: '💻',
      whatsapp: '5567996610494', // Substitua pelo número real do desenvolvedor
      color: 'from-cyan-400 to-cyan-600',
      label: 'Falar com Dev'
    }
  ];

  const handleWhatsAppClick = (number: string) => {
    const url = `https://wa.me/${number}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        .hero-title {
          animation: fadeInUp 1s ease-out;
        }

        .hero-subtitle {
          animation: fadeInUp 1s ease-out 0.2s backwards;
        }

        .contact-card {
          animation: fadeInUp 1s ease-out backwards;
        }

        .contact-card:nth-child(1) {
          animation-delay: 0.3s;
        }

        .contact-card:nth-child(2) {
          animation-delay: 0.5s;
        }

        .icon-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.15)_0%,transparent_50%)]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-24 md:pt-32 px-6 md:px-10 pb-16 md:pb-20 text-center">
        <h1 className="hero-title font-['Poppins'] text-5xl md:text-7xl lg:text-8xl font-black text-white mb-5 leading-tight tracking-tight bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
          Fale Conosco
        </h1>
        <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-normal leading-relaxed">
          Estamos aqui para ouvir você. Entre em contato pelo WhatsApp!
        </p>
      </div>

      {/* Contact Cards */}
      <div className="relative z-10 px-6 md:px-10 pb-24 md:pb-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="contact-card group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:bg-white/8 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Top Accent Bar */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${contact.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="icon-float text-7xl md:text-8xl mb-6 filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                    {contact.icon}
                  </div>

                  {/* Title */}
                  <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold text-white mb-2">
                    {contact.title}
                  </h2>

                  {/* Subtitle */}
                  <p className={`text-lg md:text-xl font-semibold bg-gradient-to-r ${contact.color} bg-clip-text text-transparent mb-4`}>
                    {contact.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-base text-white/70 leading-relaxed mb-8">
                    {contact.description}
                  </p>

                  {/* WhatsApp Button */}
                  <button
                    onClick={() => handleWhatsAppClick(contact.whatsapp)}
                    className={`relative w-full bg-gradient-to-r ${contact.color} text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-[0_10px_40px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group/btn overflow-hidden`}
                  >                    
                    {/* WhatsApp Icon with Pulse */}
                    <span className="relative text-2xl whatsapp-pulse">
                      📱
                    </span>
                    
                    <span className="relative text-lg">
                      {contact.label}
                    </span>
                  </button>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${contact.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/10">
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              <span className="text-blue-400 font-semibold">💡 Dica:</span> Ao clicar no botão, você será redirecionado diretamente para o WhatsApp.
              <br className="hidden md:block" />
              Certifique-se de ter o WhatsApp instalado no seu dispositivo.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-10 left-10 w-20 h-20 border-2 border-blue-400/20 rounded-full blur-sm animate-pulse"></div>
      <div className="fixed top-40 right-20 w-16 h-16 border-2 border-cyan-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Contato;