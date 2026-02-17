
import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudy: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 py-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] mb-8">
            <span className="material-symbols-outlined text-base">deployed_code</span>
            Case Study: Premium Retail
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter mb-8 px-2">
            Scaling to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent neon-text">300% ROI</span> <br className="hidden md:block"/> with AI Automation
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
            A comprehensive look at how we reconstructed a premium lifestyle brand's sales funnel using machine learning and performance creative.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">01. The Mission</h2>
            <h3 className="text-3xl sm:text-5xl font-bold mb-8 leading-tight tracking-tight">Breaking Stagnation</h3>
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
              Facing diminishing returns on traditional ad platforms, the client needed a system that could intelligently identify and capture high-intent audiences without manual intervention.
            </p>
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: 'trending_down', title: 'Ad Spend Waste', desc: "Generic targeting led to a 20% waste in monthly performance budget." },
                { icon: 'speed', title: 'Manual Friction', desc: 'Slow response times on leads resulted in a 40% drop in conversion.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 p-6 glass-card rounded-2xl border border-white/5">
                  <span className="material-symbols-outlined text-primary text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-3xl opacity-50"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASMGpfguzjbAVkIHymx6UYsvs-7rl6dBJp-ZI_rlOxg-hao-nH6wjCvYx0r7m5C3r-AGZxGlaaQFhvFdJfCgK5DUmPdEsqqLBKF26sDBqoDqIHlF9zGlziOtw4lCJG8gz4MPcMQzxFzpZVYpQdFVRFnq-NPOi0RGeAlA4l496rENj2jQZm2HXPYHIhDCsTBvKULuOCmATuh2UEwqFwdbsy1wlKEtRaAtGC17JSTL9WK6TAC9wsjZXc90BYx5NZur-aXBFIV6P1Qzs" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Dashboard metrics" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 md:py-32 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">02. The Data</h2>
            <h3 className="text-4xl sm:text-6xl font-black tracking-tighter">Impact at Scale</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { val: '300%', label: 'ROI Growth', color: 'text-primary' },
              { val: '48%', label: 'Cost Reduction', color: 'text-white' },
              { val: '7x', label: 'Lead Velocity', color: 'text-accent' }
            ].map((metric, i) => (
              <div key={i} className="group p-1 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/30 hover:to-accent/30 transition-all">
                <div className="bg-navy-deep p-12 md:p-16 rounded-[2.4rem] h-full flex flex-col items-center justify-center text-center">
                  <span className={`text-6xl md:text-8xl font-black mb-4 ${metric.color} neon-text group-hover:scale-105 transition-transform`}>{metric.val}</span>
                  <span className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-slate-400">{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-32 max-w-5xl mx-auto px-6">
        <div className="glass-card p-10 md:p-20 rounded-[2.5rem] md:rounded-[3.5rem] text-center relative overflow-hidden border border-white/10">
          <div className="absolute top-0 left-0 p-8 md:p-12 opacity-5">
            <span className="material-symbols-outlined text-[100px] md:text-[150px]">format_quote</span>
          </div>
          <div className="relative z-10">
            <p className="text-xl md:text-4xl font-light leading-relaxed italic mb-12 text-slate-100">
              "The speed at which Inaara deployed our AI sales funnel was incredible. They don't just talk about innovation; they engineer it directly into your P&L."
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/30 p-1">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFwes_kFDUvJYnyLZpWQCMTVziplr9SP5ABhqe5GkF6086Zx7yrDHM5MmZHw1WNrTF7CuLILUsUcGSNGuW665C6WUaKiSA-Cjs3FXJzCcVmCUseVYx-4-ZLx6njC5ID62Nv4aB7l-dy30M1yczc-NicCQiOKVr6eMSbAseHrkbHNEScfGyvFjORybRyDTpMSjLOt6mMeeWtboumvZArveokQuStAnmmuX_GJ_Lh6hyx5XA5yaZiGc-qsirLaGSEv0xI5AC2Z45ez8" 
                  className="w-full h-full rounded-full object-cover" 
                  alt="Client feedback" 
                />
              </div>
              <div>
                <h5 className="font-bold text-xl text-white">Sterling Thorne</h5>
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mt-1">Founding Partner, Thorne & Co.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-40 max-w-7xl mx-auto px-6">
        <div className="relative rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-primary/10 to-accent/10 p-1 border border-white/5">
          <div className="bg-navy-deep/80 backdrop-blur-xl rounded-[2.4rem] md:rounded-[3.9rem] p-10 md:p-24 text-center">
            <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter">Ready for <br className="md:hidden"/> similar results?</h2>
            <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Our AI growth engines are ready for deployment. Book your discovery session to map your brand's future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-navy-deep px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-primary/20">
                Start Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
