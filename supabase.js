console.log("SUPABASE.JS SE HA CARGADO");

const SUPABASE_URL = "https://mpuisitgepxfhukfvleu.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdWlzaXRnZXB4Zmh1a2Z2bGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyMjU0NjMsImV4cCI6MjEwMTgwMTQ2M30.U15nDVvMFos0lRn8xinXJVTzNKjpWFoDx3BPXd6sd_s";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);