import { createClient } from "@supabase/supabase-js";


const SupabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const SupabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = ()=> createClient(SupabaseUrl, SupabaseAnon)
