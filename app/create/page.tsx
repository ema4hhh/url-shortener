'use client'

import { useState } from "react";
import { generateShortUrl } from "./_lib/generateShortUrl";

function Page() {
  const [shortUrl, setShortUrl] = useState<undefined | ReturnType<typeof generateShortUrl>>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShortUrl(generateShortUrl())
  }

  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="longurl.com/lorem/ipsum" />
          <button type="submit">Shorten</button>
        </form>
        <h3>{shortUrl}</h3>
      </section>
    </main>
  )
}

export default Page;