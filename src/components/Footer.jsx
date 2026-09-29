import { Mail, Globe, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Business', href: '/#business' },
    { name: 'Careers', href: '/careers' },
    { name: 'Projects', href: '/#projects' },
    { name: 'News', href: '/#news' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <footer className="bg-brand-charcoal-light text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/logo1.png" alt="PT Anugrah Mining Resources Logo" className="h-10 w-auto" />
              <div className="flex flex-col text-white">
                <span className="font-bold text-base leading-tight tracking-tight">PT ANUGRAH</span>
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/70">Mining Resources</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
              Building responsible value from Indonesia's natural resources through operational excellence, strategic partnerships, and long-term vision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-white transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {navLinks.slice(0, 4).map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-white">Explore</h4>
            <ul className="space-y-4">
              {navLinks.slice(4).map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500">
          <p>© 2026 PT Anugrah Mining Resources. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
