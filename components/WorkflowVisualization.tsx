
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, AlertCircle } from 'lucide-react';

const WorkflowVisualization: React.FC = () => {
  const workflows = [
    {
      title: 'Breakdown Workflow',
      steps: [
        { icon: <AlertCircle className="w-5 h-5 text-red-500" />, label: 'Issue Reported' },
        { icon: <Play className="w-5 h-5 text-blue-500" />, label: 'Team Assigned' },
        { icon: <CheckCircle className="w-5 h-5 text-green-500" />, label: 'Resolved & Scrapped' },
      ]
    },
    {
      title: 'Preventive Scheduling',
      steps: [
        { icon: <Play className="w-5 h-5 text-blue-500" />, label: 'Maintenance Interval' },
        { icon: <Play className="w-5 h-5 text-blue-500" />, label: 'Technician Check' },
        { icon: <CheckCircle className="w-5 h-5 text-green-500" />, label: 'Update Logs' },
      ]
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-accent/50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-secondary mb-4">Automated Lifecycles</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">See how GearGuard handles the lifecycle of every request from discovery to resolution.</p>
        </div>

        <div className="space-y-12">
          {workflows.map((wf, idx) => (
            <motion.div
              key={wf.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm"
            >
              <h3 className="text-lg font-bold text-secondary mb-8 text-center md:text-left">{wf.title}</h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
                 {wf.steps.map((step, sIdx) => (
                   <React.Fragment key={step.label}>
                      <div className="flex flex-col items-center gap-4 z-10 bg-white p-4">
                         <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shadow-inner border border-gray-100">
                            {step.icon}
                         </div>
                         <span className="text-sm font-semibold text-secondary">{step.label}</span>
                      </div>
                      {sIdx < wf.steps.length - 1 && (
                        <div className="hidden md:flex flex-1 items-center justify-center">
                           <ArrowRight className="w-6 h-6 text-gray-200" />
                        </div>
                      )}
                   </React.Fragment>
                 ))}
                 <div className="absolute top-1/3 left-0 right-0 h-px bg-gray-100 -z-0 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowVisualization;
