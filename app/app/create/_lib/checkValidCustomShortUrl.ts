"use server"

import { SHORT_LINK_LENGTH } from "@/app/constants";

export const checkValidCustomShortUrl = (url: string) => {
  if (!url) return {
    isValid: false,
    message: "Url is required"
  };

  if (url.length !== SHORT_LINK_LENGTH) return {
    isValid: false,
    message: "Url must be " + SHORT_LINK_LENGTH + " characters long"
  };

  if (!/^[a-zA-Z0-9]+$/.test(url)) return {
    isValid: false,
    message: "Url must only contain letters and numbers"
  };

  return {
    isValid: true,
    message: ""
  };
}