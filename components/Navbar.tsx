
import React from 'react';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  activeView: string;
  onViewChange: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, activeView, onViewChange }) => {
  const { language, setLanguage, t } = useLanguage();

  const NavItem = ({ view, label }: { view: string, label: string }) => (
    <button 
      onClick={() => onViewChange(view)}
      className={`relative py-1 transition-all hover:tracking-widest ${activeView === view ? 'font-bold line-through' : 'opacity-50 hover:opacity-100'}`}
    >
      {label}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 backdrop-blur-sm bg-white/80 dark:bg-black/80 border-b border-black dark:border-white">
      <div className="flex items-center gap-4">
        <button onClick={() => onViewChange('HOME')} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 bg-black dark:bg-white flex items-center justify-center font-bold text-white dark:text-black text-[10px]">
            HR
          </div>
          <span className="font-mono text-xs tracking-tighter font-bold uppercase">
            HORACIO_OS
          </span>
        </button>
      </div>
      
      <div className="flex items-center gap-4 md:gap-8 text-[10px] font-mono tracking-widest uppercase">
        <div className="hidden lg:flex gap-6">
          <NavItem view="HOME" label={t.nav.home} />
          <NavItem view="PROJECTS" label={t.nav.projects} />
          <NavItem view="SKILLS" label={t.nav.skills} />
          <NavItem view="CONTACT" label={t.nav.contact} />
        </div>
        
        <div className="flex border border-black dark:border-white overflow-hidden text-[9px]">
          <button 
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 transition-all ${language === 'en' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('es')}
            className={`px-2 py-1 transition-all ${language === 'es' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
          >
            ES
          </button>
        </div>

        <button 
          onClick={toggleTheme}
          className="hidden md:block w-8 h-8 flex items-center justify-center border border-black dark:border-white hover:invert transition-all text-[8px]"
        >
          {isDarkMode ? '○' : '●'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
