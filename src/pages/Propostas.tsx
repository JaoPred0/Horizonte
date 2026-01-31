import { useEffect, useRef } from 'react';
import dadosPropostas from '../data/proposta.json';
export const Propostas = () => {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const propostas = dadosPropostas;
    
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observerRef.current?.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const sections = document.querySelectorAll('.proposta-section');
        sections.forEach((section) => observerRef.current?.observe(section));

        return () => observerRef.current?.disconnect();
    }, []);



    return (
        <div className="min-h-screen">
            <style>{`
        .proposta-section {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .proposta-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>

            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full" />
            </div>

            {/* Hero */}
            <header className="relative pt-32 pb-20 px-6 text-center z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent mb-6 tracking-tight">
                    Nossas Propostas
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Um plano de ação focado na infraestrutura, bem-estar e na voz ativa de cada estudante do IFMS.
                </p>
            </header>

            {/* Grid */}
            <main className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
                {propostas.map((proposta, idx) => (
                    <section key={idx} className="proposta-section mb-24">
                        <div className="flex items-center gap-4 mb-10 group">
                            <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                                {proposta.icon}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                {proposta.title}
                            </h2>
                            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent ml-4" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {proposta.subproposals.map((sub, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="glass-card group p-8 rounded-[32px] hover:bg-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className={`w-12 h-1 bg-gradient-to-r ${proposta.accent} mb-6 rounded-full opacity-60`} />
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {sub.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                        {sub.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default Propostas;