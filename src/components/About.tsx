import { motion } from 'motion/react';
import { Wrench, Compass, Award, Heart, ShieldCheck } from 'lucide-react';
import { CLUB_LOGO } from '../data';

export default function About() {
  const values = [
    {
      icon: <Compass className="text-leather-600" size={20} />,
      title: 'Passeios e Viagens',
      description: 'Organizamos roteiros e comboios pelas charmosas estradas rurais e históricas do sul fluminense, esticando as pernas dos nossos clássicos.',
    },
    {
      icon: <Wrench className="text-leather-600" size={20} />,
      title: 'Manutenção & Dicas',
      description: 'Compartilhamos indicações de mecânicos qualificados, oficinas de funilaria confiáveis, fornecedores de peças originais e truques de garagem.',
    },
    {
      icon: <Heart className="text-leather-600" size={20} />,
      title: 'Amizades e Memórias',
      description: 'Mais do que uma garagem, acumulamos memórias afetivas. Cada clássico carrega histórias de família e sorrisos que preservamos juntos.',
    },
    {
      icon: <Award className="text-leather-600" size={20} />,
      title: 'Eventos Regionais',
      description: 'Divulgamos e marcamos presença em encontros e exposições beneficentes da região para fomentar a cultura do antigomobilismo.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-stone-100 vintage-grain border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-leather-600 font-bold uppercase tracking-widest block mb-2">
            Nossa História e Propósito
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-tight">
            Mais que máquinas de ferro, <br />
            preservamos memórias sobre rodas.
          </h2>
          <div className="w-16 h-1 bg-leather-600 mx-auto mt-6 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-neutral-800 text-base sm:text-lg font-light leading-relaxed">
              O <strong className="font-medium text-neutral-950">QuatiReal - Grupo de Carros Antigos</strong> nasceu da paixão genuína de um grupo de amigos das vizinhas cidades de <strong className="font-semibold text-neutral-950">Quatis</strong> e <strong className="font-semibold text-neutral-950">Porto Real</strong>, no estado do Rio de Janeiro. 
            </p>
            
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              Criado oficialmente em <strong className="font-medium text-neutral-900">Março de 2025</strong>, nosso propósito primordial é resgatar e valorizar a memória afetiva ligada aos veículos clássicos. Acreditamos que cada carro antigo é uma obra de arte industrial e um cápsula do tempo repleta de lembranças preciosas.
            </p>
            
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              Nossa comunidade serve como um porto seguro para troca de conhecimento prático de restauração, indicação de peças escassas, roteiros de passeios de fim de semana e divulgação de encontros regionais. Aqui, o respeito mútuo impera e as amizades formadas valem muito mais do que os cavalos de força do motor.
            </p>

            {/* Grid of Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {values.map((val, idx) => (
                <div key={idx} className="flex space-x-3.5 bg-white/60 p-4 rounded border border-stone-200/50 hover:bg-white hover:shadow-sm transition-all duration-200">
                  <div className="p-2 h-fit rounded bg-amber-100/60 border border-amber-200/40 mt-0.5">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-neutral-900">{val.title}</h4>
                    <p className="text-neutral-600 text-xs mt-1.5 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Display Frame (Badge / Club Emblem Display) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-6 bg-white rounded-lg shadow-xl border border-stone-200/60 max-w-sm w-full">
              {/* Outer classic photo frame border style */}
              <div className="absolute inset-4 border border-stone-300/40 pointer-events-none rounded" />
              
              <div className="relative aspect-square overflow-hidden rounded border-2 border-stone-100 bg-neutral-950 shadow-inner">
                <img
                  src={CLUB_LOGO}
                  alt="Emblema QuatiReal"
                  className="w-full h-full object-cover p-2"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vintage metallic overlay highlights */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
              </div>

              {/* Badge inscription */}
              <div className="pt-6 text-center">
                <div className="inline-flex items-center space-x-1.5 text-leather-600 font-mono text-[10px] font-bold uppercase tracking-widest mb-1.5">
                  <ShieldCheck size={12} />
                  <span>Membro Oficial do Sul Fluminense</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900 tracking-tight">
                  Quati Real Club
                </h3>
                <p className="font-mono text-xs text-neutral-500 mt-1 uppercase tracking-wider">
                  Fundado em Março • 2025
                </p>
                <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="border-r border-stone-100">
                    <span className="block text-neutral-400 text-[10px] uppercase">Cidades</span>
                    <span className="block text-neutral-800 font-medium mt-0.5">Quatis & P. Real</span>
                  </div>
                  <div>
                    <span className="block text-neutral-400 text-[10px] uppercase">Foco</span>
                    <span className="block text-neutral-800 font-medium mt-0.5">Antigomobilismo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
