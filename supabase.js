console.log("SUPABASE.JS SE HA CARGADO");

const SUPABASE_URL = "https://smxdiexgxxwjlvsdmzrq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNteGRpZXhneHh3amx2c2RtenJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0MjI4MjYsImV4cCI6MjEwMjk5ODgyNn0.Li9_BZoSoSa2XoKnNr4bBO5N2N8GL9VAHmX3ZxL2dWE";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);