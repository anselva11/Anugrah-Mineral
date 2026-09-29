import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function News() {
  const news = [
    {
      id: 1,
      category: 'Industry Insights',
      date: 'Sept 15, 2026',
      title: 'The Future of Responsible Resource Development in Indonesia',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'Market Development',
      date: 'Sept 02, 2026',
      title: 'Strategic Mineral Demand and Domestic Supply Chains',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'Company Updates',
      date: 'Aug 24, 2026',
      title: 'PT Anugrah Mining Resources Expands Strategic Partnerships',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section id="news" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <SectionTitle title="NEWS & INSIGHTS" subtitle="LATEST UPDATES" />
          <a href="#" className="hidden md:flex items-center text-sm font-bold tracking-widest text-brand-charcoal hover:text-brand-gold transition-colors pb-4 uppercase">
            View All News <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white cursor-pointer rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-charcoal text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-400 text-sm mb-3 font-medium">{item.date}</p>
                <h3 className="text-xl font-bold text-brand-charcoal leading-snug mb-6 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <div className="flex items-center text-sm font-bold text-brand-charcoal uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                  Read More <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
