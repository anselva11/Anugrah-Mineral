import { motion } from 'framer-motion';
import { ArrowRight, Globe, Network, Shield, Users, Handshake, Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Partner() {
  const partnerTypes = [
    {
      id: '01',
      title: 'INVESTORS',
      description: 'We welcome strategic investors seeking exposure to Indonesian natural resources with a professional, disciplined partner.',
      icon: Globe
    },
    {
      id: '02',
      title: 'MINING OPERATORS',
      description: 'Partner with us on resource development projects across Indonesia, leveraging our local expertise and market access.',
      icon: Network
    },
    {
      id: '03',
      title: 'MINERAL BUYERS & TRADERS',
      description: 'Establish reliable supply relationships for coal, nickel, and other mineral resources from Indonesian sources.',
      icon: Handshake
    },
    {
      id: '04',
      title: 'SUPPLIERS & SERVICE PROVIDERS',
      description: 'Join our network of trusted suppliers and service providers supporting mining and resource operations.',
      icon: Shield
    },
    {
      id: '05',
      title: 'JOINT VENTURE PARTNERS',
      description: 'Explore joint venture opportunities in resource development, trading, and strategic project execution.',
      icon: Users
    }
  ];

  const benefits = [
    'Access to Indonesian natural resource opportunities',
    'Professional management and transparent governance',
    'Established local networks and regulatory knowledge',
    'Structured due diligence and risk management',
    'Long-term relationship-driven approach',
    'Flexible partnership and commercial structures'
  ];

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-charcoal/80 z-10"></div>
          <img 
            src="/src/assets/back2.png" 
            alt="Partnership background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-gold"></div>
              <span className="text-brand-gold font-bold text-xs tracking-[0.2em] uppercase">STRATEGIC PARTNERSHIPS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
              BUILT FOR <br />
              <span className="text-brand-gold">LONG-TERM PARTNERSHIPS.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed text-balance">
              PT Anugrah Mining Resources partners with investors, operators, traders, and service providers to create sustainable value from Indonesia's natural resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle title="WHY PARTNER WITH US" subtitle="OUR ADVANTAGE" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-brand-charcoal/70 text-lg leading-relaxed mb-10"
              >
                We bring together local market expertise, professional management, and a commitment to responsible operations — creating a partnership framework built for long-term success.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4 text-brand-charcoal/80 font-medium">
                    <div className="w-2 h-2 bg-brand-gold rounded-full shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <img 
                src="/src/assets/mining operation.jpg" 
                alt="Partnership operations" 
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-brand-charcoal/10 rounded-sm"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle title="PARTNERSHIP OPPORTUNITIES" subtitle="HOW WE WORK TOGETHER" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-gray-100 p-10 hover:border-brand-gold transition-all duration-300 hover:-translate-y-2 rounded-sm cursor-pointer"
              >
                <div className="w-14 h-14 bg-brand-bg rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
                  <type.icon size={28} className="text-brand-charcoal group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-brand-gold font-mono font-bold text-sm mb-4">{type.id}</div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-4 tracking-wide group-hover:text-brand-gold transition-colors">{type.title}</h3>
                <p className="text-brand-charcoal/60 text-sm leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle title="OUR PARTNERSHIP PROCESS" subtitle="HOW IT WORKS" light centered />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {[
              { num: '01', title: 'Initial Discussion', desc: 'We begin with an open conversation to understand your objectives, capabilities, and areas of interest.' },
              { num: '02', title: 'Alignment & Evaluation', desc: 'We assess mutual fit, evaluate opportunities, and identify areas of strategic alignment.' },
              { num: '03', title: 'Structuring', desc: 'We work together to develop partnership structures, terms, and frameworks that serve both parties.' },
              { num: '04', title: 'Execution & Growth', desc: 'We execute with discipline and transparency, building long-term value through sustained collaboration.' }
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-black text-white/5 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-brand-gold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 text-white/10" size={24} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-bg border border-gray-100 p-10 md:p-16 rounded-sm text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6 tracking-tight">Ready to Explore a Partnership?</h2>
            <p className="text-brand-charcoal/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you are an investor, operator, trader, or service provider — we welcome the opportunity to discuss how we can work together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="flex items-center gap-3 text-brand-charcoal/70">
                <Mail size={18} className="text-brand-gold" />
                <span className="font-medium">ptanugrahmining@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-brand-charcoal/70">
                <Phone size={18} className="text-brand-gold" />
                <span className="font-medium">0851 5095 6644</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:ptanugrahmining@gmail.com" className="px-8 py-4 bg-brand-charcoal text-white font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-brand-gold transition-colors">
                Send Partnership Inquiry
              </a>
              <a href="/#contact" className="px-8 py-4 bg-transparent border border-brand-charcoal/20 text-brand-charcoal font-bold tracking-widest uppercase text-sm rounded-sm hover:border-brand-gold hover:text-brand-gold transition-colors">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
