import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * ============================================
 * CONFIGURAÇÕES - EDITE AQUI
 * ============================================
 */

// Cores
const COLORS = {
  background: '#020109',           // Cor de fundo principal
  gradientTo: 'blue-600',        // Fim do gradiente
};

// Itens do Menu
const MENU_ITEMS = [
  { label: 'Início', href: '/' },
  { label: 'Saiba da plataforma', href: '/saiba-mais' },
  { label: 'Integrantes', href: '/integrantes' },
  { label: 'Propostas', href: '/propostas' },
  { label: 'Contato', href: '/contato' },
];

// Logo
const LOGO = {
  text: 'Logo',
  icon: 'L',
};

// Botão CTA
const CTA_BUTTON = {
  text: 'Acessar Plataforma',
};

// Scroll Settings
const SCROLL_THRESHOLD = 300; // Pixels para ativar o efeito de scroll

/**
 * ============================================
 * COMPONENTE NAVBAR
 * ============================================
 */

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'px-0 pt-0' : 'px-4 pt-4 sm:px-6 md:px-8'
      }`}
    >
      <nav 
        className={`shadow-2xl backdrop-blur-xl transition-all duration-300 ${
          isScrolled 
            ? 'border-b border-white/10 rounded-b-2xl' 
            : 'border border-white/10 rounded-2xl'
        }`}
        style={{ backgroundColor: `${COLORS.background}CC` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* ============ LOGO ============ */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2 sm:gap-3">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-${COLORS.gradientFrom} to-${COLORS.gradientTo} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm sm:text-lg">
                    {LOGO.icon}
                  </span>
                </div>
                <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                  {LOGO.text}
                </span>
              </a>
            </div>

            {/* ============ MENU DESKTOP ============ */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-2 lg:space-x-4">
                {MENU_ITEMS.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm lg:text-base font-medium hover:bg-white/5 transition-all duration-300 ${
                      index === 0 
                        ? 'text-white/90 hover:text-white' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                
                <a href='https://gremio-horizonte-app.vercel.app' target='_blank'
                  className={`ml-2 lg:ml-4 bg-gradient-to-r from-${COLORS.gradientFrom} to-${COLORS.gradientTo} text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-sm lg:text-base font-semibold hover:shadow-lg hover:shadow-${COLORS.gradientFrom}/50 hover:-translate-y-0.5 transition-all duration-300`}
                >
                  {CTA_BUTTON.text}
                </a >
              </div>
            </div>

            {/* ============ BOTÃO MOBILE ============ */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 sm:h-7 sm:w-7" />
                ) : (
                  <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ============ MENU MOBILE ============ */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 border-t border-white/10">
            {MENU_ITEMS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block px-3 py-3 rounded-lg text-base font-medium hover:bg-white/5 transition-all duration-300 ${
                  index === 0 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            <button 
              className={`w-full mt-2 bg-gradient-to-r from-${COLORS.gradientFrom} to-${COLORS.gradientTo} text-white px-4 py-3 rounded-lg text-base font-semibold hover:shadow-lg hover:shadow-${COLORS.gradientFrom}/50 transition-all duration-300`}
            >
              {CTA_BUTTON.text}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;