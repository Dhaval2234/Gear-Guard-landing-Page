import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { View } from '../types';

interface HeroProps {
  setView: (view: View) => void;
  session: any;
}

const Hero: React.FC<HeroProps> = ({ setView, session }) => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/30 -z-10 rounded-l-[80px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content: Information & Actions */}
        <div className="flex flex-col items-start text-left max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-[10px] font-bold mb-6 uppercase tracking-[0.15em] shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Modern Asset Management
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[36px] md:text-[48px] lg:text-[52px] font-extrabold tracking-tight text-secondary leading-[1.1] mb-6"
          >
            The Ultimate <br /> Maintenance Tracker for <span className="text-primary">Modern Organizations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] md:text-[18px] text-muted mb-8 leading-relaxed font-medium max-w-lg"
          >
            Simplify equipment tracking, streamline maintenance workflows, and empower your technical teams with GearGuard's intuitive enterprise-grade dashboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            {session ? (
              <button 
                onClick={() => setView('landing')}
                className="px-8 py-3.5 bg-primary text-white font-bold rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/10 active:scale-95 text-[15px]"
              >
                Go to Dashboard
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <>
                <button 
                  onClick={() => setView('signup')}
                  className="px-8 py-3.5 bg-primary text-white font-bold rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/10 active:scale-95 text-[15px]"
                >
                  Get Started Free
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
                <button 
                  onClick={() => setView('login')}
                  className="px-8 py-3.5 bg-white text-secondary font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all active:scale-95 text-[15px] shadow-sm"
                >
                  Member Login
                </button>
              </>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-3 text-[10px] font-bold text-muted uppercase tracking-widest"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[7px] text-gray-400 font-black">U{i}</div>
              ))}
            </div>
            <span>Trusted by 500+ Engineering Units</span>
          </motion.div>
        </div>

        {/* Right Column: Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_24px_60px_rgba(0,0,0,0.08)] bg-white p-1.5">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
              alt="GearGuard Platform" 
              className="w-full h-auto rounded-[1.75rem] object-cover"
            />
            
            {/* Contextual UI Elements for dynamic feel */}
            <div className="absolute top-6 -left-6 w-36 h-24 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-gray-50 hidden xl:flex flex-col justify-between">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-[9px] font-black">LIVE</div>
              <div className="space-y-1.5">
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-green-500" 
                  />
                </div>
                <div className="w-2/3 h-1 bg-gray-50 rounded-full" />
              </div>
            </div>

            <div className="absolute -bottom-4 right-8 w-44 h-28 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-50 hidden xl:block">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="text-[10px] font-bold text-secondary uppercase tracking-wider">Requests</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-1.5 bg-gray-100 rounded-full" />
                  <div className="text-[9px] font-bold text-primary">Pending</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-16 h-1.5 bg-gray-100 rounded-full" />
                  <div className="text-[9px] font-bold text-green-500">Done</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle Glow effects */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100 rounded-full blur-[90px] -z-10 opacity-60" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-50 rounded-full blur-[70px] -z-10 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
