import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { jobsData } from '../data/jobs';

export default function Careers() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <section className="pt-40 pb-20 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-charcoal z-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              SHAPE THE FUTURE <br />
              <span className="text-brand-gold">OF RESOURCES.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance leading-relaxed">
              Join PT Anugrah Mining Resources and be part of a team committed to responsible resource development, operational excellence, and strategic growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle title="OPEN POSITIONS" subtitle="JOIN OUR TEAM" centered />
          
          <div className="mt-16 max-w-4xl mx-auto flex flex-col gap-6">
            {jobsData.map((job, index) => (
              <Link key={job.id} to={`/careers/${job.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-8 rounded-sm hover:border-brand-gold hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col md:flex-row md:items-center justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-gold transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                      <span className="flex items-center"><Briefcase size={16} className="mr-1 text-brand-gold" /> {job.department}</span>
                      <span className="flex items-center"><MapPin size={16} className="mr-1 text-brand-gold" /> {job.location}</span>
                      <span className="bg-brand-bg px-3 py-1 text-xs font-bold text-brand-charcoal uppercase tracking-wider rounded-sm">{job.type}</span>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 flex items-center text-sm font-bold text-brand-charcoal uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                    View Details <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 p-10 bg-brand-charcoal text-white text-center rounded-sm max-w-4xl mx-auto"
          >
            <h4 className="text-2xl font-bold mb-4">Don't see a fit?</h4>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              We are always looking for talented individuals to join our team. Send your resume and a cover letter to our HR department, and we'll keep you in mind for future opportunities.
            </p>
            <a href="mailto:ptanugrahmining@gmail.com" className="inline-block px-8 py-4 bg-brand-gold text-white font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-brand-gold-dark transition-colors">
              Submit General Application
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
