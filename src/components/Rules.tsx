import { ReactNode } from 'react';
import { Ban, AlertTriangle, CheckCircle, ShieldAlert, HeartHandshake, EyeOff, Scale, HelpCircle } from 'lucide-react';
import { RULES } from '../data';
import { RuleItem, RuleType } from '../types';

export default function Rules() {
  
  const getRuleStyle = (type: RuleType) => {
    switch (type) {
      case 'forbidden':
        return {
          icon: <Ban className="text-red-600" size={24} />,
          badge: 'bg-red-50 text-red-700 border-red-200',
          badgeLabel: 'Proibido',
          cardBorder: 'hover:border-red-300 hover:shadow-red-500/[0.03]',
          leftBar: 'bg-red-600',
        };
      case 'warning':
        return {
          icon: <AlertTriangle className="text-amber-600" size={24} />,
          badge: 'bg-amber-50 text-amber-700 border-amber-200',
          badgeLabel: 'Atenção',
          cardBorder: 'hover:border-amber-300 hover:shadow-amber-500/[0.03]',
          leftBar: 'bg-amber-500',
        };
      case 'allowed':
        return {
          icon: <CheckCircle className="text-emerald-600" size={24} />,
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          badgeLabel: 'Liberado',
          cardBorder: 'hover:border-emerald-300 hover:shadow-emerald-500/[0.03]',
          leftBar: 'bg-emerald-600',
        };
    }
  };

  // Assign specific icons for rule context
  const getRuleIcon = (id: string, defaultIcon: ReactNode): ReactNode => {
    switch (id) {
      case 'r1': // Futebol
        return <ShieldAlert className="text-red-600" size={22} />;
      case 'r2': // Política
        return <Scale className="text-red-600" size={22} />;
      case 'r3': // Adulto
        return <EyeOff className="text-red-600" size={22} />;
      case 'r4': // Respeito
        return <HeartHandshake className="text-amber-600" size={22} />;
      default:
        return defaultIcon;
    }
  };

  return (
    <section id="regras" className="py-24 bg-neutral-950 text-neutral-100 relative overflow-hidden">
      {/* Decorative mechanical gear in background */}
      <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 text-neutral-900/40 pointer-events-none rotate-12 select-none font-sans font-extrabold text-[300px]">
        ⚙️
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 border-b border-neutral-800 pb-8">
          <div>
            <span className="font-mono text-xs text-leather-200 font-bold uppercase tracking-widest block mb-2">
              Manual de Conduta
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
              Regras da Comunidade
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm mt-4 md:mt-0 font-light">
            Para manter o clima leve, acolhedor e totalmente focado no antigomobilismo, estabelecemos diretrizes claras de convivência em nossos canais oficiais do WhatsApp.
          </p>
        </div>

        {/* Rules Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RULES.map((rule: RuleItem) => {
            const styles = getRuleStyle(rule.type);
            const finalIcon = getRuleIcon(rule.id, styles.icon);

            return (
              <div
                key={rule.id}
                className={`relative flex flex-col justify-between bg-neutral-900 rounded-lg p-6 border border-neutral-800 transition-all duration-300 ${styles.cardBorder} hover:-translate-y-1`}
              >
                {/* Thick vertical indicator bar */}
                <div className={`absolute top-0 left-0 bottom-0 w-1.5 rounded-l-lg ${styles.leftBar}`} />
                
                <div className="pl-2">
                  {/* Top line: Icon and status badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-neutral-950 rounded border border-neutral-800">
                      {finalIcon}
                    </div>
                    <span className={`font-mono text-[9px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded ${styles.badge}`}>
                      {styles.badgeLabel}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="font-serif text-lg font-bold text-white mb-2 tracking-tight">
                    {rule.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                {/* Card footer indicator for visual polish */}
                <div className="pl-2 pt-6 mt-4 border-t border-neutral-800/60 flex items-center justify-between text-neutral-500 font-mono text-[9px] uppercase tracking-wider">
                  <span>Código QuatiReal</span>
                  <span>{rule.id.toUpperCase()}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warning Callout Footer */}
        <div className="mt-16 bg-gradient-to-r from-olive-900/50 via-neutral-900/60 to-transparent border border-olive-800/40 p-6 rounded-lg max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
          <div className="p-3 bg-olive-900/80 rounded border border-olive-700/50 text-leather-200 shrink-0">
            <HelpCircle size={24} />
          </div>
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-1.5">
              Por que temos regras tão rígidas?
            </h4>
            <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
              O QuatiReal foi feito para ser um oásis de descontração no dia a dia. Evitando debates acalorados sobre futebol e política partidária, garantimos que todos os membros — independentemente de suas preferências pessoais — sintam-se bem-vindos para conversar sobre restauração, mecânica e planejar passeios de domingo em clima de união.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
