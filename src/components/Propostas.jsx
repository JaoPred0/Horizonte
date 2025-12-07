import React, { useRef, useEffect, useState } from 'react';
import propostas from './../data/proposta.json'; // Importe o JSON aqui

const Propostas = () => {
    const sectionRef = useRef(null);
    const liRefs = useRef([]);
    const [activeIndices, setActiveIndices] = useState([]);
    const [expandedStates, setExpandedStates] = useState({}); // Para controlar expansão por subproposta

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            // Calculate active indices with earlier activation (offset by 0.1 to activate sooner)
            const newActiveIndices = [];
            liRefs.current.forEach((li, index) => {
                if (li) {
                    const liRect = li.getBoundingClientRect();
                    const liTop = liRect.top - rect.top;
                    const liProgress = liTop / sectionHeight;
                    if ((windowHeight - sectionTop) / (windowHeight + sectionHeight) > liProgress - 0.1) { // Activate 10% earlier
                        newActiveIndices.push(index);
                    }
                }
            });
            setActiveIndices(newActiveIndices);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = propostas; // Use o JSON importado

    // Flatten subproposals for indexing
    const allSubproposals = categories.flatMap(cat => cat.subproposals);

    const toggleExpanded = (globalIndex) => {
        setExpandedStates(prev => ({
            ...prev,    
            [globalIndex]: !prev[globalIndex]
        }));
    };

    const truncateText = (text, maxWords = 10) => {
        const words = text.split(' ');
        if (words.length <= maxWords) return text;
        return words.slice(0, maxWords).join(' ') + '...';
    };

    return (
        <section ref={sectionRef} id="timeline" className="py-24 px-10 md:px-16 lg:px-32">
            <div className="divider mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent 
               bg-clip-text bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-400
               drop-shadow-lg my-12">
                    Propostas da Chapa
                </h2>

            </div>

            <div className="relative">
                {/* Gray background line with gradient */}
                <div
                    className="absolute left-1/2 top-0 w-1 h-full transform -translate-x-1/2 z-0"
                    style={{
                        background: `linear-gradient(to bottom, #0061D8, #00248D, #0097F9)`
                    }}
                ></div>
                {categories.map((category, catIndex) => (
                    <div key={catIndex}>
                        {/* Mini card for category */}
                        <div className="flex justify-center mb-8 relative z-10">
                            <div className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-2 shadow-md">
                                <h3 className="text-lg md:text-xl font-bold text-blue-900">{category.title}</h3>
                            </div>
                        </div>
                        {/* Subproposals */}
                        <ul className="relative">
                            {category.subproposals.map((sub, subIndex) => {
                                const globalIndex = categories.slice(0, catIndex).reduce((acc, cat) => acc + cat.subproposals.length, 0) + subIndex;
                                const isEven = globalIndex % 2 === 0;
                                const isActive = activeIndices.includes(globalIndex);
                                const isExpanded = expandedStates[globalIndex];
                                const displayText = isExpanded ? sub.description : truncateText(sub.description);
                                return (
                                    <li
                                        key={globalIndex}
                                        ref={(el) => liRefs.current[globalIndex] = el}
                                        className={`mb-16 relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                                    >
                                        {/* Single circle with arrow indicator */}
                                        <div className="absolute left-1/2 top-1 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                            <div
                                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${isActive
                                                    ? 'bg-green-500 border-green-500'
                                                    : 'bg-gray-400 border-gray-200'
                                                    }`}
                                            >
                                                {isActive ? (
                                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    <div
                                                        className={`w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent transition-transform duration-500 ${isEven ? 'border-b-gray-400' : 'border-b-gray-400 rotate-180'
                                                            } ${isActive ? 'rotate-360' : ''}`}
                                                        style={{ borderBottomColor: isActive ? '#10B981' : '#9CA3AF' }}
                                                    ></div>
                                                )}
                                            </div>
                                        </div>
                                        {/* Card */}
                                        <div
                                            className={`p-8 rounded-xl shadow-lg bg-white transition-all duration-500 cursor-pointer ${isActive
                                                ? 'border border-blue-200 filter-none opacity-100'
                                                : 'border border-gray-200 filter blur-sm opacity-50'
                                                } ${isEven ? 'ml-8' : 'mr-8'}`}
                                            style={{ maxWidth: '400px' }}
                                            onClick={() => toggleExpanded(globalIndex)}
                                        >
                                            <h3 className="text-lg md:text-xl font-semibold mb-2">{sub.title}</h3>
                                            <div
                                                className="overflow-hidden transition-all duration-500 ease-in-out"
                                                style={{ maxHeight: isExpanded ? '1000px' : '100px' }} // Ajuste conforme necessário
                                            >
                                                <p className="text-sm md:text-base text-gray-600">
                                                    {displayText}
                                                    {!isExpanded && sub.description.split(' ').length > 10 && (
                                                        <span className="text-blue-500 cursor-pointer"> Mostra mais</span>
                                                    )}
                                                    {isExpanded && (
                                                        <span className="text-blue-500 cursor-pointer"> Mostra menos</span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Propostas;
