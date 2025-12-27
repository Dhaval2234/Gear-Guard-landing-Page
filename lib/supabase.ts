import { createClient } from '@supabase/supabase-js';

/**
 * GearGuard Supabase Client
 * 
 * Best Practice: Use process.env for credentials.
 * We use fallbacks to prevent the application from crashing if the .env 
 * variables are not yet configured, allowing the landing page to still be viewed.
 */

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'placeholder-anon-key';

// Log a warning if we are using placeholders in a non-production environment
if (supabaseUrl.includes('placeholder') || !process.env.SUPABASE_URL) {
  if (typeof window !== 'undefined') {
    console.warn(
      "GearGuard: Supabase credentials missing or invalid. \n" +
      "Authentication features will be disabled. Please set SUPABASE_URL and SUPABASE_ANON_KEY in your environment."
    );
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
