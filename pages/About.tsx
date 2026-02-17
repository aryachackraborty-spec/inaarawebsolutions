
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 md:pb-32">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-24 md:mb-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[500px] bg-gradient-to-b from-primary/10 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
        <span className="inline-block py-2 px-4 rounded-full border border-primary/20 text-primary text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-8 bg-primary/5">
          Engineering the Future
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-8 md:mb-10 tracking-tighter leading-[1.1]">
          Architecting <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-accent">Next-Gen Brands</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light px-4">
          A high-performance collective of digital architects leveraging AI, data science, and cinematic production to redefine business scaling.
        </p>
      </section>

      <section className="py-20 md:py-32 bg-navy-card/20 mb-24 md:mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 group relative overflow-hidden rounded-3xl border border-white/5 bg-navy-card/40 p-8 md:p-12 hover:border-primary/20 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity hidden md:block">
                <span className="material-symbols-outlined text-[120px] text-primary">auto_awesome</span>
              </div>
              <h3 className="text-primary font-black text-xs tracking-[0.3em] uppercase mb-6">Our DNA</h3>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">Data Driven, <br/>Native Digital</h2>
              <p className="text-slate-400 leading-relaxed text-lg md:text-xl max-w-xl">
                Founded by 18-year-old visionary Arya Chakraborty, Inaara Web Solutions represents the intersection of youthful agility and high-tier technical execution. We don't just use modern tools; we live in the ecosystems we build.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
              <div className="flex-1 rounded-3xl border border-white/5 bg-navy-card/40 p-8 md:p-10 hover:border-primary/20 transition-all">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                  <h3 className="text-white font-bold text-xl md:text-2xl">The Mission</h3>
                </div>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                  To empower global service providers with automated sales engines and high-conversion digital identities.
                </p>
              </div>
              <div className="flex-1 rounded-3xl border border-white/5 bg-navy-card/40 p-8 md:p-10 hover:border-primary/20 transition-all">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                  <h3 className="text-white font-bold text-xl md:text-2xl">The Vision</h3>
                </div>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                  Setting the global standard for AI-integrated marketing and web architecture for the next generation of business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tighter">The Architect</h2>
            <div className="h-1.5 w-16 md:w-24 bg-primary rounded-full"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2.5rem] md:rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-navy-deep border border-white/10 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 p-2 md:p-3">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-navy-card relative">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC265GBblkv9ewUPoDQvI31Civpqs2_isjIs7eN-OXyREl-8qTG7Y_-WEF20W7q-HJT1ly0O4g4UHTxBbeQtBNpJFCq0MP5m1GDOqinc-pTafIzqnpUK0E1yTYDUh0FteeuHhw-UvPh-pGQN-vIyw_INAmfGbcmt56UWthc0AMufVGaDzdsBwkc_YIq3PVDb6KoG9uHtnxH4rjLA3AtokzrAabajt71OSwDO2_VMqsTJOyr6vHJJ_kwKjC2ZOoDa9NHJWQPtQDQ7w0" 
                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                        alt="Arya Chakraborty" 
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-navy-deep px-4 py-2 md:px-6 md:py-3 rounded-xl font-black text-xs md:text-sm shadow-xl z-20">
                    CEO & FOUNDER
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter">Arya Chakraborty</h3>
                  <p className="text-primary font-black text-sm md:text-base mb-6 md:mb-8 uppercase tracking-[0.3em]">18-Year-Old Visionary</p>
                  <p className="text-slate-300 mb-8 md:mb-10 text-lg md:text-2xl leading-relaxed italic font-light">
                    "We don't just build websites; we engineer revenue-generating ecosystems that live and breathe AI efficiency."
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10 justify-center md:justify-start">
                    {['B.Tech Scholar', 'Digital Disruption', 'AI Architect'].map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black rounded-full uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
