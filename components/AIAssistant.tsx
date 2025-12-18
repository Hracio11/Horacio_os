
import React, { useState, useRef, useEffect } from 'react';
import { askHoracioAI } from '../services/geminiService';
import { Message } from '../types';
import { useLanguage } from '../LanguageContext';

const AIAssistant: React.FC = () => {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: t.ai.init }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync initial message when language changes
  useEffect(() => {
    if (messages.length === 1) {
      setMessages([{ role: 'model', text: t.ai.init }]);
    }
  }, [language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askHoracioAI(userMsg, language);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-black dark:bg-white border border-white dark:border-black flex items-center justify-center hover:scale-105 transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0px_rgba(255,255,255,0.2)]"
      >
        <div className={`font-mono text-xs font-bold text-white dark:text-black ${isOpen ? 'animate-pulse' : ''}`}>
          {isOpen ? 'X' : 'IA'}
        </div>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 z-[100] w-[calc(100vw-4rem)] md:w-[400px] h-[500px] bg-white dark:bg-black border-2 border-black dark:border-white flex flex-col shadow-[8px_8px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.1)] animate-in fade-in slide-in-from-bottom-2 duration-200">
          
          <div className="p-3 border-b-2 border-black dark:border-white flex items-center justify-between bg-black dark:bg-white text-white dark:text-black">
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-white dark:bg-black rounded-full animate-pulse"></span>
              CORE_AI_LINK v1.0
            </span>
            <span className="font-mono text-[10px] opacity-50 uppercase">{language === 'es' ? 'LIMA_PE' : 'LIMA_WORLD'}</span>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 space-y-6 overflow-y-auto font-mono text-[11px] selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
            {messages.map((m, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between opacity-30 text-[9px] uppercase tracking-tighter">
                  <span>{m.role === 'user' ? t.ai.input : t.ai.output}</span>
                  <span>{new Date().toLocaleTimeString()}</span>
                </div>
                <div className={`leading-relaxed ${m.role === 'user' ? 'pl-4 border-l-2 border-black dark:border-white italic opacity-80' : ''}`}>
                  {m.role === 'model' && <span className="mr-2">></span>}
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2">
                <span className="animate-spin text-lg">◌</span>
                <span className="animate-pulse opacity-50 uppercase text-[9px]">{t.ai.calculating}</span>
              </div>
            )}
          </div>

          <div className="p-4 border-t-2 border-black dark:border-white">
            <div className="flex gap-2 items-center">
              <span className="font-mono text-xs font-bold dark:text-white">$</span>
              <input 
                type="text" 
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.ai.placeholder}
                className="flex-grow bg-transparent border-none font-mono text-xs focus:ring-0 outline-none p-0 dark:text-white placeholder:opacity-20 uppercase"
              />
            </div>
            <div className="mt-2 h-[1px] bg-black/10 dark:bg-white/10"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
