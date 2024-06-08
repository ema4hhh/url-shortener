"use server"

import { createClient } from "@/utils/supabase/server"
import { checkValidCustomShortUrl } from "./checkValidCustomShortUrl"

export const storeNewCustomUrl = async (url: string, customUrl: string, username: string) => {
  const supabase = createClient()
  const lowerCaseUsername = username.toLocaleLowerCase()
  const { data } = await supabase.from("urls").select().eq('short_url', customUrl);
  const alreadyExistsShortUrl = !!data?.length
  // For some reason, I have to await checkValidCustomUrl, even though it is not asynchronous
  const isValidCustomShortUrl = await checkValidCustomShortUrl(customUrl)
  let errorMessage: string;

  if (data === null) {
    errorMessage = "I am sorry, there is an error with the database, please contact me in github";
    return {
      newUrl: '',
      errorMessage: errorMessage
    }
  };

  if (alreadyExistsShortUrl) {
    errorMessage = "I am sorry, the short url already exists, please try another one";
    return {
      newUrl: '',
      errorMessage: errorMessage
    }
  };

  if (!(isValidCustomShortUrl.isValid)) {
    errorMessage = isValidCustomShortUrl.message;

    return {
      newUrl: '',
      errorMessage: errorMessage
    }
  }

  await supabase.from("urls").insert([
    {
      username: lowerCaseUsername,
      long_url: url,
      short_url: customUrl,
    }
  ]);

  return {
    newUrl: customUrl,
    errorMessage: ''
  };
}