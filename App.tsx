
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import { useLanguage } from './LanguageContext';

type View = 'HOME' | 'PROJECTS' | 'SKILLS' | 'CONTACT';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeView, setActiveView] = useState<View>('HOME');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const changeView = (view: View) => {
    if (view === activeView) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveView(view);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 400);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderView = () => {
    switch (activeView) {
      case 'HOME': return <Hero />;
      case 'PROJECTS': return <Projects />;
      case 'SKILLS': return <Skills />;
      case 'CONTACT': return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 min-h-screen font-mono flex flex-col overflow-x-hidden">
      {/* Glitch Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center pointer-events-none animate-pulse">
          <div className="text-white text-xs font-mono tracking-[0.5em] uppercase">
            DECODIFICANDO_MODULO_{activeView}...
          </div>
        </div>
      )}

      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        activeView={activeView} 
        onViewChange={changeView} 
      />
      
      <main className={`flex-grow relative z-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="min-h-[80vh]">
          {renderView()}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-40 bg-white/90 dark:bg-black/90 border-t border-black dark:border-white px-8 py-2 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-widest">
        <div className="flex gap-4">
          <span className="opacity-50">SYS_V1.0</span>
          <span className="hidden md:inline border-l border-black dark:border-white pl-4">CPU_LOAD: 1.2%</span>
          <span className="hidden md:inline border-l border-black dark:border-white pl-4">LATENCY: 14MS</span>
        </div>
        
        <div className="font-bold flex gap-6">
          <span className="animate-pulse">● CONNECTED_TO: LIMA_PE</span>
          <div className="flex gap-4 opacity-50">
            <a href="#" className="hover:text-black dark:hover:text-white">GH</a>
            <a href="#" className="hover:text-black dark:hover:text-white">LI</a>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
