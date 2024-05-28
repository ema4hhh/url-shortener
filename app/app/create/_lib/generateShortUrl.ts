import { BASE_62_CHAR_SET, SHORT_LINK_LENGTH } from "@/app/constants"

export const generateShortUrl = () => {
  let shortenedUrl: string[] = new Array(SHORT_LINK_LENGTH)
  for (let i = 0; i < SHORT_LINK_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * BASE_62_CHAR_SET.length)
    shortenedUrl[i] = BASE_62_CHAR_SET[randomIndex]
  }

  return shortenedUrl.join("")
}