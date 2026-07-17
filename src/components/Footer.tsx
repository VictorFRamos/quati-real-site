import { Compass, Instagram, MessageSquare, ChevronUp } from 'lucide-react';
import { CLUB_LOGO } from '../data';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre o Grupo' },
    { id: 'regras', label: 'Regras de Conduta' },
    { id: 'eventos', label: 'Próximos Eventos' },
    { id: 'galeria', label: 'Nossa Galeria' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Participar / Contato' },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Brand block (Left) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavClick('inicio')}>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-leather-600">
                <img
                  src={CLUB_LOGO}
                  alt="Logo QuatiReal"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-base text-white tracking-tight block leading-tight">
                  QUATI REAL
                </span>
                <span className="font-mono text-[9px] text-neutral-500 block uppercase tracking-widest">
                  Grupo de Carros Antigos
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-light text-neutral-400 max-w-sm leading-relaxed">
              "Acumulando amizades e memórias dos nossos Antigos." Reuniões, dicas de manutenção, passeios em comboio e muita prosa boa no sul do estado do Rio de Janeiro.
            </p>

            {/* Social handles */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/quatireal_carrosantigos/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5524999999999?text=Ol%C3%A1%21+Gostaria+de+participar+do+QuatiReal%21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded text-neutral-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Quick links block (Center) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Navegação Rápida
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="text-xs text-neutral-400 hover:text-leather-300 transition-colors focus:outline-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional hubs block (Right) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Cidades e Encontros
            </h3>
            <p className="text-xs font-light leading-relaxed">
              Atuamos prioritariamente nos municípios de <strong className="text-neutral-300 font-medium">Quatis</strong> e <strong className="text-neutral-300 font-medium">Porto Real (RJ)</strong>, estendendo nossa recepção a entusiastas de Resende, Barra Mansa, Volta Redonda e cidades vizinhas do Vale do Paraíba.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono text-leather-300 bg-leather-950/40 border border-leather-900/50 px-2 py-0.5 rounded uppercase">
                <Compass size={10} strokeWidth={2.5} />
                <span>Interior Fluminense</span>
              </span>
            </div>
          </div>

        </div>

        {/* Separator line */}
        <div className="border-t border-neutral-900 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <div>
            <p className="text-[11px] font-mono tracking-wide">
              © {currentYear} QUATI REAL — Grupo de Carros Antigos. Criado em Março de 2025.
            </p>
            <p className="text-[10px] text-neutral-600 mt-1 max-w-2xl leading-normal">
              Aviso: Este site é uma vitrine cultural e de preservação da memória automotiva, mantido voluntariamente por apaixonados por carros clássicos. Não há atividades comerciais, anúncios patrocinados ou vendas corporativas vinculadas diretamente à marca.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => onNavClick('inicio')}
            className="p-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded text-neutral-400 hover:text-white transition-all shadow-md focus:outline-none cursor-pointer shrink-0"
            aria-label="Back to top"
          >
            <ChevronUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
