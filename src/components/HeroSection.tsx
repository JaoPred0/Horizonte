import OrbBackground from './OrbBackground';

export const HeroSection = () => {
    return (
        <div className="pt-32 sm:pt-40 px-4 sm:px-6 lg:px-8">
            <OrbBackground />
            <div className="max-w-7xl mx-auto z-10 relative">
                {/* Texto Central */}
                <div className="text-center mb-16 sm:mb-20">
                    {/* Badge animado */}
                    <div className="inline-block mb-6 sm:mb-8 animate-fade-in-down">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                            <span className="relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold backdrop-blur-xl">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Bem-vindo
                            </span>
                        </div>
                    </div>

                    {/* Título com efeito gradiente */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 animate-fade-in-up">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200 inline-block">
                            Grêmio Horizonte
                        </span>
                    </h1>

                    {/* Subtítulo melhorado */}
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/60 max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light animate-fade-in">
                        Conheça nosso{' '}
                        <span className="text-blue-300 font-semibold">grêmio</span> e a{' '}
                        <span className="text-indigo-300 font-semibold">plataforma de estudos e organização</span>{' '}
                        mais incrivel que você já viu.
                    </p>

                    {/* Botões CTA melhorados */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-16 sm:mb-20 animate-fade-in-up-delay">
                        <a
                            href="https://gremio-horizonte-app.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full sm:w-auto"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-gradient"></div>
                            <button className="relative w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                                <span>Acessar Plataforma</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </a>
                        <a href='/saiba-mais' className="group w-full sm:w-auto relative border-2 border-white/20 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Saiba Mais
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-indigo-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </a>
                    </div>
                </div>

                {/* Preview da Plataforma com Design Aprimorado */}
                <div className="relative max-w-6xl mx-auto perspective-1000 animate-fade-in-scale">
                    {/* Glow Effect de fundo melhorado */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 rounded-3xl blur-3xl opacity-40 animate-pulse-slow"></div>

                    {/* Container com Borda Gradiente Animada */}
                    <div className="relative group">
                        {/* Borda gradiente animada */}
                        <div className="absolute -inset-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-rotate"></div>

                        {/* Container interno */}
                        <div className="relative bg-gradient-to-b from-[#0F172A] to-[#020109] rounded-3xl p-2 sm:p-4">
                            {/* Imagem Desktop - PC e Tablet */}
                            <div className="hidden md:block relative group/img overflow-hidden rounded-2xl">
                                <img
                                    src="/desktop.png"
                                    alt="Plataforma Desktop"
                                    className="w-full h-auto object-cover shadow-2xl transition-all duration-700 group-hover/img:scale-105"
                                />
                                {/* Overlay gradiente no hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-indigo-500/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                                {/* Brilho nas bordas */}
                                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
                                {/* Reflection effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Imagem Mobile - Celular */}
                            <div className="block md:hidden relative group/img overflow-hidden rounded-2xl">
                                <img
                                    src="/mobile.png"
                                    alt="Plataforma Mobile"
                                    className="w-full h-auto object-cover shadow-2xl transition-all duration-700 group-hover/img:scale-105"
                                />
                                {/* Overlay gradiente no hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-indigo-500/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                                {/* Brilho nas bordas */}
                                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Corners decorativos */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-400 rounded-tl-2xl opacity-50"></div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-indigo-400 rounded-tr-2xl opacity-50"></div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-purple-400 rounded-bl-2xl opacity-50"></div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-400 rounded-br-2xl opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection;