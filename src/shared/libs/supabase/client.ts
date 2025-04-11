import { createClient } from "@supabase/supabase-js";

const isServer = typeof window === "undefined";

const createSupabaseClient = () => {
  console.log(
    `Creating Supabase client for ${isServer ? "server" : "browser"}`
  );
  const supabaseUrl = isServer
    ? process.env["SUPABASE_URL"]
    : import.meta.env.VITE_SUPABASE_URL;
  if (!supabaseUrl) {
    throw new Error("SUPABASE_URL is not defined");
  }
  const supabaseKey = isServer
    ? process.env["SUPABASE_ANON_KEY"]
    : import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (!supabaseKey) {
    throw new Error("SUPABASE_ANON_KEY is not defined");
  }
  return createClient(supabaseUrl, supabaseKey);
};

export const supabase = createSupabaseClient();
