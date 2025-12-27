
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { supabase } from '../lib/supabase';
import { User, LogOut, ChevronDown } from 'lucide-react';

interface HeaderProps {
  setView: (view: View) => void;
  currentView: View;
  session: any;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView, session }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setView('landing');
  };

  const isAuthPage = ['login', 'signup', 'forgot-password', 'verification-sent'].includes(currentView);

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled || isAuthPage ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => setView('landing')}
          className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm" />
          </div>
          <span className="text-xl font-bold tracking-tight text-secondary">GearGuard</span>
        </button>

        {currentView === 'landing' && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            <a href="#overview" className="hover:text-primary transition-colors">Overview</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#workflow" className="hover:text-primary transition-colors">Workflow</a>
            <a href="#creators" className="hover:text-primary transition-colors">Team</a>
          </nav>
        )}

        <div className="flex items-center gap-4">
          {!session ? (
            <>
              <button 
                onClick={() => setView('login')}
                className={`text-sm font-medium transition-colors ${currentView === 'login' ? 'text-primary' : 'text-secondary hover:text-primary'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setView('signup')}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all shadow-sm active:scale-95 ${
                  currentView === 'signup' 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-white hover:bg-black'
                }`}
              >
                Sign Up
              </button>
            </>
          ) : (
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-100 bg-white hover:bg-gray-50 transition-all shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold text-secondary max-w-[100px] truncate">
                  {session.user.email}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-muted" />
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-50 mb-1">
                    <p className="text-[10px] font-bold text-muted uppercase tracking-wider">User Account</p>
                  </div>
                  <button className="w-full text-left px-4 py-2 text-sm text-secondary hover:bg-gray-50 flex items-center gap-2">
                    <User className="w-4 h-4" /> Dashboard
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Log out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
