import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ygdbcmyfaxoepkpchbwu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnZGJjbXlmYXhvZXBrcGNoYnd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NDcxNTEsImV4cCI6MjA0OTQyMzE1MX0.M-Uuw-3qiRYETKFzt7GDBcWnl7fe0H1AcUoliOt27nk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
