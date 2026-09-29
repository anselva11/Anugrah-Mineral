import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function About() {
  const approaches = [
    { num: '01', title: 'Identify' },
    { num: '02', title: 'Evaluate' },
    { num: '03', title: 'Develop' },
    { num: '04', title: 'Deliver' },
  ];

  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <SectionTitle title="BUILDING VALUE FROM RESOURCES" subtitle="ABOUT ANUGRAH" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg text-brand-charcoal/80 mb-10"
            >
              <p className="text-xl font-medium text-brand-charcoal mb-6 leading-relaxed">
                PT Anugrah Mining Resources is built around a simple principle: natural resources create lasting value when developed responsibly, efficiently and strategically.
              </p>
              <p className="mb-6">
                We are an Indonesian company focused on mining, mineral resources and strategic resource development. We connect operational capabilities, commercial opportunities and responsible resource management to create sustainable long-term value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              <ul className="space-y-3 font-medium text-brand-charcoal/90">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div> Professional management</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div> Responsible resource development</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div> Operational discipline</li>
              </ul>
              <ul className="space-y-3 font-medium text-brand-charcoal/90">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div> Commercial expertise</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div> Strategic partnerships</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div> Long-term vision</li>
              </ul>
            </motion.div>
          </div>

          {/* Right Image & Timeline */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full"
            >
              <img 
                src="/src/assets/mining operation.jpg" 
                alt="Mining operation site" 
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-brand-charcoal/20 rounded-sm"></div>
              
              {/* Timeline Card overlay */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl rounded-sm max-w-sm">
                <h3 className="text-sm font-bold tracking-widest text-brand-gold mb-6 uppercase">Our Approach</h3>
                <div className="space-y-4">
                  {approaches.map((item, index) => (
                    <motion.div 
                      key={item.num}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                      className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-brand-charcoal/40 font-mono text-sm">{item.num}</span>
                      <span className="w-4 h-[1px] bg-brand-gold"></span>
                      <span className="font-bold text-brand-charcoal">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
