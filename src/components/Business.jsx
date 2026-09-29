import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { businessData } from '../data/business';

export default function Business() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="business" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle title="OUR BUSINESS" subtitle="WHAT WE DO" centered />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          {businessData.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className="group relative bg-brand-bg border border-gray-100 p-10 hover:border-brand-gold transition-all duration-300 hover:-translate-y-2 rounded-sm cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform group-hover:scale-110">
                <item.icon size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="text-brand-gold font-mono font-bold text-lg mb-8">{item.id}</div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-4 tracking-wide group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <p className="text-brand-charcoal/70 mb-8 max-w-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center text-sm font-bold text-brand-charcoal uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
