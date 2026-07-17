import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Calendar, User, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    setCurrentIndex(-1);
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    const newIdx = currentIndex === 0 ? GALLERY.length - 1 : currentIndex - 1;
    setSelectedItem(GALLERY[newIdx]);
    setCurrentIndex(newIdx);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    const newIdx = currentIndex === GALLERY.length - 1 ? 0 : currentIndex + 1;
    setSelectedItem(GALLERY[newIdx]);
    setCurrentIndex(newIdx);
  };

  return (
    <section id="galeria" className="py-24 bg-neutral-950 text-neutral-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-leather-200 font-bold uppercase tracking-widest block mb-2">
            Nossos Relíquias
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Galeria do Grupo
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Um vislumbre das máquinas que desfilam conosco por Quatis e Porto Real. Carros restaurados com esmero, paciência e paixão pelos nossos membros.
          </p>
          <div className="w-16 h-1 bg-leather-500 mx-auto mt-6 rounded" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, index)}
              className="group cursor-pointer bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with Overlay */}
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-950 select-none">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Hover Reveal overlay */}
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="text-white" size={20} />
                  </div>
                </div>

                {/* Corner Year Indicator stamp */}
                <div className="absolute bottom-3 right-3 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800/80 px-2 py-1 rounded text-[10px] font-mono text-leather-200 tracking-wider font-semibold">
                  {item.year}
                </div>
              </div>

              {/* Caption metadata */}
              <div className="p-5">
                <h3 className="font-serif text-lg text-white font-bold tracking-tight">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-neutral-400 text-xs mt-2 font-mono">
                  <span className="flex items-center">
                    <User size={12} className="text-leather-300 mr-1.5" />
                    <span>Dono: {item.owner || 'Comunidade'}</span>
                  </span>
                  <span className="text-neutral-500 text-[10px]">VER DETALHES</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action inside gallery */}
        <div className="mt-16 text-center">
          <p className="text-neutral-400 text-xs sm:text-sm font-light">
            Tem um clássico na garagem e reside nas redondezas? Venha tirá-lo da poeira!
          </p>
          <a
            href="https://wa.me/5524999999999?text=Ol%C3%A1%21+Tenho+um+carro+antigo+e+gostaria+de+enviar+fotos+para+a+galeria+do+QuatiReal%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-leather-200 hover:text-white mt-3 border-b border-leather-600 pb-1 hover:border-white transition-colors duration-200"
          >
            <span>Enviar fotos do meu antigo</span>
          </a>
        </div>

        {/* Lightbox Modal Overlay (SPA constraint friendly) */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-neutral-900 border border-neutral-800 rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 p-2 bg-neutral-950/60 rounded-full text-neutral-400 hover:text-white border border-neutral-800/80 hover:bg-neutral-900 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                {/* Image Section */}
                <div className="relative md:w-3/5 bg-neutral-950 flex items-center justify-center select-none aspect-4/3 md:aspect-auto">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover max-h-[80vh]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Arrow controls inside lightbox */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 p-2 rounded-full bg-neutral-950/40 text-white/70 hover:text-white hover:bg-neutral-950/75 border border-white/10 transition-all focus:outline-none cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 p-2 rounded-full bg-neutral-950/40 text-white/70 hover:text-white hover:bg-neutral-950/75 border border-white/10 transition-all focus:outline-none cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Details Section */}
                <div className="p-6 sm:p-8 md:w-2/5 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-leather-200 border border-leather-800 bg-leather-950/40 px-2 py-0.5 rounded tracking-wider uppercase">
                      Antigo Cadastrado
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mt-3 mb-4">
                      {selectedItem.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6 font-mono text-xs text-neutral-300">
                      <div className="flex items-center">
                        <Calendar size={14} className="text-leather-300 mr-2.5 shrink-0" />
                        <span className="text-neutral-400">Ano de Fabricação:</span>
                        <span className="text-white ml-1.5 font-medium">{selectedItem.year}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="text-leather-300 mr-2.5 shrink-0" />
                        <span className="text-neutral-400">Proprietário:</span>
                        <span className="text-white ml-1.5 font-medium">{selectedItem.owner || 'Grupo'}</span>
                      </div>
                    </div>

                    <p className="text-neutral-300 text-sm font-light leading-relaxed border-t border-neutral-800/80 pt-4">
                      {selectedItem.description || 'Um belo exemplar que traz nostalgia, história e contribui para o acervo de amizades do nosso querido QuatiReal.'}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-neutral-500 text-[10px] font-mono">
                      <Heart size={10} className="text-red-600 animate-pulse" />
                      <span>Preservado com carinho</span>
                    </div>
                    
                    <a
                      href={`https://wa.me/5524999999999?text=Ol%C3%A1%21+Vi+o+lindo+carro+${encodeURIComponent(selectedItem.title)}+na+galeria+do+QuatiReal+e+fiquei+encantado%21`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-leather-200 hover:text-white uppercase tracking-wider"
                    >
                      Mandar Mensagem
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
