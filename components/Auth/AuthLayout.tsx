
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { View } from '../../types';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  setView: (view: View) => void;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, setView }) => {
  return (
    <div className="min-h-screen bg-accent/30 pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setView('landing')}
        className="absolute top-24 left-6 md:left-12 flex items-center gap-2 px-4 py-2 text-sm font-semibold text-muted hover:text-secondary transition-colors group z-50"
      >
        <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all group-active:scale-90">
          <ArrowLeft className="w-4 h-4" />
        </div>
        <span>Back to Home</span>
      </motion.button>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-300/20 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-secondary tracking-tight mb-3">{title}</h1>
          <p className="text-muted leading-relaxed">{subtitle}</p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-10 overflow-hidden relative"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
