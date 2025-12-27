
import React from 'react';
import { View } from '../../types';
import AuthLayout from './AuthLayout';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

interface VerificationSentProps {
  setView: (view: View) => void;
}

const VerificationSent: React.FC<VerificationSentProps> = ({ setView }) => {
  return (
    <AuthLayout 
      title="Verify Your Email" 
      subtitle="We're almost there! We've sent a link to your email to confirm your account."
      setView={setView}
    >
      <div className="text-center py-6 space-y-6">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-primary mx-auto animate-pulse">
          <Mail className="w-10 h-10" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-secondary">Check your inbox</h3>
          <p className="text-muted leading-relaxed">
            Click the link in the email we just sent you to activate your GearGuard profile. 
            Once verified, you'll have full access to our tracking tools.
          </p>
        </div>

        <div className="p-4 bg-accent rounded-2xl border border-gray-100 text-left">
          <p className="text-xs text-muted font-medium mb-1 uppercase tracking-widest">Didn't receive it?</p>
          <p className="text-sm text-secondary">Check your spam folder or wait a few minutes before trying again.</p>
        </div>

        <button 
          onClick={() => setView('login')}
          className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          Return to Login
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </AuthLayout>
  );
};

export default VerificationSent;
