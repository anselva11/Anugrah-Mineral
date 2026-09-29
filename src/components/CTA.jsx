import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-32 bg-brand-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-charcoal/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1578357068289-49764506cbe1?q=80&w=2000&auto=format&fit=crop" 
          alt="Mining background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          LET'S BUILD VALUE <br />
          <span className="text-brand-gold">FROM RESOURCES.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto text-balance leading-relaxed"
        >
          Explore opportunities for collaboration, investment, sourcing and strategic partnerships with PT Anugrah Mining Resources.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="px-8 py-4 bg-brand-gold text-white font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-brand-gold-dark transition-colors">
            Contact Us
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-white/10 transition-colors">
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
}
