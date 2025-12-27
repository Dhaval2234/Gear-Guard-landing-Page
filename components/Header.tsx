import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { View } from '../types';
import { supabase } from '../lib/supabase';
import { User, LogOut, ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  setView: (view: View) => void;
  currentView: View;
  session: any;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView, session }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setView('landing');
    setShowDropdown(false);
  };

  const isAuthPage = ['login', 'signup', 'forgot-password', 'verification-sent', 'reset-password'].includes(currentView);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Team', href: '#creators' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (currentView !== 'landing') {
      e.preventDefault();
      setView('landing');
      // Delay slightly to allow the view to switch before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isAuthPage || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => { setView('landing'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <div className="w-4 h-4 border-2 border-white rounded-sm" />
          </div>
          <span className="text-xl font-bold tracking-tight text-secondary">GearGuard</span>
        </button>

        {/* Desktop Navigation */}
        {currentView === 'landing' && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="nav-link hover:text-primary transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Actions */}
        <div className="flex items-center gap-4">
          {!session ? (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setView('login')}
                className={`hidden sm:block text-sm font-bold transition-colors ${currentView === 'login' ? 'text-primary' : 'text-secondary hover:text-primary'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setView('signup')}
                className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all shadow-md active:scale-95 ${
                  currentView === 'signup' 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-white hover:bg-black'
                }`}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-100 bg-white hover:bg-gray-50 transition-all shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="hidden sm:inline text-sm font-semibold text-secondary max-w-[100px] truncate">
                  {session.user.email}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-muted transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showDropdown && (
                  <>
                    <div className="fixed inset-0 z-0" onClick={() => setShowDropdown(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                    >
                      <button 
                        onClick={() => { setView('landing'); setShowDropdown(false); }}
                        className="w-full text-left px-4 py-2 text-sm text-secondary hover:bg-gray-50 flex items-center gap-2"
                      >
                        <User className="w-4 h-4 text-muted" /> Dashboard
                      </button>
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" /> Log out
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          {currentView === 'landing' && (
            <button 
              className="md:hidden p-2 text-secondary hover:bg-gray-100 rounded-lg transition-colors z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-gray-100 shadow-xl"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-bold text-secondary hover:text-primary transition-colors py-2 flex items-center justify-between"
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4 -rotate-90 opacity-20" />
                </a>
              ))}
              {!session && (
                <div className="pt-4 border-t border-gray-50 flex flex-col gap-3">
                  <button 
                    onClick={() => { setView('login'); setIsMobileMenuOpen(false); }}
                    className="w-full py-4 text-secondary font-bold text-center border border-gray-100 rounded-2xl"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => { setView('signup'); setIsMobileMenuOpen(false); }}
                    className="w-full py-4 bg-primary text-white font-bold rounded-2xl text-center"
                  >
                    Sign Up Free
                  </button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;