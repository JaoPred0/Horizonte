import React, { useState } from 'react';
import { motion } from 'framer-motion';
import faqs from './../data/faq.json'; // Import the FAQ data from JSON file

const ContactAndFAQ = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 3000); // Hide success after 3 seconds
        }, 3000);
    };

    // Variants for Framer Motion animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="min-h-screen py-12 px-4 flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="divider mb-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent 
               bg-clip-text bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-400
               drop-shadow-lg my-12">
                        Contato & FAQ
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* FAQ Section */}
                    <motion.div
                        variants={itemVariants}
                        className="card bg-white shadow-2xl rounded-3xl p-8 border border-gray-200 flex flex-col hover:shadow-3xl transition-shadow duration-300"
                    >
                        <div className="card-body flex-1">
                            <h2 className="card-title text-2xl font-semibold text-indigo-600 mb-6 flex items-center justify-center">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                FAQ - Perguntas Frequentes
                            </h2>
                            <div className="space-y-3 overflow-y-auto max-h-96">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="collapse collapse-arrow bg-gradient-to-r from-gray-50 to-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                                        <input type="radio" name="my-accordion-1" />
                                        <div className="collapse-title text-lg font-medium text-gray-800 hover:text-indigo-600 transition-colors cursor-pointer py-4 px-6">
                                            {faq.question}
                                        </div>
                                        <div className="collapse-content px-6 pb-4" dangerouslySetInnerHTML={{ __html: faq.answer }}>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        variants={itemVariants}
                        className="card bg-white shadow-2xl rounded-3xl p-8 border border-gray-200 flex flex-col hover:shadow-3xl transition-shadow duration-300"
                    >
                        <div className="card-body flex-1">
                            <h2 className="card-title text-2xl font-semibold text-indigo-600 mb-6 flex items-center justify-center">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                Contato
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-medium flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                            Nome
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Seu nome completo"
                                        className="input input-bordered bg-gradient-to-r from-white to-gray-50 border-2 border-indigo-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-md w-full"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-medium flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="input input-bordered bg-gradient-to-r from-white to-gray-50 border-2 border-indigo-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-md w-full"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700 font-medium flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 9a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v1a1 1 0 01-1-1 1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                            </svg>
                                            Mensagem
                                        </span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered bg-gradient-to-r from-white to-gray-50 border-2 border-indigo-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-md resize-none w-full"
                                        placeholder="Digite sua mensagem aqui..."
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`btn w-full font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-auto ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : isSuccess
                                            ? 'bg-green-500 hover:bg-green-600'
                                            : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
                                        } text-white`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </>
                                    ) : isSuccess ? (
                                        <>
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Enviado com sucesso!
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.409l-7-14z" />
                                            </svg>
                                            Enviar Mensagem
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactAndFAQ;
