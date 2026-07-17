import { motion } from 'motion/react';
import { MessageSquare, Instagram, MapPin, Calendar, Heart } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onExploreClick: (id: string) => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20"
    >
      {/* Background Image with Vignette & Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Carro Antigo QuatiReal"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Radial Vignette */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(10,10,10,0.8)_90%] mix-blend-multiply" />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/80" />
      </div>

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-grid-white/[0.015] z-0 pointer-events-none" />

      {/* Main Content Card */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 sm:pt-16 pb-12">
        
        {/* Small badge header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center space-x-2 bg-olive-900/60 backdrop-blur-sm border border-olive-700/50 px-3 py-1.5 rounded-full mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs font-semibold text-leather-200 tracking-wider uppercase">
            Quatis & Porto Real • RJ
          </span>
        </motion.div>

        {/* Large Retro Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.1] mb-6"
        >
          Acumulando amizades <br className="hidden sm:inline" />
          e <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-leather-200 to-amber-100 font-normal">memórias</span> dos nossos Antigos.
        </motion.h1>

        {/* Description/Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mx-auto text-neutral-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-10"
        >
          Encontro de gerações e paixão sobre rodas. Fundado em{' '}
          <strong className="text-leather-100 font-medium font-mono text-sm">Março de 2025</strong>, o{' '}
          <strong className="text-white font-medium">QuatiReal</strong> reúne proprietários, entusiastas e 
          histórias vivas do automobilismo no interior fluminense.
        </motion.p>

        {/* Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://wa.me/5524999999999?text=Ol%C3%A1%21+Gostaria+de+participar+do+QuatiReal%21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500 to-leather-500 hover:from-amber-400 hover:to-leather-400 text-neutral-950 font-mono text-xs font-extrabold uppercase tracking-widest py-4 px-8 rounded shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageSquare size={16} />
            <span>Entrar no WhatsApp</span>
          </a>
          
          <a
            href="https://instagram.com/quatireal" // Placeholder/fictional based on prompt bio
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-neutral-900/80 hover:bg-neutral-800/95 text-neutral-200 hover:text-white border border-neutral-700/60 hover:border-neutral-500 font-mono text-xs font-extrabold uppercase tracking-widest py-4 px-8 rounded transition-all duration-300"
          >
            <Instagram size={16} />
            <span>Seguir no Instagram</span>
          </a>
        </motion.div>

        {/* Micro-Features grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-neutral-800/50 max-w-3xl mx-auto text-left"
        >
          <div className="flex items-start space-x-3.5">
            <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-leather-200 mt-0.5 shrink-0">
              <MapPin size={16} />
            </div>
            <div>
              <h3 className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Origem</h3>
              <p className="text-neutral-300 text-xs mt-0.5">Quatis & Porto Real - RJ</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-leather-200 mt-0.5 shrink-0">
              <Calendar size={16} />
            </div>
            <div>
              <h3 className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Fundação</h3>
              <p className="text-neutral-300 text-xs mt-0.5">Março de 2025</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-leather-200 mt-0.5 shrink-0">
              <Heart size={16} />
            </div>
            <div>
              <h3 className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Lema do Clube</h3>
              <p className="text-neutral-300 text-xs mt-0.5">Amizade e Memória Afetiva</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <button
            onClick={() => onExploreClick('sobre')}
            className="flex flex-col items-center text-neutral-500 hover:text-neutral-300 transition-colors focus:outline-none"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest mb-1.5">Conheça o grupo</span>
            <div className="w-[18px] h-7 rounded-full border border-neutral-600 flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-leather-300"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
