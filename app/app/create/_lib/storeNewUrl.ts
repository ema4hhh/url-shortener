"use server"

import { createClient } from "@/utils/supabase/server";
import { generateShortUrl } from "./generateShortUrl";

export const storeNewUrl = async (url: string, username: string) => {
  const supabase = createClient();
  const lowerCaseUsername = username.toLocaleLowerCase()
  let newShortUrl: string;
  let errorMessage = '';

  // while the generated short url is already in use, generate a new one
  while (true) {
    let iterations = 0;
    newShortUrl = generateShortUrl();
    const { data } = await supabase.from("urls").select().eq('short_url', newShortUrl);

    if (iterations > 10) {
      errorMessage = "I am sorry, there is too many generated links already, please contact me in github";
      break;
    };

    if (data === null) {
      errorMessage = "I am sorry, there is an error with the database, please contact me in github";
      break;
    };

    if (data.length === 0) break;

    iterations++
  }

  if (errorMessage !== '') {
    throw new Error(errorMessage);
  };

  await supabase.from("urls").insert([
    {
      username: lowerCaseUsername,
      long_url: url,
      short_url: newShortUrl,
    }
  ]);

  return newShortUrl;
}