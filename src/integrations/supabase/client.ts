// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rgdsvudxgeiofgukyrqn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnZHN2dWR4Z2Vpb2ZndWt5cnFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3Njk5ODcsImV4cCI6MjA1MjM0NTk4N30.uRrhyXzwr77QD_JLFrySYyixTFaFOGbxqAK84VwY8Xo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);