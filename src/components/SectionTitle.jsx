import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, centered = false, light = false }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          {!centered && <div className={`w-8 h-[2px] ${light ? 'bg-brand-gold' : 'bg-brand-gold'}`}></div>}
          <span className={`text-xs font-bold tracking-[0.2em] uppercase ${light ? 'text-brand-gold' : 'text-brand-gold'}`}>
            {subtitle}
          </span>
          {centered && <div className={`w-8 h-[2px] ${light ? 'bg-brand-gold' : 'bg-brand-gold'}`}></div>}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-5xl font-bold tracking-tight text-balance ${
          light ? 'text-white' : 'text-brand-charcoal'
        }`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
