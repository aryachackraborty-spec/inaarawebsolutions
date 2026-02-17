
import React from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <div className="pt-32 pb-24 md:pb-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="space-y-12 md:space-y-16">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase mx-auto lg:mx-0">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Deployment Desk
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.05] tracking-tighter text-white">
                Engineer <br className="hidden sm:block"/> Your <span className="text-primary italic">Growth</span>.
              </h1>
              <p className="text-lg md:text-2xl text-slate-400 max-w-xl leading-relaxed font-light mx-auto lg:mx-0 px-4 sm:px-0">
                Ready to deploy? Get in touch with our team to architect a custom growth system for your brand.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 md:gap-12">
              <div className="space-y-4 md:space-y-6 text-center sm:text-left">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Hotlines</h3>
                <div className="flex flex-col gap-4">
                  <a href="tel:7003316830" className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-all flex items-center justify-center sm:justify-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">call</span>
                    700 331 6830
                  </a>
                  <a href="tel:9073568772" className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-all flex items-center justify-center sm:justify-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">call</span>
                    907 356 8772
                  </a>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 text-center sm:text-left">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Direct Access</h3>
                <a href="mailto:hello@inaara.web" className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-all flex items-center justify-center sm:justify-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl">alternate_email</span>
                  hello@inaara.web
                </a>
              </div>
            </div>
          </div>

          <div className="relative group px-2 sm:px-0">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2.5rem] md:rounded-[3.5rem] blur-2xl opacity-50"></div>
            <div className="glass-card p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] relative z-10 border border-white/10">
              
              {status === 'sent' ? (
                <div className="text-center py-16 md:py-24 space-y-8 animate-in fade-in zoom-in duration-500">
                  <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                    <span className="material-symbols-outlined text-6xl text-primary">done_all</span>
                  </div>
                  <h2 className="text-4xl font-black text-white tracking-tighter">System Deployed</h2>
                  <p className="text-slate-400 text-lg">We've received your data packet. Our architects will contact you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-primary font-black uppercase tracking-[0.3em] text-xs hover:underline pt-10"
                  >
                    Send New Signal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Identifier</label>
                      <input required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 md:py-5 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Full Name" type="text" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Data Port</label>
                      <input required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 md:py-5 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Email Address" type="email" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Target Modality</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 md:py-5 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none outline-none cursor-pointer">
                        <option className="bg-navy-deep">AI Sales Funnels</option>
                        <option className="bg-navy-deep">Web Infrastructure</option>
                        <option className="bg-navy-deep">Performance Scaling</option>
                        <option className="bg-navy-deep">Cinematic Creative</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">expand_more</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Project Brief</label>
                    <textarea required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 md:py-5 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none h-32 md:h-40" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button 
                    disabled={status === 'sending'}
                    className="w-full group relative flex items-center justify-center gap-4 bg-primary text-navy-deep font-black text-lg md:text-xl py-5 md:py-6 rounded-2xl neon-glow transition-all active:scale-95 disabled:opacity-50" 
                    type="submit"
                  >
                    {status === 'sending' ? 'Sending Packet...' : 'Initialize Strategy'}
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">bolt</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
