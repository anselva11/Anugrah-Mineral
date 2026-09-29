import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function Values() {
  const values = [
    { name: 'INTEGRITY', text: 'We operate with honesty, accountability and transparency.' },
    { name: 'DISCIPLINE', text: 'We maintain professional standards across every stage of our business.' },
    { name: 'RESPONSIBILITY', text: 'We recognize the environmental and social responsibilities associated with resource development.' },
    { name: 'EXCELLENCE', text: 'We continuously improve our operational and commercial capabilities.' },
    { name: 'PARTNERSHIP', text: 'We build relationships based on trust and long-term mutual value.' }
  ];

  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-charcoal-light/30 skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionTitle title="OUR VALUES" subtitle="GUIDING PRINCIPLES" light />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-black text-white/5 absolute -top-8 -left-4 pointer-events-none select-none">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-brand-gold mb-4 relative z-10">{value.name}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
