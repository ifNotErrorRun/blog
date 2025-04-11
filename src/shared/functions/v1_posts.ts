import { supabase } from "@/shared/libs/supabase/client";
import type { Config, Context } from "@netlify/functions";

export const config: Config = {
  path: "/api/v1/posts",
  method: ["GET"],
};

export default async (req: Request, _context: Context) => {
  console.log("GET /api/v1/posts");
  const SUPABASE_URL = process.env["SUPABASE_URL"];
  if (!SUPABASE_URL) {
    throw new Error("SUPABASE_URL is not defined");
  }
  const SUPABASE_ANON_KEY = process.env["SUPABASE_ANON_KEY"];
  if (!SUPABASE_ANON_KEY) {
    throw new Error("SUPABASE_ANON_KEY is not defined");
  }
  const posts = await fetchPosts();
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const fetchPosts = async () => {
  const { data, error } = await supabase
    .from("post")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  if (!data) {
    throw new Error("No data found");
  }
  return data;
};
