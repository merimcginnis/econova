import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hqqjazptlxwnnfeecrzd.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxcWphenB0bHh3bm5mZWVjcnpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MzUxMTcsImV4cCI6MjA2MTIxMTExN30.3_Omrj0YK6W3S9HWAxT51JCojtHbzlU-0i_9lQ_6h4U';

export const supabase = createClient(supabaseUrl, supabaseKey);