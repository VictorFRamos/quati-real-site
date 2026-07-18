import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Instagram, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    car: '',
    city: 'Quatis',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate beautiful retro transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        car: '',
        city: 'Quatis',
        message: '',
      });
      // Reset success after some time
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-neutral-950 text-neutral-100 relative overflow-hidden">
      {/* Subtle styling lines */}
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-leather-200 font-bold uppercase tracking-widest block mb-2">
            Venha Fazer História Conosco
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Participe do QuatiReal
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Seja para bater papo sobre carburadores, planejar o próximo cruzeiro ou divulgar eventos, você é sempre bem-vindo. Escolha o canal de sua preferência abaixo!
          </p>
          <div className="w-16 h-1 bg-leather-500 mx-auto mt-6 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Action & Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight mb-4">
                  Canais de Comunicação Direta
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                  Nossa turma é ágil e acolhedora. Se preferir entrar em contato imediatamente com um dos nossos administradores, utilize os links diretos abaixo:
                </p>

                {/* Info List */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-neutral-950 rounded border border-neutral-800 text-leather-200 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-white">Região de Atuação</h4>
                      <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">Quatis e Porto Real — RJ</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-neutral-950 rounded border border-neutral-800 text-leather-200 shrink-0">
                      <Instagram size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-white">Nosso Instagram</h4>
                      <a
                        href="https://www.instagram.com/quatireal_carrosantigos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-leather-300 hover:text-white text-xs sm:text-sm mt-0.5 inline-block transition-colors"
                      >
                        @quatireal_carrosantigos
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-neutral-950 rounded border border-neutral-800 text-leather-200 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-white">E-mail Oficial</h4>
                      <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">contato@quatireal.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mega CTA Button for WhatsApp */}
              <div className="pt-6 border-t border-neutral-800/60">
                <a
                  href="https://wa.me/5524999999999?text=Ol%C3%A1%21+Gostaria+de+participar+do+grupo+de+WhatsApp+QuatiReal%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-500 hover:from-amber-400 hover:to-amber-400 text-neutral-950 font-mono text-xs font-extrabold uppercase tracking-widest py-4 px-6 rounded shadow-lg transition-all duration-300 w-full hover:-translate-y-0.5"
                >
                  <MessageSquare size={16} />
                  <span>Entrar no WhatsApp</span>
                </a>
                <p className="text-[10px] text-neutral-500 text-center mt-3 font-mono">
                  🟢 GRUPO ATIVO E MODERADO DIARIAMENTE
                </p>
              </div>
            </div>

            {/* Disclaimer badge box */}
            <div className="p-5 bg-neutral-900/50 border border-neutral-800 rounded-lg flex items-start space-x-3.5">
              <ShieldCheck className="text-leather-300 shrink-0 mt-0.5" size={18} />
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                <strong className="text-neutral-200">Aviso importante:</strong> O QuatiReal é um grupo totalmente voluntário, de finalidade puramente cultural e comunitária, sem qualquer fim comercial. Todos os dados enviados são sigilosos.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 p-8 rounded-lg relative">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight mb-2">
              Envie uma Mensagem
            </h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
              Quer tirar uma dúvida sobre eventos, solicitar adesão do seu antigo à galeria ou falar com a comissão? Preencha os campos abaixo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-leather-600 focus:ring-1 focus:ring-leather-600 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 transition-all outline-none"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    E-mail de Contato *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-leather-600 focus:ring-1 focus:ring-leather-600 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 transition-all outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="car" className="block text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    Seu Carro Antigo (Modelo & Ano)
                  </label>
                  <input
                    type="text"
                    id="car"
                    value={formData.car}
                    onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-leather-600 focus:ring-1 focus:ring-leather-600 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 transition-all outline-none"
                    placeholder="Ex: Opala 1974, Fusca 1968"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    Sua Cidade
                  </label>
                  <select
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-leather-600 focus:ring-1 focus:ring-leather-600 rounded px-4 py-3 text-sm text-white transition-all outline-none"
                  >
                    <option value="Quatis">Quatis</option>
                    <option value="Porto Real">Porto Real</option>
                    <option value="Resende">Resende</option>
                    <option value="Outra">Outra Cidade / Região</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-leather-600 focus:ring-1 focus:ring-leather-600 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 transition-all outline-none resize-none"
                  placeholder="Conte um pouco sobre sua paixão por carros antigos ou tire suas dúvidas..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-neutral-500 font-mono">
                  * Campos obrigatórios de preenchimento
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-neutral-100 hover:bg-white text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider py-3 px-6 rounded transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Visual Success overlay */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-neutral-900 rounded-lg flex flex-col items-center justify-center text-center p-8 z-20"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-emerald-950 rounded-full border border-emerald-500/30 text-emerald-400 mb-4"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h4 className="font-serif text-2xl text-white font-bold tracking-tight">
                    Mensagem Recebida!
                  </h4>
                  <p className="text-neutral-400 text-sm max-w-sm mt-3 leading-relaxed">
                    Muito obrigado pelo seu contato! A transmissão foi enviada com sucesso e nossa comissão de antigos do QuatiReal responderá em breve por e-mail ou telefone.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-xs font-mono font-bold uppercase tracking-wider text-leather-200 hover:text-white"
                  >
                    Voltar ao formulário
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
