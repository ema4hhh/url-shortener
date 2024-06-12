"use server"

import { createClient } from "@/utils/supabase/server"

export const deleteUrl = async(shortUrl: string) => {
  const supabase = createClient()

  const databaseShortUrlFormat = shortUrl.split('/').pop()

  console.log(databaseShortUrlFormat);
  

  if (!databaseShortUrlFormat) return

  const { error } = await supabase.from('urls').delete().eq('short_url', databaseShortUrlFormat)

  return error
}