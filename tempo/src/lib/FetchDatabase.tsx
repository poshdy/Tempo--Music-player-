import { SupabaseClient } from "@supabase/supabase-js";

export async function FetchDatabase(
  client: SupabaseClient,
  table: string,
  userId: string | undefined
) {
  return await client.from(table).select('*').eq('userId', userId);
}
