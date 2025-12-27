import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductOverview from './components/ProductOverview';
import CoreFeatures from './components/CoreFeatures';
import WorkflowVisualization from './components/WorkflowVisualization';
import VisualManagement from './components/VisualManagement';
import CreatorsSection from './components/CreatorsSection';
import Footer from './components/Footer';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import VerificationSent from './components/Auth/VerificationSent';
import { View } from './types';
import { supabase } from './lib/supabase';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    // Handle auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      
      if (event === 'PASSWORD_RECOVERY') {
        setView('reset-password');
      }
      
      if (event === 'SIGNED_IN' && (view === 'login' || view === 'signup')) {
        setView('landing');
      }

      if (event === 'SIGNED_OUT') {
        setView('landing');
      }
    });

    return () => subscription.unsubscribe();
  }, [view]);

  // Handle routing logic based on scroll and view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {view === 'landing' && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
          style={{ scaleX }}
        />
      )}

      <Header setView={setView} currentView={view} session={session} />
      
      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <main className="space-y-0">
              <Hero setView={setView} session={session} />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ProductOverview />
                <CoreFeatures />
                <WorkflowVisualization />
                <VisualManagement />
                <CreatorsSection />
              </div>
            </main>
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="min-h-screen"
          >
            {view === 'login' && <LoginForm setView={setView} />}
            {view === 'signup' && <SignupForm setView={setView} />}
            {view === 'forgot-password' && <ForgotPassword setView={setView} />}
            {view === 'reset-password' && <ResetPassword setView={setView} />}
            {view === 'verification-sent' && <VerificationSent setView={setView} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;