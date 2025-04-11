import { supabase } from "@/shared/libs/supabase/client";
import type { Config, Context } from "@netlify/functions";

export const config: Config = {
  path: "/api/v1/posts",
  method: ["GET"],
};

export default async (req: Request, _context: Context) => {
  if (req.method === "GET") {
    const posts = await fetchPosts();
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  throw new Response("Method Not Allowed", {
    status: 405,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
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
