
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Automation',
      icon: 'auto_awesome',
      bgIcon: 'smart_toy',
      desc: 'Seamlessly integrate machine learning to handle routine operations and lead nurture.',
      features: ['Automated Lead Qualification', 'Predictive Analytics', '24/7 Response Systems']
    },
    {
      title: 'Web Engineering',
      icon: 'terminal',
      bgIcon: 'code',
      desc: 'High-performance, edge-first web applications built for speed and SEO dominance.',
      features: ['Blazing Fast Performance', 'SEO-Native Structure', 'Conversion Focused UX']
    },
    {
      title: 'Paid Media',
      icon: 'ads_click',
      bgIcon: 'campaign',
      desc: 'Aggressive multi-channel ad strategies designed to lower CPA and scale revenue.',
      features: ['Meta & Google Specialist', 'Dynamic Retargeting', 'High-ROAS Creative']
    },
    {
      title: 'Brand Creative',
      icon: 'movie_edit',
      bgIcon: 'play_circle',
      desc: 'Cinematic video and design engineered to capture attention in high-noise markets.',
      features: ['4K Video Production', 'Viral Shortform Hooks', 'Premium Visual Identity']
    },
    {
      title: 'Social Scaling',
      icon: 'hub',
      bgIcon: 'groups',
      desc: 'Community-first growth strategies that build long-term authority and trust.',
      features: ['Content Distribution', 'Organic Growth Hooks', 'Authority Building']
    },
    {
      title: 'Growth Consulting',
      icon: 'query_stats',
      bgIcon: 'insights',
      desc: 'Deep-dive audits and strategic roadmaps for enterprise-level scaling.',
      features: ['Data Auditing', 'Tech-Stack Refinement', 'Market Gap Analysis']
    }
  ];

  return (
    <div className="pt-32 pb-24 md:pb-32">
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-24 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]">
          Our Capabilities
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
          The <span className="text-primary italic">Expertise</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light px-4">
          High-performance solutions designed to architect your digital dominance through precision engineering and data-driven scaling.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass-card group relative p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] transition-all duration-500 flex flex-col justify-between overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 p-6 md:p-10 opacity-5 group-hover:opacity-10 transition-opacity hidden sm:block">
                <span className="material-symbols-outlined text-[80px] md:text-[100px] text-primary">{service.bgIcon}</span>
              </div>
              <div className="relative z-10">
                <div className="size-14 md:size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-navy-deep transition-all duration-300 shadow-lg shadow-primary/10">
                  <span className="material-symbols-outlined text-3xl md:text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-primary transition-colors tracking-tight">{service.title}</h3>
                <p className="text-slate-400 mb-8 text-base md:text-lg leading-relaxed font-light">{service.desc}</p>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="w-full py-4 md:py-5 rounded-2xl border border-primary/20 text-primary font-black text-sm md:text-base uppercase tracking-widest hover:bg-primary hover:text-navy-deep hover:border-transparent transition-all text-center neon-glow">
                Explore Solution
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
