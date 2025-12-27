
import React, { useState } from 'react';
import { View, UserRole } from '../../types';
import AuthLayout from './AuthLayout';
import { User, Mail, Lock, Building, ArrowRight, AlertCircle, Loader2, Shield } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface SignupFormProps {
  setView: (view: View) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ setView }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState<UserRole>('user');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: `${firstName} ${lastName}`,
          company_name: companyName,
          role: role,
        }
      }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setView('verification-sent');
    }
  };

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Start tracking your organization's assets with precision today."
      setView={setView}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 ml-1">First Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jane"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all text-sm"
                required
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 ml-1">Last Name</label>
            <input 
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all text-sm"
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 ml-1">Company Name</label>
            <div className="relative group">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Acme Industrial"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all text-sm"
                required
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 ml-1">My Role</label>
            <div className="relative group">
              <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors pointer-events-none" />
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value as UserRole)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all text-sm appearance-none cursor-pointer"
                disabled={loading}
              >
                <option value="user">Standard User</option>
                <option value="technician">Technician</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 ml-1">Work Email</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@acme.com"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all text-sm"
              required
              disabled={loading}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 ml-1">Password</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all text-sm"
              required
              disabled={loading}
              minLength={8}
            />
          </div>
        </div>

        <p className="text-[10px] text-muted text-center px-4 leading-relaxed">
          By clicking below, you agree to our Terms of Service and Privacy Policy. A verification email will be sent to confirm your identity.
        </p>

        <button 
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Create My Account
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <div className="text-center pt-2">
          <p className="text-sm text-muted font-medium">
            Already have an account?{' '}
            <button 
              type="button"
              onClick={() => setView('login')}
              className="text-primary font-bold hover:underline"
            >
              Log in instead
            </button>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignupForm;
