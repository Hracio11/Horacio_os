
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xldgkrvq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error();
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-8 border-t border-black dark:border-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-5xl font-sans font-bold uppercase tracking-tighter">{t.contact.title}</h2>
            <div className="font-mono text-xs space-y-4 opacity-70">
              <p>> {t.contact.email}: rehoracio2015@gmail.com</p>
              <p>> {t.contact.location}: {t.contact.base}</p>
            </div>
            <div className="pt-8 border-t border-black/10 dark:border-white/10">
              <p className="font-mono text-[10px] leading-tight italic">
                "{t.contact.quote}"
              </p>
            </div>
          </div>

          <div className="border border-black dark:border-white p-8 bg-black/5 dark:bg-white/5 relative">
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center font-mono text-center space-y-4">
                <div className="text-4xl animate-pulse">●</div>
                <p className="text-xs uppercase tracking-widest">{t.contact.form.success}</p>
                <button onClick={() => setStatus('idle')} className="underline text-[10px] uppercase">{t.contact.form.new}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="font-mono text-[9px] uppercase opacity-50">{t.contact.form.sender}</label>
                  <input 
                    required type="text" placeholder={t.contact.form.name_ph}
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 p-2 font-mono text-sm focus:border-black dark:focus:border-white outline-none placeholder:opacity-20 uppercase"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-[9px] uppercase opacity-50">{t.contact.form.return}</label>
                  <input 
                    required type="email" placeholder={t.contact.form.email_ph}
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 p-2 font-mono text-sm focus:border-black dark:focus:border-white outline-none placeholder:opacity-20 uppercase"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-[9px] uppercase opacity-50">{t.contact.form.data}</label>
                  <textarea 
                    required rows={3} placeholder={t.contact.form.msg_ph}
                    value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 p-2 font-mono text-sm focus:border-black dark:focus:border-white outline-none resize-none placeholder:opacity-20 uppercase"
                  ></textarea>
                </div>
                <button 
                  type="submit" disabled={status === 'sending'}
                  className="w-full py-4 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase hover:invert transition-all border border-black dark:border-white"
                >
                  {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
                </button>
                {status === 'error' && <p className="text-[9px] font-mono text-red-500 uppercase mt-2">{t.contact.form.error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
