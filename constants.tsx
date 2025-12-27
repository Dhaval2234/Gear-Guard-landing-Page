
import React from 'react';
import { Settings, Users, ClipboardCheck, Layout, Calendar, Trash2, ShieldCheck, Zap } from 'lucide-react';
import { Creator, Feature } from './types';

export const CREATORS: Creator[] = [
  { name: 'Akshat Panchal', github: 'https://github.com/AkshatP27' },
  { name: 'Om Barot', github: 'https://github.com/OM-8bit' },
  { name: 'Ruhulamin Ghori', github: 'https://github.com/RuhulaminGhori' },
  { name: 'Dhaval Bhavsar', github: 'https://github.com/Dhaval2234' },
];

export const CORE_FEATURES: Feature[] = [
  {
    id: 'equipment',
    title: 'Equipment Management',
    description: 'Track assets by department and employee. Store serial numbers, warranty info, and precise physical locations.',
    icon: <Settings className="w-6 h-6 text-primary" />,
  },
  {
    id: 'teams',
    title: 'Maintenance Teams',
    description: 'Specialized groups (Mechanics, IT, Electricians) with controlled visibility and direct technician assignment.',
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    id: 'requests',
    title: 'Maintenance Requests',
    description: 'Corrective and preventive maintenance with auto-filled logic and full status lifecycle tracking.',
    icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
  },
];

export const SMART_FEATURES = [
  {
    title: 'Kanban Board',
    description: 'Intuitive drag-and-drop lifecycle management for all active requests.',
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: 'Smart Scheduling',
    description: 'Calendar-based preventive maintenance views to avoid bottlenecks.',
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    title: 'Scrap Logic',
    description: 'Automatically handle unusable equipment and maintain historical records.',
    icon: <Trash2 className="w-5 h-5" />,
  },
  {
    title: 'Safety Compliance',
    description: 'Ensure all repairs meet regulatory standards with built-in checklists.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];
