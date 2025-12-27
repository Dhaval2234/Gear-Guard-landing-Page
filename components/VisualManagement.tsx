
import React from 'react';
import { motion } from 'framer-motion';
import { SMART_FEATURES } from '../constants';

const VisualManagement: React.FC = () => {
  return (
    <section className="py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-secondary mb-6 leading-tight">
            Visual Management <br />
            <span className="text-primary">Built for Humans</span>
          </h2>
          <p className="text-muted text-lg mb-10">
            We've replaced complex spreadsheets with intuitive visual tools. Our interface focuses on speed and clarity, reducing training time for your staff.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {SMART_FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotateY: 20 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative perspective-1000"
        >
          <div className="bg-white rounded-[2rem] border border-gray-200 shadow-2xl p-6 overflow-hidden transform-gpu rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
            {/* Mock Kanban */}
            <div className="flex gap-4 h-80">
               {[
                 { label: 'Todo', color: 'bg-gray-100' },
                 { label: 'In Progress', color: 'bg-blue-50' },
                 { label: 'Done', color: 'bg-green-50' }
               ].map((col) => (
                 <div key={col.label} className="flex-1 space-y-3">
                    <div className="text-[10px] font-bold text-muted uppercase tracking-widest pl-2 mb-2">{col.label}</div>
                    {[1, 2].map((card) => (
                      <div key={card} className={`p-3 rounded-xl ${col.color} border border-black/5 space-y-2`}>
                         <div className="w-full h-1.5 bg-black/10 rounded" />
                         <div className="w-2/3 h-1.5 bg-black/5 rounded" />
                      </div>
                    ))}
                 </div>
               ))}
            </div>
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default VisualManagement;
