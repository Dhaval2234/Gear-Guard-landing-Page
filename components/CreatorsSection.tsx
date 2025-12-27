
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { CREATORS } from '../constants';

const CreatorsSection: React.FC = () => {
  return (
    <section id="creators" className="py-24 border-t border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-secondary mb-4">Meet the Visionaries</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">The dedicated team of engineers behind GearGuard's innovative maintenance solution.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CREATORS.map((creator, idx) => (
          <motion.div
            key={creator.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-20 h-20 rounded-full bg-accent mb-6 overflow-hidden flex items-center justify-center text-muted group-hover:scale-110 transition-transform">
               {/* Simulating profile pic with initials */}
               <span className="text-xl font-bold uppercase">{creator.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <h3 className="text-lg font-bold text-secondary mb-4">{creator.name}</h3>
            <a 
              href={creator.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              View GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreatorsSection;
