"use server"

import { createClient } from "@/utils/supabase/server"

export const getUserLinks = async (username: string) => {
  const supabase = createClient()
  const { data, error } = await supabase.from('urls').select('long_url,short_url').eq('username', username)

  if (error) return { username, data, error }
  return { username, data, error }
}