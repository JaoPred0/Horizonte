import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContatoHome = () => {
    return (
        <section className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
            {/* Background decorativo simplificado - Estático */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-cyan-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                            Contato
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                        Fale com o Grêmio
                    </h1>

                    <p className="text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
                        Estamos prontos para ouvir você! Seja para tirar dúvidas, receber feedback ou discutir novas ideias, nossa equipe está à disposição para ajudar no que for necessário.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Lado Esquerdo - Informações */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-4">
                                Vamos conversar?
                            </h2>
                            <p className="text-base md:text-lg text-blue-200/90 leading-relaxed">
                                Estamos aqui para ajudar você! Entre em contato conosco através dos nossos canais de atendimento ou envie sua mensagem diretamente.
                            </p>
                        </div>

                        {/* Principais Contatos */}
                        <div className="space-y-4">
                            <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4 flex items-center gap-2">
                                <MessageCircle className="w-5 h-5 text-cyan-400" />
                                Principais Contatos
                            </h3>

                            {/* Card Email */}
                            <motion.div 
                                whileHover={{ x: 10, scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-blue-500/30 shadow-lg hover:shadow-xl hover:border-blue-400/40 transition-all cursor-pointer"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-blue-50" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-100 text-sm md:text-base">Email</h4>
                                    <p className="text-cyan-300 text-sm md:text-base">horizonte.b2026@gmail.com</p>
                                    <p className="text-xs md:text-sm text-blue-400/70">Respondemos o mais rápido possível.</p>
                                </div>
                            </motion.div>

                            {/* Card Telefone Grêmio */}
                            <motion.div 
                                whileHover={{ x: 10, scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-blue-500/30 shadow-lg hover:shadow-xl hover:border-blue-400/40 transition-all cursor-pointer"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-blue-50" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-100 text-sm md:text-base">Telefone do Grêmio (Lyan)</h4>
                                    <p className="text-cyan-300 text-sm md:text-base">(67) 99644-0931</p>
                                    <p className="text-xs md:text-sm text-blue-400/70">Seg-Sex: 9h às 18h</p>
                                </div>
                            </motion.div>

                            {/* Card Telefone Desenvolvedor */}
                            <motion.div 
                                whileHover={{ x: 10, scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-[#0F172A]/60 backdrop-blur-sm border border-blue-500/30 shadow-lg hover:shadow-xl hover:border-blue-400/40 transition-all cursor-pointer"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-blue-50" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-100 text-sm md:text-base">Telefone do Desenvolvedor (João)</h4>
                                    <p className="text-cyan-300 text-sm md:text-base">(67) 99661-0494</p>
                                    <p className="text-xs md:text-sm text-blue-400/70">Seg-Sab: 8h às 22h</p>
                                </div>
                            </motion.div>
                        </div>
                        
                    </motion.div>

                    {/* Lado Direito - CTA Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Glow Effect estático */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50"></div>

                        <div className="relative bg-[#0F172A]/70 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border border-blue-500/40">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                                viewport={{ once: true }}
                                className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl"
                            >
                                <Mail className="w-8 h-8 md:w-10 md:h-10 text-blue-50" />
                            </motion.div>

                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-4 text-center">
                                Envie sua Mensagem
                            </h3>
                            <p className="text-blue-200 text-center mb-6 md:mb-8 text-sm md:text-base">
                                Preencha nosso formulário de contato e nossa equipe retornará o mais breve possível.
                            </p>

                            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center gap-3 text-blue-200"
                                >
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg"></div>
                                    <span className="text-sm md:text-base">Resposta em até 24 horas</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center gap-3 text-blue-200"
                                >
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg"></div>
                                    <span className="text-sm md:text-base">Atendimento personalizado</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center gap-3 text-blue-200"
                                >
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg"></div>
                                    <span className="text-sm md:text-base">Soluções rápidas e eficientes</span>
                                </motion.div>
                            </div>

                            <Link to="/contato">
                                <motion.button
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-blue-50 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group text-sm md:text-base border border-blue-400/30"
                                >
                                    Ir para Contato
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </motion.button>
                            </Link>

                            <p className="text-center text-xs md:text-sm text-blue-400/80 mt-4">
                                🔒 Seus dados estão seguros conosco
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};