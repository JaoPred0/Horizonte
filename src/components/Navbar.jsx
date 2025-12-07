// Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

/* ITENS */


const items = [
  { label: "Home", icon: HomeIcon, href: "#home" },
  { label: "Propostas", icon: ClipboardDocumentListIcon, href: "#propostas" },
  { label: "Contato", icon: ChatBubbleLeftRightIcon, href: "#contato" },
  { label: "Rodapé", icon: Squares2X2Icon, href: "#rodape" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* SCROLL SUAVE */
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* DETECTA SCROLL */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className="fixed z-50"
        animate={{
          top: isScrolled ? 0 : 16,
          left: isScrolled ? 0 : 16,
          right: isScrolled ? 0 : 16,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="
            flex items-center justify-between
            px-6 h-16
            backdrop-blur-xl
            bg-white/80
            shadow-lg
          "
          animate={{
            borderRadius: isScrolled ? 0 : 16,
            border: isScrolled ? "none" : "1px solid rgba(0,97,216,0.15)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <span className="text-xl font-bold text-[var(--azul-escuro)]">
            Horizonte
          </span>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="btn btn-ghost btn-circle lg:hidden"
          >
            <Bars3Icon className="w-6 h-6 text-[var(--azul-escuro)]" />
          </button>

          {/* LINKS DESKTOP */}
          <ul className="hidden lg:flex gap-8">
            {items.map((item) => (
              <li key={item.label}>
                <NavLink
                  text={item.label}
                  href={item.href}
                  onClick={() => scrollToSection(item.href)}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* BOTTOM SHEET */}
            <motion.aside
              className="
                fixed inset-x-0 bottom-0 z-50
                rounded-t-3xl
                bg-white/90
                backdrop-blur-2xl
                border-t border-blue-200
                shadow-2xl
              "
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
            >
              {/* INDICADOR */}
              <div className="flex justify-center pt-3">
                <span className="w-14 h-1.5 rounded-full bg-black/30" />
              </div>

              {/* CABEÇALHO */}
              <div className="text-center px-6 py-4">
                <p className="text-sm tracking-widest text-[var(--azul-claro)] font-semibold">
                  GRÊMIO ESTUDANTIL
                </p>
                <h2 className="text-2xl font-bold text-[var(--azul-escuro)]">
                  2026
                </h2>
              </div>

              {/* LINKS */}
              <ul className="flex flex-col gap-4 px-6 pb-8">
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <button
                        onClick={() => {
                          scrollToSection(item.href);
                          setOpen(false);
                        }}
                        className="
                          w-full flex items-center gap-4
                          px-5 py-4
                          rounded-2xl
                          bg-white
                          border border-blue-200
                          shadow
                          hover:shadow-lg
                          hover:bg-blue-50
                          transition
                        "
                      >
                        <Icon className="w-6 h-6 text-blue-600" />
                        <span className="text-lg font-medium text-[var(--azul-escuro)]">
                          {item.label}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* LINK DESKTOP */
function NavLink({ text, href, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="relative font-medium text-[var(--azul-escuro)]"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      initial="rest"
      animate="rest"
    >
      {text}
      <motion.span
        className="absolute left-0 -bottom-2 h-[2px] bg-[var(--azul-primario)]"
        variants={{
          rest: { width: 0, opacity: 0 },
          hover: { width: "100%", opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.button>
  );
}
