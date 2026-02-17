import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-study/ecommerce' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy-deep/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center z-50 group">
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-white uppercase whitespace-nowrap transition-all duration-300 group-hover:text-primary neon-text">
            INAARA WEB SOLUTIONS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all hover:text-primary relative group ${
                pathname === link.path ? 'text-primary' : 'text-slate-300'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-navy-deep px-6 py-2.5 rounded-lg font-bold text-sm hover:scale-105 active:scale-95 transition-all neon-glow shadow-lg shadow-primary/20"
          >
            Work With Us
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-navy-deep/95 backdrop-blur-2xl z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={`text-3xl font-bold transition-colors ${
              pathname === link.path ? 'text-primary' : 'text-white hover:text-primary'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-4 bg-primary text-navy-deep px-10 py-4 rounded-xl font-black text-lg shadow-2xl shadow-primary/30"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-12 border-t border-white/5 bg-navy-deep relative z-10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 text-center md:text-left">
            <Link to="/" className="inline-block group">
              <span className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors duration-300">
                INAARA WEB SOLUTIONS
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Next-generation digital growth systems powered by AI, data-driven marketing, and cinematic storytelling.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {['public', 'share', 'alternate_email'].map((icon, i) => (
                <a key={i} href="#" className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Case Studies' ? '/case-study/ecommerce' : item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Expertise</h4>
            <ul className="space-y-4">
              {['AI Automation', 'Web Development', 'Performance Ads', 'Social Media', 'SEO & Local'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Inquiries</h4>
            <div className="space-y-4">
              <a href="tel:7003316830" className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-primary transition-colors group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">call</span>
                <span className="text-sm font-medium">7003316830</span>
              </a>
              <a href="tel:9073568772" className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-primary transition-colors group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">call</span>
                <span className="text-sm font-medium">9073568772</span>
              </a>
              <a href="mailto:hello@inaara.web" className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-primary transition-colors group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                <span className="text-sm font-medium">hello@inaara.web</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium text-center md:text-left">
            © 2024 INAARA WEB SOLUTIONS. DEPLOYING THE FUTURE.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-navy-deep selection:bg-primary/30 selection:text-white">
        <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
        <Header />
        <main className="flex-grow relative z-10">
          <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-study/ecommerce" element={<CaseStudy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
