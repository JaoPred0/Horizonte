import OrbBackground from './OrbBackground';

export const HeroSection = () => {
    return (
        <div className="pt-32 sm:pt-40 px-4 sm:px-6 lg:px-8">
            <OrbBackground />
            <div className="max-w-7xl mx-auto z-10 relative">
                {/* Texto Central */}
                <div className="text-center mb-16 sm:mb-20">
                    {/* Badge simplificado */}
                    <div className="inline-block mb-6 sm:mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
                        <span className="relative flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Bem-vindo
                        </span>
                    </div>

                    {/* Título com efeito gradiente */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200">
                            Grêmio Horizonte
                        </span>
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/60 max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
                        Conheça nosso{' '}
                        <span className="text-blue-300 font-semibold">grêmio</span> e a{' '}
                        <span className="text-indigo-300 font-semibold">plataforma de estudos e organização</span>{' '}
                        mais incrivel que você já viu.
                    </p>

                    {/* Botões CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-16 sm:mb-20 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
                        <a
                            href="https://gremio-horizonte-app.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto"
                        >
                            <button className="relative w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3">
                                <span>Acessar Plataforma</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </a>
                        <a href='/plataforma' className="group w-full sm:w-auto border-2 border-white/20 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2">
                            <span>Saiba Mais</span>
                        </a>
                    </div>
                </div>

                {/* Preview da Plataforma Otimizado */}
                <div className="relative max-w-6xl mx-auto opacity-0 animate-[fadeInScale_1s_ease-out_0.8s_forwards]">
                    {/* Glow sutil */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50"></div>

                    {/* Container principal */}
                    <div className="relative group">
                        {/* Borda gradiente estática */}
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-500/50 rounded-3xl"></div>

                        {/* Container interno */}
                        <div className="relative bg-gradient-to-b from-[#0F172A] to-[#020109] rounded-3xl p-2 sm:p-4">
                            {/* Imagem Desktop - PC e Tablet */}
                            <div className="hidden md:block relative overflow-hidden rounded-2xl">
                                <img
                                    src="/desktop.png"
                                    alt="Plataforma Desktop"
                                    loading="lazy"
                                    className="w-full h-auto object-cover shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
                            </div>

                            {/* Imagem Mobile - Celular */}
                            <div className="block md:hidden relative overflow-hidden rounded-2xl">
                                <img
                                    src="/mobile.png"
                                    alt="Plataforma Mobile"
                                    loading="lazy"
                                    className="w-full h-auto object-cover shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Corners decorativos simplificados */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-400/40 rounded-tl-xl"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-indigo-400/40 rounded-tr-xl"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-purple-400/40 rounded-bl-xl"></div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-400/40 rounded-br-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;