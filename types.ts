import React from 'react';

export type View = 'landing' | 'login' | 'signup' | 'forgot-password' | 'reset-password' | 'verification-sent';

export type UserRole = 'admin' | 'manager' | 'technician' | 'user';

export interface UserProfile {
  id: string;
  full_name: string;
  role: UserRole;
  company_name: string;
  avatar_url?: string;
  email?: string;
}

export interface Creator {
  name: string;
  github: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface WorkflowStep {
  title: string;
  description: string;
}