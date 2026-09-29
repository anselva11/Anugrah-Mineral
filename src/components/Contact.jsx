import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle title="LET'S CONNECT" subtitle="CONTACT US" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-brand-charcoal mb-8 tracking-wide">PT ANUGRAH MINING RESOURCES</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-bg flex items-center justify-center rounded-sm shrink-0">
                  <MapPin className="text-brand-gold" size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest text-brand-charcoal uppercase mb-1">Address</p>
                  <p className="text-gray-600 leading-relaxed">Samarinda, Kalimantan Timur<br/>Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-bg flex items-center justify-center rounded-sm shrink-0">
                  <Mail className="text-brand-gold" size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest text-brand-charcoal uppercase mb-1">Email</p>
                  <p className="text-gray-600">ptanugrahmining@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-bg flex items-center justify-center rounded-sm shrink-0">
                  <Phone className="text-brand-gold" size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest text-brand-charcoal uppercase mb-1">Phone</p>
                  <p className="text-gray-600">0851 5095 6644</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-brand-charcoal text-white rounded-sm">
              <h4 className="text-lg font-bold mb-4">Business Inquiry</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">For structured partnerships, supply contracts, and investment opportunities, please direct your inquiry to our commercial team.</p>
              <a href="#" className="flex items-center text-brand-gold font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                Contact Commercial Team <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-bg p-8 md:p-10 rounded-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold text-brand-charcoal mb-8 tracking-wide">Send an Inquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-brand-gold transition-colors rounded-sm" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-widest mb-2">Company</label>
                  <input type="text" className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-brand-gold transition-colors rounded-sm" placeholder="Company Name" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-brand-gold transition-colors rounded-sm" placeholder="john@example.com" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-widest mb-2">Phone</label>
                  <input type="tel" className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-brand-gold transition-colors rounded-sm" placeholder="+62..." />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-brand-gold transition-colors rounded-sm text-brand-charcoal" required>
                  <option value="" disabled selected>Select an option</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="sourcing">Resource Sourcing</option>
                  <option value="trading">Mineral Trading</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-widest mb-2">Message</label>
                <textarea rows="4" className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-brand-gold transition-colors rounded-sm resize-none" placeholder="Your message here..." required></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-brand-charcoal text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors rounded-sm">
                Send Inquiry
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
