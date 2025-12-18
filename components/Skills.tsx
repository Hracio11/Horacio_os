
import React from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';
import { useLanguage } from '../LanguageContext';

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  const renderBlockBar = (level: number) => {
    const totalBlocks = 20;
    const activeBlocks = Math.floor((level / 100) * totalBlocks);
    return (
      <div className="flex gap-0.5 w-full">
        {[...Array(totalBlocks)].map((_, i) => (
          <div 
            key={i} 
            className={`h-4 flex-grow border border-black/10 dark:border-white/10 ${i < activeBlocks ? 'bg-black dark:bg-white' : 'bg-transparent'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-2 group">
      <div className="flex justify-between items-end">
        <span className="font-mono text-[10px] uppercase font-bold tracking-widest group-hover:opacity-100 opacity-60 transition-opacity">
          {skill.name}
        </span>
        <span className="font-mono text-[9px] opacity-40 italic">{skill.level}%_LOAD</span>
      </div>
      {renderBlockBar(skill.level)}
    </div>
  );
};

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const tecnicas = SKILLS.filter(s => s.category === 'Técnica');
  const blandas = SKILLS.filter(s => s.category === 'Blanda');

  return (
    <section className="py-32 px-8 min-h-screen animate-in zoom-in-95 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex items-center justify-between border-b-4 border-black dark:border-white pb-6">
          <div className="space-y-1">
            <span className="font-mono text-[9px] opacity-50 uppercase tracking-[0.5em]">{t.skills.dir}</span>
            <h2 className="text-7xl font-sans font-bold uppercase tracking-tighter">{t.skills.title}</h2>
          </div>
          <div className="hidden md:block font-mono text-right text-[9px] opacity-30 leading-none uppercase">
            OPTIMIZING_CORE_RESOURCES<br/>STABLE_BUILD_2024.X
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="flex items-center gap-6">
              <span className="text-4xl font-bold opacity-10">01</span>
              <h3 className="font-sans font-bold uppercase tracking-widest text-2xl border-l-4 border-black dark:border-white pl-4">{t.skills.tech}</h3>
            </div>
            <div className="space-y-10">
              {tecnicas.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <div className="flex items-center gap-6">
              <span className="text-4xl font-bold opacity-10">02</span>
              <h3 className="font-sans font-bold uppercase tracking-widest text-2xl border-l-4 border-black dark:border-white pl-4">{t.skills.soft}</h3>
            </div>
            <div className="space-y-10">
              {blandas.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 p-12 border-2 border-dashed border-black dark:border-white flex flex-col md:flex-row items-center gap-12">
          <div className="text-4xl animate-spin opacity-20">◌</div>
          <div className="flex-grow space-y-4">
            <p className="font-mono text-xs font-bold uppercase tracking-widest opacity-80">> {t.skills.kernel_desc}</p>
            <div className="h-[1px] bg-black/20 dark:bg-white/20 w-full"></div>
            <p className="font-mono text-[9px] opacity-50 uppercase leading-relaxed">
              KERNEL_CHECK: OK // ADAPTABILITY_LAYER: ACTIVE // COMMUNICATIONS: OPEN // LOCATION: LIMA_PE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
