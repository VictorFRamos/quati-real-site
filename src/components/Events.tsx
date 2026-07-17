import { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { EVENTS } from '../data';
import { ClubEvent } from '../types';

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Quatis' | 'Porto Real' | 'Região'>('all');

  const filteredEvents = EVENTS.filter(event => {
    if (activeFilter === 'all') return true;
    return event.city === activeFilter;
  });

  const handleInterestedClick = (eventTitle: string) => {
    const formattedTitle = encodeURIComponent(eventTitle);
    const whatsappUrl = `https://wa.me/5524999999999?text=Ol%C3%A1%21+Tenho+interesse+em+participar+do+evento%3A+${formattedTitle}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="eventos" className="py-24 bg-stone-50 vintage-grain border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-leather-600 font-bold uppercase tracking-widest block mb-2">
            Roteiros & Exposições
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-tight">
            Agenda de Encontros
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Nossos motores não ficam parados na garagem! Confira os próximos passeios em comboio, encontros mensais e eventos beneficentes em nossa região.
          </p>
          <div className="w-16 h-1 bg-leather-600 mx-auto mt-6 rounded" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="inline-flex items-center space-x-1.5 text-neutral-500 font-mono text-xs mr-3 py-1.5">
            <Filter size={14} />
            <span>Filtrar Cidade:</span>
          </div>
          
          {(['all', 'Quatis', 'Porto Real', 'Região'] as const).map((city) => (
            <button
              key={city}
              onClick={() => setActiveFilter(city)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase border transition-all duration-300 focus:outline-none cursor-pointer ${
                activeFilter === city
                  ? 'bg-[#3f4e3c] text-white border-[#3f4e3c] shadow-sm'
                  : 'bg-white text-neutral-600 border-stone-200 hover:text-[#3f4e3c] hover:border-[#3f4e3c]'
              }`}
            >
              {city === 'all' ? 'Ver Todos' : city}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event: ClubEvent) => (
              <div
                key={event.id}
                className={`flex flex-col justify-between bg-white rounded-lg border transition-all duration-300 relative overflow-hidden group ${
                  event.isFeatured
                    ? 'border-amber-400/80 shadow-md shadow-amber-500/[0.03]'
                    : 'border-stone-200 hover:border-stone-300 hover:shadow-md'
                }`}
              >
                {/* Featured Badge */}
                {event.isFeatured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-leather-600 text-neutral-950 px-4 py-1.5 rounded-bl-lg font-mono text-[9px] font-bold uppercase tracking-widest flex items-center space-x-1">
                    <Sparkles size={10} />
                    <span>Destaque Mensal</span>
                  </div>
                )}

                {/* Card Main Block */}
                <div className="p-6 sm:p-8">
                  {/* Location Tag */}
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-leather-600 bg-amber-50 border border-amber-200/50 px-2 py-1 rounded">
                    {event.city}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 mt-4 mb-5 group-hover:text-leather-700 transition-colors duration-300 tracking-tight font-bold">
                    {event.title}
                  </h3>

                  {/* Time/Place/Calendar Stamps */}
                  <div className="space-y-3.5 pt-1.5 border-t border-stone-100 mb-6">
                    <div className="flex items-center text-neutral-700 text-xs sm:text-sm font-light">
                      <Calendar className="text-[#3f4e3c] mr-3 shrink-0" size={16} />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-neutral-700 text-xs sm:text-sm font-light">
                      <Clock className="text-[#3f4e3c] mr-3 shrink-0" size={16} />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start text-neutral-700 text-xs sm:text-sm font-light">
                      <MapPin className="text-[#3f4e3c] mr-3 mt-0.5 shrink-0" size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="px-6 pb-6 pt-4 border-t border-stone-100 bg-stone-50/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-neutral-400">Não comercial</span>
                  
                  <button
                    onClick={() => handleInterestedClick(event.title)}
                    className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-leather-600 hover:text-leather-800 transition-colors duration-300 focus:outline-none cursor-pointer"
                  >
                    <span>Quero Ir</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 lg:col-span-3 text-center py-16 bg-white rounded-lg border border-stone-200">
              <span className="text-2xl">⏳</span>
              <h3 className="font-serif text-lg font-bold text-neutral-900 mt-3 mb-1">Nenhum evento agendado</h3>
              <p className="text-neutral-500 text-xs sm:text-sm max-w-md mx-auto">
                Não encontramos encontros registrados nesta categoria por enquanto. Fale com a gente no WhatsApp para sugerir um roteiro ou conferir encontros relâmpago!
              </p>
            </div>
          )}
        </div>

        {/* Suggest an event banner */}
        <div className="mt-16 bg-[#3f4e3c] text-stone-100 rounded-lg p-6 sm:p-10 shadow-lg border border-[#2d382c] relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          {/* Subtle tire track overlay on background */}
          <div className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left mb-6 md:mb-0 max-w-xl">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight">
              Organizando uma exposição na sua cidade?
            </h3>
            <p className="text-stone-200/80 text-xs sm:text-sm mt-2 font-light">
              Nossa comunidade apoia a cultura regional de restauração e exibição de antigos. Compartilhe os panfletos conosco e mobilizaremos a comitiva QuatiReal!
            </p>
          </div>

          <a
            href="https://wa.me/5524999999999?text=Ol%C3%A1%21+Gostaria+de+divulgar+um+evento+de+carros+antigos+no+grupo+QuatiReal%21"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-leather-500 hover:from-amber-400 hover:to-leather-400 text-neutral-950 font-mono text-xs font-bold uppercase tracking-widest py-3 px-6 rounded shadow"
          >
            <span>Divulgar Encontro</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
