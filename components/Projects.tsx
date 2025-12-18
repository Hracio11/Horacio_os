
import React from 'react';
import { PROJECTS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-8 min-h-screen animate-in slide-in-from-right-10 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-20">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-black dark:bg-white"></span>
              <span className="font-mono text-[10px] opacity-50 uppercase tracking-widest">{t.projects.dir}</span>
            </div>
            <h2 className="text-6xl font-sans font-bold uppercase tracking-tighter">{t.projects.title}</h2>
          </div>
          <div className="font-mono text-[9px] opacity-40 uppercase">
            {t.projects.total}: 03 // BROWSER: READY
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group border border-black dark:border-white flex flex-col hover:shadow-[12px_12px_0px_rgba(0,0,0,0.1)] dark:hover:shadow-[12px_12px_0px_rgba(255,255,255,0.05)] transition-all duration-300 bg-white dark:bg-black"
            >
              <div className="relative aspect-video overflow-hidden border-b border-black dark:border-white">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 text-[8px] font-bold">
                  ID_{project.id}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-sans font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform">
                  {project.title}
                </h3>
                
                <p className="text-[11px] font-mono leading-relaxed opacity-60 mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[8px] bg-black/5 dark:bg-white/10 px-2 py-1 font-mono uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="block w-full py-4 bg-transparent border border-black dark:border-white font-mono text-[9px] font-bold uppercase text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                  {t.projects.access}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
