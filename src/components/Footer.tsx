import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram } from 'lucide-react';

const MENU_ITEMS = [
    { label: 'Início', href: '/' },
    { label: 'Saiba da plataforma', href: '/plataforma' },
    { label: 'Integrantes', href: '/integrantes' },
    { label: 'Propostas', href: '/propostas' },
    { label: 'Contato', href: '/contato' },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/gremiohorizonte/', label: 'Instagram' },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-[#0F172A]/40 via-[#020109]/60 to-[#020109]/90 overflow-hidden rounded-t-3xl mt-20">
            {/* Bolhas de fundo */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 15, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-10 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
            />

            {/* Footer Principal */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                >
                    {/* Coluna 1 - Sobre */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                            Nossa Plataforma
                        </h3>
                        <p className="text-blue-200/80 text-sm md:text-base leading-relaxed">
                            Conectando ideias e transformando o futuro através da tecnologia e inovação.
                        </p>

                        {/* Redes Sociais */}
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-lg bg-[#0F172A]/60 backdrop-blur-xl border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-400/50 transition-all shadow-lg shadow-blue-500/10"
                                    aria-label={social.label}
                                    target='_blank'
                                >
                                    <social.icon className="w-5 h-5 text-cyan-400" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Coluna 2 - Links Rápidos */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                            Links Rápidos
                        </h3>
                        <ul className="space-y-2">
                            {MENU_ITEMS.slice(0, 3).map((item, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <Link
                                        to={item.href}
                                        className="text-blue-200/80 hover:text-cyan-300 transition-colors text-sm md:text-base inline-flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Coluna 3 - Mais Links */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                            Informações
                        </h3>
                        <ul className="space-y-2">
                            {MENU_ITEMS.slice(3, 6).map((item, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <Link
                                        to={item.href}
                                        className="text-blue-200/80 hover:text-cyan-300 transition-colors text-sm md:text-base inline-flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Coluna 4 - Contato */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                            Contato
                        </h3>
                        <div className="space-y-3">
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-3 text-blue-200/80 text-sm md:text-base"
                            >
                                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>horizonte.b2026@gmail.com</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-3 text-blue-200/80 text-sm md:text-base"
                            >
                                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>(67) 99644-0931</span>
                            </motion.div>

                        </div>
                    </motion.div>
                </motion.div>

                {/* Linha divisória */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-12 mb-8"
                />

                {/* Acessar Plataforma */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center space-y-4"
                >
                    <h3 className="text-lg md:text-xl font-semibold text-blue-300">
                        Acessar nossa plataforma
                    </h3>
                    <p className="text-blue-200/70 text-sm md:text-base">
                        Entre agora e descubra todas as funcionalidades disponíveis
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                        <a href="https://gremio-horizonte-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-3 bg-[#0F172A]/60 backdrop-blur-xl border border-blue-500/30 text-cyan-300 font-semibold rounded-lg hover:bg-blue-600/20 hover:border-cyan-400/50 transition-all shadow-lg shadow-blue-500/10"
                            >
                                Acessar plataforma
                            </motion.button>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Sub-Footer */}
            <div className="relative z-10 border-t border-blue-500/20 bg-[#020109]/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-blue-300/70 text-sm text-center md:text-left"
                        >
                            © {currentYear} Plataforma. Todos os direitos reservados.
                        </motion.p>

                        {/* Desenvolvido por */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-blue-300/70 text-sm text-center md:text-right"
                        >
                            Desenvolvido por{' '}
                            <span className="text-cyan-400">João Pedro Cristaldo Ferraz</span>
                            {''}.
                        </motion.p>
                    </div>
                </div>
            </div>
        </footer>
    );
};