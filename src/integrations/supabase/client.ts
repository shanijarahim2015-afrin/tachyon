// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://arhkdrjfvyzoycjpwwul.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyaGtkcmpmdnl6b3ljanB3d3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzg0MTYsImV4cCI6MjA2ODY1NDQxNn0.M6kKS1XHPaBaQiGeyqzU6DoMttTWrCCcUwTg7ZUc8Gw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});