
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/10 blur-[120px] rounded-full opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8 md:mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">The Future of Growth is AI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] md:leading-[1.05]">
            AI Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Growth Systems</span> <br className="hidden md:block" /> for Modern Brands
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
            We build high-converting digital ecosystems that scale your business online through intelligent automation and aggressive data-driven strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-primary text-navy-deep font-black rounded-xl text-lg hover:shadow-[0_0_30px_rgba(37,209,244,0.4)] transition-all text-center">
              Book Strategy Call
            </Link>
            <a href="tel:7003316830" className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-lg hover:bg-white/10 transition-all backdrop-blur-sm text-center">
              7003316830
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities Preview */}
      <section className="py-20 md:py-32 bg-navy-deep/40" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto md:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: 'group_work', title: 'SMM', desc: 'Aggressive social media growth through trend-aligned content and community architecture.' },
              { icon: 'leaderboard', title: 'Performance Marketing', desc: 'High-ROI ad campaigns built on raw data and psychological triggers.' },
              { icon: 'terminal', title: 'Web Dev', desc: 'Modern, blazing-fast web applications designed for conversion and SEO dominance.' },
              { icon: 'movie_edit', title: 'Video Editing', desc: 'Cinematic short and long-form content engineered to hold attention.' },
              { icon: 'memory', title: 'Software Dev', desc: 'Custom internal tools and SaaS products to streamline your core operations.' },
              { icon: 'search_insights', title: 'SEO', desc: 'Search engine optimization that lands your brand on page one consistently.' },
              { icon: 'precision_manufacturing', title: 'AI Automations', desc: 'Replace manual labor with intelligent bots and automated workflows.' },
              { icon: 'filter_alt', title: 'AI Funnels', desc: 'Sales pipelines that use AI to qualify leads and personalize experiences.' }
            ].map((s, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 transition-all">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:rotate-12 transition-transform">{s.icon}</span>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 relative" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Deployment Process</h2>
            <p className="text-slate-400 text-base sm:text-lg">From initial concept to hyper-scaling.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 z-0"></div>
            {[
              { id: '01', title: 'Strategy', desc: 'Deep audit of your current ecosystem and market gap analysis.' },
              { id: '02', title: 'Build', desc: 'Rapid development of funnels, sites, and advertising creative.' },
              { id: '03', title: 'Automate', desc: 'Integrating AI agents to handle lead nurture and backend ops.' },
              { id: '04', title: 'Scale', desc: 'Pushing performance marketing to drive exponential growth.' }
            ].map((p, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="size-20 md:size-24 rounded-full bg-navy-deep border-2 border-primary flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_20px_rgba(37,209,244,0.3)]">
                  <span className="text-white font-bold text-2xl">{p.id}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-navy-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight">Why Partner With Inaara?</h2>
              <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
                We are a high-energy, student-led team of 18+ specialists. We move faster, innovate harder, and deliver results that legacy agencies simply can't match in the modern economy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { val: '18+', label: 'Specialist Team' },
                  { val: 'Gen-Z Led', label: 'Native Digital' },
                  { val: 'Data-Centric', label: 'ROI Focused' },
                  { val: '24/7 Ops', label: 'Always Deploying' }
                ].map((stat, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all group">
                    <h4 className="text-primary text-3xl font-bold mb-1 group-hover:scale-105 transition-transform">{stat.val}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 uppercase tracking-widest font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[2rem] md:rounded-[2.5rem] relative p-8 md:p-12 flex items-center justify-center border border-white/5 overflow-hidden group">
                <div className="absolute inset-0 grid-bg opacity-30"></div>
                <div className="relative z-10 text-center">
                  <span className="material-symbols-outlined text-[100px] md:text-[150px] text-primary/30 group-hover:text-primary transition-all duration-700 neon-text">hub</span>
                  <div className="mt-8 md:mt-10 p-6 glass-card rounded-2xl max-w-sm">
                    <p className="text-white italic text-base md:text-lg leading-relaxed">"The perfect blend of youthful agility and high-tier engineering."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-6xl font-black mb-6 tracking-tighter">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Studies</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg px-4">Actual performance metrics delivered for our key partners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: 'shopping_cart', title: 'E-commerce Growth', metric: '300% ROI', desc: 'Achieved a massive ROI surge by implementing custom AI Funnels and automated retargeting.' },
              { icon: 'rocket_launch', title: 'SaaS Acquisition', metric: '50% Lower CPA', desc: 'Reduced cost per acquisition using high-performance marketing data and psychological trigger mapping.' },
              { icon: 'real_estate_agent', title: 'Real Estate Leads', metric: '4x Conversion', desc: 'Deployed AI-driven lead qualification agents, resulting in 4x faster response times.' }
            ].map((caseStudy, idx) => (
              <div key={idx} className="glass-card p-8 md:p-10 rounded-3xl flex flex-col group hover:-translate-y-2 transition-all border border-white/5">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-navy-deep transition-all">
                  <span className="material-symbols-outlined text-3xl">{caseStudy.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                <div className="text-primary font-black text-lg mb-4">{caseStudy.metric}</div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {caseStudy.desc}
                </p>
                <Link to="/case-study/ecommerce" className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest hover:gap-4 transition-all">
                  View Study
                  <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mb-8 md:mb-12 leading-tight tracking-tight">Deploy Your <br/><span className="text-primary italic">Growth Engine</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 md:mb-16 text-lg md:text-xl leading-relaxed">
            Stop guessing. Start scaling. Our team is ready to engineer your digital dominance.
          </p>
          <Link to="/contact" className="inline-block bg-primary text-navy-deep px-10 md:px-16 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 neon-glow">
            Book Free Call Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
