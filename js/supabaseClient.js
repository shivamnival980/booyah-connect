// ==========================================================================
// SUPABASE CLIENT INITIALIZER FOR BOOYAHCONNECT
// ==========================================================================
// Reads frontend-safe Supabase credentials from window.ENV defined in env.js.
// Does NOT hardcode credentials or expose service-role secret keys.

(function () {
  const env = window.ENV || {};
  const supabaseUrl = env.SUPABASE_URL || "";
  const supabaseAnonKey = env.SUPABASE_ANON_KEY || "";

  if (!supabaseUrl || supabaseUrl === "YOUR_SUPABASE_PROJECT_URL_HERE") {
    console.warn("[Supabase] SUPABASE_URL is missing or using placeholder in env.js");
  }

  if (!supabaseAnonKey || supabaseAnonKey === "YOUR_SUPABASE_PUBLISHABLE_KEY_HERE") {
    console.warn("[Supabase] SUPABASE_ANON_KEY is missing or using placeholder in env.js");
  }

  window.getSupabaseClient = function () {
    if (typeof supabase !== "undefined" && supabase.createClient) {
      if (!window._supabaseClientInstance && supabaseUrl && supabaseAnonKey && supabaseUrl !== "YOUR_SUPABASE_PROJECT_URL_HERE") {
        window._supabaseClientInstance = supabase.createClient(supabaseUrl, supabaseAnonKey);
      }
      return window._supabaseClientInstance || null;
    } else {
      console.warn("[Supabase] Supabase JS SDK is not loaded yet.");
      return null;
    }
  };
})();
