import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Business', href: '/#business' },
    { name: 'Careers', href: '/careers' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isCareersPage = location.pathname === '/careers';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 z-50 relative">
          <img src="/src/assets/logo 1.png" alt="PT Anugrah Mining Resources Logo" className="h-12 w-auto" />
          <div className={`flex flex-col ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`}>
            <span className="font-bold text-lg leading-tight tracking-tight">PT ANUGRAH</span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Mining Resources</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-gold ${
                isScrolled ? 'text-brand-charcoal' : 'text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/partner" 
            className={`px-5 py-2.5 rounded-sm text-sm font-semibold transition-all ${
              isScrolled 
                ? 'bg-brand-charcoal text-white hover:bg-brand-charcoal-light' 
                : 'bg-brand-gold text-white hover:bg-brand-gold-dark'
            }`}
          >
            Partner With Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled || mobileMenuOpen ? 'text-brand-charcoal' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-brand-charcoal' : 'text-white'} size={24} />
          )}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-white pt-24 px-6 flex flex-col gap-6 lg:hidden"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-brand-charcoal border-b border-gray-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/partner" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-4 bg-brand-charcoal text-white text-center font-semibold text-lg"
              >
                Partner With Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
