
import React from 'react';
import { motion } from 'framer-motion';
import { CORE_FEATURES } from '../constants';

const CoreFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-secondary mb-4">Powerful Features for Precision Operations</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">Built from the ground up to handle the rigorous demands of industrial and corporate maintenance tracking.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {CORE_FEATURES.map((feature, idx) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:text-primary transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
            <p className="text-muted leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-10 bg-secondary rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to optimize your equipment lifecycle?</h3>
              <p className="text-gray-400">Join over 500 organizations that trust GearGuard to keep their operations running smoothly without the headache of manual logs.</p>
           </div>
           <button className="px-8 py-4 bg-white text-secondary font-bold rounded-2xl hover:bg-gray-100 transition-all whitespace-nowrap active:scale-95">
              Start Your Free Trial
           </button>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
