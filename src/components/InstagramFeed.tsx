import { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Calendar, ChevronRight } from 'lucide-react';
import { INSTAGRAM_POSTS, CLUB_LOGO } from '../data';
import { InstagramPost } from '../types';

export default function InstagramFeed() {
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null);

  return (
    <section id="instagram" className="py-24 vintage-paper border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Profile Header */}
        <div className="bg-white rounded-xl shadow-md border border-stone-200/80 p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Circular Profile Pic with outer ring */}
            <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-red-500 to-purple-600">
              <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
                <img 
                  src={CLUB_LOGO} 
                  alt="Logo Quati Real" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-950">
                  quatireal_carrosantigos
                </h3>
                {/* Verified Blue-ish Badge */}
                <span className="inline-flex items-center justify-center bg-sky-500 text-white rounded-full p-0.5 text-[8px] font-bold h-4 w-4" title="Página Oficial">
                  ✓
                </span>
              </div>
              
              <p className="font-mono text-xs text-neutral-500 mt-1">
                @quatireal_carrosantigos
              </p>
              
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-3 text-sm text-neutral-700">
                <span><strong>10</strong> publicações</span>
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                <span>Porto Real & Quatis - RJ</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="https://www.instagram.com/quatireal_carrosantigos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2.5 px-6 py-3 bg-gradient-to-tr from-amber-500 via-red-500 to-amber-500 hover:opacity-95 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-all duration-300 w-full sm:w-auto"
            >
              <Instagram size={16} />
              <span>Seguir no Instagram</span>
            </a>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs text-leather-600 font-bold uppercase tracking-widest block mb-2">
            Feed de Notícias & Eventos
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-tight">
            Nossos Últimos Momentos
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Acompanhe a atividade em tempo real do nosso grupo. Encontros, carros raros, bastidores e histórias memoráveis compartilhadas diretamente no nosso canal oficial.
          </p>
          <div className="w-16 h-1 bg-leather-600 mx-auto mt-6 rounded" />
        </div>

        {/* 10 Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {INSTAGRAM_POSTS.map((post: InstagramPost) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-stone-200/60 transition-all duration-300 flex flex-col h-full"
              onMouseEnter={() => setHoveredPostId(post.id)}
              onMouseLeave={() => setHoveredPostId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-neutral-900 shrink-0">
                <img
                  src={post.imageUrl}
                  alt="Post do Instagram"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Instagram Overlay on Hover */}
                <div className={`absolute inset-0 bg-neutral-900/60 flex items-center justify-center gap-6 transition-opacity duration-300 ${
                  hoveredPostId === post.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center text-white gap-1.5 font-mono text-sm font-semibold">
                    <Heart size={20} className="fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center text-white gap-1.5 font-mono text-sm font-semibold">
                    <MessageCircle size={20} className="fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                
                {/* Instagram Icon Badge */}
                <div className="absolute top-3 right-3 bg-white/90 text-neutral-900 p-1.5 rounded-full shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <Instagram size={14} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                {/* Caption text with excerpt */}
                <p className="text-neutral-700 text-xs font-light line-clamp-3 leading-relaxed mb-4">
                  {post.caption}
                </p>
                
                {/* Post Date & External Link icon */}
                <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-[10px] font-mono text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={10} />
                    <span>{post.date}</span>
                  </div>
                  <span className="text-leather-600 font-bold group-hover:text-amber-600 transition-colors flex items-center gap-0.5">
                    VER POST <ExternalLink size={10} className="ml-0.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/quatireal_carrosantigos/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-leather-600 hover:bg-leather-600 hover:text-white text-leather-700 font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300"
          >
            <span>Ver perfil completo no Instagram</span>
            <ChevronRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
