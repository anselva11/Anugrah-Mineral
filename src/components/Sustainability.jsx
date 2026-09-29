import { motion } from 'framer-motion';
import { Leaf, Users, Shield, HeartHandshake } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Sustainability() {
  const pillars = [
    {
      id: 'ENVIRONMENT',
      title: 'ENVIRONMENT',
      description: 'Responsible resource management and environmental awareness.',
      icon: Leaf
    },
    {
      id: 'PEOPLE',
      title: 'PEOPLE',
      description: 'Safety, people development and community engagement.',
      icon: Users
    },
    {
      id: 'GOVERNANCE',
      title: 'GOVERNANCE',
      description: 'Integrity, transparency and accountable decision-making.',
      icon: Shield
    },
    {
      id: 'COMMUNITY',
      title: 'COMMUNITY',
      description: 'Supporting meaningful local economic and social development.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionTitle title="RESPONSIBLE RESOURCE DEVELOPMENT" subtitle="SUSTAINABILITY" centered />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-charcoal/70 leading-relaxed"
          >
            We believe resource development must create value not only for business, but also for communities, stakeholders and future generations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center px-6"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-brand-bg flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
                <pillar.icon size={32} className="text-brand-charcoal group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-brand-charcoal tracking-wide mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
