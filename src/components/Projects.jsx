import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Mining', 'Minerals', 'Trading', 'Partnerships'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.filter === activeFilter);

  return (
    <section id="projects" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle title="PROJECTS & OPPORTUNITIES" subtitle="OUR PORTFOLIO" centered />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-sm text-sm font-bold tracking-wide transition-all ${
                activeFilter === filter 
                  ? 'bg-brand-charcoal text-white' 
                  : 'bg-white text-brand-charcoal hover:bg-brand-gold hover:text-white border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-xl hover:border-brand-gold transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-gold transition-colors">{project.name}</h3>
                    <div className="flex items-center text-gray-500 text-sm font-medium">
                      <MapPin size={16} className="mr-1" />
                      {project.location}
                    </div>
                  </div>
                  <div className="bg-brand-bg px-4 py-1 text-xs font-bold text-brand-charcoal uppercase tracking-wider rounded-sm">
                    {project.filter}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 mt-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Resource Category</p>
                    <p className="font-semibold text-brand-charcoal">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Development Focus</p>
                    <p className="font-semibold text-brand-charcoal">{project.stage}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-12 text-center text-sm text-gray-500 italic">
          Note: Some project names are placeholders pending final evaluation and public disclosure.
        </div>
      </div>
    </section>
  );
}
