import { createClient } from '@supabase/supabase-js';

const supabaseEcoUrl = 'https://fymznjrmhqmcqdfrdpmq.supabase.co';
const supabaseEcoKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5bXpuanJtaHFtY3FkZnJkcG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MTY1NTYsImV4cCI6MjA2MTE5MjU1Nn0.2Yp9AycIRDPjEWFD5l58b3zpCNEXRRFgtNLWwTgdBH0';

export const supabaseEco = createClient(supabaseEcoUrl, supabaseEcoKey);