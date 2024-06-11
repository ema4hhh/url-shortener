"use server"

import { createClient } from "@/utils/supabase/server"

export const deleteUrl = async(shortUrl: string) => {
  const supabase = createClient()
  const { error } = await supabase.from('urls').delete().eq('short_url', shortUrl)

  return error
}