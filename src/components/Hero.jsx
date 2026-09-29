import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-brand-charcoal/70 z-10"></div>
        <img 
          src="/assets/back2.png" 
          alt="Mining operation background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[2px] bg-brand-gold"></div>
            <span className="text-brand-gold font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              MINING • RESOURCES • OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            POWERING RESPONSIBLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              RESOURCE DEVELOPMENT
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed text-balance"
          >
            PT Anugrah Mining Resources is committed to developing responsible resource opportunities through operational excellence, strategic partnerships and long-term value creation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#business" 
              className="px-8 py-4 bg-brand-gold text-white text-center font-bold tracking-wide rounded-sm hover:bg-brand-gold-dark transition-all"
            >
              Explore Our Business
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 text-white backdrop-blur-sm border border-white/20 text-center font-bold tracking-wide rounded-sm hover:bg-white/20 transition-all"
            >
              Partner With Us
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/60" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
