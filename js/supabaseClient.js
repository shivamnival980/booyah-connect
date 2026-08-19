// ==========================================================================
// SUPABASE CLIENT INITIALIZER FOR BOOYAHCONNECT
// ==========================================================================
// Reads frontend-safe Supabase credentials from window.ENV (env.js / config.js).
// Supports local development and production hosting (Vercel / GitHub Pages).

(function () {
  // Public frontend-safe fallback credentials for Vercel/Production deployments
  const PUBLIC_SUPABASE_URL = "https://jewekqnxezsrvbssgujc.supabase.co";
  const PUBLIC_SUPABASE_ANON_KEY = "sb_publishable_diVDJW1b2lN1mj1drjdTaQ_4PMS2EXn";

  const env = window.ENV || {};
  
  const supabaseUrl = (env.SUPABASE_URL && env.SUPABASE_URL !== "YOUR_SUPABASE_PROJECT_URL_HERE")
    ? env.SUPABASE_URL
    : PUBLIC_SUPABASE_URL;

  const supabaseAnonKey = (env.SUPABASE_ANON_KEY && env.SUPABASE_ANON_KEY !== "YOUR_SUPABASE_PUBLISHABLE_KEY_HERE")
    ? env.SUPABASE_ANON_KEY
    : PUBLIC_SUPABASE_ANON_KEY;

  window.getSupabaseClient = function () {
    if (typeof supabase !== "undefined" && supabase.createClient) {
      if (!window._supabaseClientInstance && supabaseUrl && supabaseAnonKey) {
        window._supabaseClientInstance = supabase.createClient(supabaseUrl, supabaseAnonKey);
      }
      return window._supabaseClientInstance || null;
    } else {
      console.warn("[Supabase] Supabase JS SDK is not loaded yet.");
      return null;
    }
  };
})();
