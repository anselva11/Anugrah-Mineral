import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowLeft, ArrowRight, Users, CheckCircle2, Gift, Send } from 'lucide-react';
import { jobsData } from '../data/jobs';

export default function JobDetail() {
  const { slug } = useParams();
  const job = jobsData.find(j => j.slug === slug);

  if (!job) {
    return (
      <div className="bg-brand-bg min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-charcoal mb-4">Position Not Found</h1>
          <p className="text-gray-500 mb-8">The job position you're looking for doesn't exist or has been removed.</p>
          <Link to="/careers" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-charcoal text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-brand-gold transition-colors">
            <ArrowLeft size={16} /> Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  const otherJobs = jobsData.filter(j => j.id !== job.id);

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-charcoal-light to-brand-charcoal z-10"></div>
        </div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 z-[5] opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/careers" className="inline-flex items-center gap-2 text-brand-gold/80 hover:text-brand-gold font-medium text-sm mb-8 transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to All Positions
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-300 font-medium">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-sm">
                <Briefcase size={16} className="text-brand-gold" /> {job.department}
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-sm">
                <MapPin size={16} className="text-brand-gold" /> {job.location}
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-sm">
                <Clock size={16} className="text-brand-gold" /> {job.type}
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-sm">
                <Users size={16} className="text-brand-gold" /> {job.experience} experience
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-brand-charcoal mb-4 flex items-center gap-3">
                  <div className="w-1 h-8 bg-brand-gold rounded-full"></div>
                  About This Role
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">{job.summary}</p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-brand-charcoal mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-brand-gold rounded-full"></div>
                  Key Responsibilities
                </h2>
                <ul className="space-y-4">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-brand-gold/10 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-brand-gold" />
                      </div>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Qualifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-brand-charcoal mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-brand-gold rounded-full"></div>
                  Qualifications
                </h2>
                <ul className="space-y-4">
                  {job.qualifications.map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-brand-charcoal/5 flex items-center justify-center">
                        <span className="text-xs font-bold text-brand-charcoal">{idx + 1}</span>
                      </div>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-brand-charcoal mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-brand-gold rounded-full"></div>
                  What We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {job.benefits.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 bg-white border border-gray-100 rounded-sm">
                      <Gift size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Apply Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-200 p-8 rounded-sm"
                >
                  <h3 className="text-lg font-bold text-brand-charcoal mb-2">Interested?</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Send your CV and cover letter to our HR team. Please include the position title in your email subject line.
                  </p>
                  <a 
                    href={`mailto:ptanugrahmining@gmail.com?subject=Application: ${job.title}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-gold text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-brand-gold-dark transition-colors"
                  >
                    <Send size={16} /> Apply Now
                  </a>
                </motion.div>

                {/* Job Details Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white border border-gray-200 p-8 rounded-sm"
                >
                  <h3 className="text-lg font-bold text-brand-charcoal mb-6">Job Details</h3>
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Department</span>
                      <p className="text-brand-charcoal font-semibold mt-1">{job.department}</p>
                    </div>
                    <div className="border-t border-gray-100"></div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Location</span>
                      <p className="text-brand-charcoal font-semibold mt-1">{job.location}</p>
                    </div>
                    <div className="border-t border-gray-100"></div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Employment Type</span>
                      <p className="text-brand-charcoal font-semibold mt-1">{job.type}</p>
                    </div>
                    <div className="border-t border-gray-100"></div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Experience Required</span>
                      <p className="text-brand-charcoal font-semibold mt-1">{job.experience}</p>
                    </div>
                    <div className="border-t border-gray-100"></div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Reports To</span>
                      <p className="text-brand-charcoal font-semibold mt-1">{job.reportTo}</p>
                    </div>
                    <div className="border-t border-gray-100"></div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Posted</span>
                      <p className="text-brand-charcoal font-semibold mt-1">{job.posted}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Other Positions */}
                {otherJobs.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-brand-charcoal p-8 rounded-sm"
                  >
                    <h3 className="text-lg font-bold text-white mb-6">Other Openings</h3>
                    <div className="space-y-4">
                      {otherJobs.map(otherJob => (
                        <Link 
                          key={otherJob.id} 
                          to={`/careers/${otherJob.slug}`}
                          className="block p-4 bg-white/5 border border-white/10 rounded-sm hover:border-brand-gold/50 hover:bg-white/10 transition-all group"
                        >
                          <h4 className="text-white font-bold text-sm group-hover:text-brand-gold transition-colors">{otherJob.title}</h4>
                          <p className="text-gray-400 text-xs mt-1">{otherJob.location}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
