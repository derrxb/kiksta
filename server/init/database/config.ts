import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { Database } from "./types";

config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseServiceRoleKey
);
