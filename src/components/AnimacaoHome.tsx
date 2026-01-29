export const AnimacaoHome = () => {
    return (
        <>
            <style>{`
                @keyframes gradient {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes gradient-rotate {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-20px) translateX(10px);
                    }
                }

                @keyframes float-slower {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-30px) translateX(-10px);
                    }
                }

                @keyframes float-medium {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-25px) translateX(15px);
                    }
                }

                @keyframes float-fast {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-15px) translateX(-15px);
                    }
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }

                .animate-gradient-rotate {
                    background-size: 300% 300%;
                    animation: gradient-rotate 4s ease infinite;
                }

                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }

                .animate-float-slower {
                    animation: float-slower 8s ease-in-out infinite;
                }

                .animate-float-medium {
                    animation: float-medium 7s ease-in-out infinite;
                }

                .animate-float-fast {
                    animation: float-fast 5s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes fade-in-scale {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fade-in-down {
                    animation: fade-in-down 0.8s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }

                .animate-fade-in-up-delay {
                    animation: fade-in-up 0.8s ease-out 0.2s backwards;
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out 0.1s backwards;
                }

                .animate-fade-in-scale {
                    animation: fade-in-scale 1s ease-out 0.3s backwards;
                }

                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </>
    )
}
