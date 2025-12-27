
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Settings2 } from 'lucide-react';

const ProductOverview: React.FC = () => {
  return (
    <section id="overview" className="py-24 space-y-32">
      {/* Overview Block 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6">
            <Layers className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-4 leading-tight">
            Centralized Asset Management for Complex Inventories
          </h2>
          <p className="text-muted text-lg mb-6 leading-relaxed">
            GearGuard provides a unified source of truth for all your physical assets. Whether it's high-tech IT infrastructure or industrial machinery, keep every detail within reach.
          </p>
          <ul className="space-y-4">
            {['Track by Department & Employee', 'Granular Location Data', 'Warranty & Lifecycle Alerts'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-secondary font-medium">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square md:aspect-auto h-full max-h-[400px] bg-accent rounded-3xl overflow-hidden shadow-inner border border-gray-100 p-8 flex items-center justify-center"
        >
           <div className="w-full max-w-xs space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex gap-4 animate-pulse">
                   <div className="w-10 h-10 bg-gray-50 rounded" />
                   <div className="flex-1 space-y-2 py-1">
                      <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-50 rounded w-1/2"></div>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>
      </div>

      {/* Overview Block 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 relative aspect-square md:aspect-auto h-full max-h-[400px] bg-accent rounded-3xl overflow-hidden shadow-inner border border-gray-100 p-8 flex items-center justify-center"
        >
           <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping duration-[3000ms]" />
              <div className="absolute inset-4 bg-primary/20 rounded-full animate-ping duration-[2000ms]" />
              <div className="absolute inset-8 bg-primary rounded-full flex items-center justify-center">
                <Activity className="text-white w-10 h-10" />
              </div>
           </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
            <Settings2 className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-4 leading-tight">
            Streamlined Team-Based Workflows
          </h2>
          <p className="text-muted text-lg mb-6 leading-relaxed">
            Eliminate communication silos. Assign requests to specialized maintenance teams automatically based on equipment type, ensuring the right technician is always on the job.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">Efficiency</span>
                <span className="text-2xl font-bold text-secondary">40% ↑</span>
             </div>
             <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">Downtime</span>
                <span className="text-2xl font-bold text-secondary">25% ↓</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;
