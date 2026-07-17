import { useState, useEffect } from 'react';
import { Menu, X, Users, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLUB_LOGO } from '../data';

interface NavbarProps {
  onNavClick: (id: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'regras', label: 'Regras' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'depoimentos', label: 'Membros' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'contato', label: 'Participar' },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-md border-b border-olive-800/40 shadow-lg py-3'
          : 'bg-gradient-to-b from-neutral-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            id="nav-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleItemClick('inicio')}
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-leather-200/60 group-hover:border-leather-200 transition-colors duration-300">
              <img
                src={CLUB_LOGO}
                alt="Logo QuatiReal"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-serif text-lg tracking-tight text-amber-50 group-hover:text-leather-100 transition-colors duration-300 block leading-tight">
                QUATI REAL
              </span>
              <span className="font-mono text-[9px] text-neutral-400 block tracking-widest uppercase">
                Carros Antigos • RJ
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`px-3 py-2 rounded-md text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-leather-200 bg-olive-900/50 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA WhatsApp Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5524999999999?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+grupo+de+carros+antigos+QuatiReal."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-leather-600 hover:from-amber-500 hover:to-leather-500 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageSquare size={14} className="text-neutral-950" />
              <span>Entrar no Grupo</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-neutral-900 border-b border-olive-900/50"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium tracking-wide uppercase ${
                    activeSection === item.id
                      ? 'text-leather-200 bg-neutral-800/60 font-semibold border-l-2 border-leather-600'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/40'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <a
                  href="https://wa.me/5524999999999?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+grupo+de+carros+antigos+QuatiReal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-600 to-leather-600 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider py-3 px-4 rounded w-full shadow"
                >
                  <MessageSquare size={16} />
                  <span>Entrar no WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
