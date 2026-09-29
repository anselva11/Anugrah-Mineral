import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { resourcesData } from '../data/resources';

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-brand-charcoal text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionTitle title="OUR RESOURCE FOCUS" subtitle="RESOURCE PORTFOLIO" light />
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 max-w-sm text-sm"
          >
            *Subject to project evaluation and due diligence. Not all listed commodities represent current operational assets.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourcesData.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden rounded-sm mb-6">
                <div className="absolute inset-0 bg-brand-charcoal/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={resource.image} 
                  alt={resource.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-gold transition-colors">{resource.name}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{resource.description}</p>
              <div className="flex items-center text-xs font-bold text-brand-gold uppercase tracking-widest">
                <span className="mr-2">Explore Opportunity</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
