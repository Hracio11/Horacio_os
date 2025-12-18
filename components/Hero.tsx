
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[100vh] flex flex-col items-center justify-center pt-20 px-8 overflow-hidden animate-in fade-in duration-500">
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      
      <div className="relative z-10 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="space-y-6 flex-grow">
            <div className="inline-block px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[9px] font-mono tracking-[0.4em] uppercase">
              {t.hero.status}
            </div>
            
            <h1 className="text-7xl md:text-[140px] font-sans font-bold tracking-tighter leading-[0.8] uppercase flex flex-col">
              <span>Horacio</span>
              <span className="opacity-20 italic">Rojas Erazo</span>
            </h1>

            <div className="font-mono text-sm border-l-2 border-black dark:border-white pl-6 space-y-2 opacity-70 uppercase max-w-xl">
              <p>> {t.hero.role}</p>
              <p>> {t.hero.specialty}</p>
            </div>
          </div>

          <div className="w-full md:w-80 space-y-6">
            <div className="border border-black dark:border-white p-6 bg-black/5 dark:bg-white/5">
              <div className="text-[10px] mb-4 opacity-50 uppercase tracking-widest">Global_Status</div>
              <div className="space-y-2 font-mono text-[10px]">
                <div className="flex justify-between"><span>LOCATION:</span> <span>LIMA_PE</span></div>
                <div className="flex justify-between"><span>EXPERIENCE:</span> <span>5+ YRS</span></div>
                <div className="flex justify-between"><span>STACK:</span> <span>FULL_STACK</span></div>
                <div className="flex justify-between"><span>AVAILABILITY:</span> <span className="text-green-500 animate-pulse">TRUE</span></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <button className="w-full py-4 border border-black dark:border-white font-mono text-xs uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                {t.hero.cta_secondary}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-10 text-[8px] opacity-20 rotate-90 origin-right tracking-[1em] uppercase">
        INITIATING_CORE_SERVICES...
      </div>
    </section>
  );
};

export default Hero;
