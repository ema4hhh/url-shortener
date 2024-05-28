"use server"

import { createClient } from "@/utils/supabase/server";
import { generateShortUrl } from "./generateShortUrl";

export const storeNewUrl = async (url: string, username: string) => {
  const supabase = createClient();
  const lowerCaseUsername = username.toLocaleLowerCase()

  await supabase.from("urls").insert([
    {
      id: 3,
      username: lowerCaseUsername,
      long_url: url,
      short_url: generateShortUrl(),
    }
  ]);
}