import { Quote, MessageSquare } from 'lucide-react';
import { MEMBER_QUOTES } from '../data';
import { MemberQuote } from '../types';

export default function MemberQuotes() {
  return (
    <section id="depoimentos" className="py-24 bg-stone-100 vintage-grain border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-leather-600 font-bold uppercase tracking-widest block mb-2">
            Vozes da Nossa Família
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-tight">
            Depoimentos dos Membros
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Nossa paixão se alimenta de conexões reais. Veja o que dizem alguns dos proprietários que fazem parte da comitiva QuatiReal.
          </p>
          <div className="w-16 h-1 bg-leather-600 mx-auto mt-6 rounded" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBER_QUOTES.map((mq: MemberQuote) => (
            <div
              key={mq.id}
              className="bg-white p-8 rounded-lg shadow-sm border border-stone-200/60 relative flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-amber-100 select-none pointer-events-none">
                <Quote size={40} className="stroke-[1.5]" />
              </div>

              {/* Quote text */}
              <div className="relative z-10">
                <p className="text-neutral-700 text-sm sm:text-base font-light italic leading-relaxed mb-6">
                  "{mq.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-stone-100 pt-5 flex items-center space-x-3.5 mt-auto">
                {/* Visual Avatar Placeholder representing classic mechanical stamp */}
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center font-serif text-sm font-bold text-leather-700 select-none shrink-0">
                  {mq.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-neutral-950">
                    {mq.name}
                  </h4>
                  <p className="font-mono text-[10px] text-neutral-500 mt-0.5">
                    {mq.car}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation text */}
        <div className="mt-16 text-center max-w-xl mx-auto p-6 bg-amber-50/50 rounded-lg border border-amber-200/30">
          <p className="text-neutral-700 text-xs sm:text-sm font-light">
            Queremos que você e seu clássico façam parte destas histórias também. Não importa a marca, o ano ou o estado de conservação: as portas estão sempre abertas!
          </p>
          <a
            href="https://wa.me/5524999999999?text=Ol%C3%A1%21+Gostaria+de+me+juntar+ao+grupo+QuatiReal+e+compartilhar+minha+hist%C3%B3ria%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-leather-700 hover:text-leather-900 mt-3"
          >
            <MessageSquare size={14} />
            <span>Compartilhar minha paixão</span>
          </a>
        </div>

      </div>
    </section>
  );
}
