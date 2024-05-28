"use client"

import { useState } from "react";
import { getUserLinks } from "../create/_lib/getUserLinks";
import { DataBaseSchema, DataBaseUrlSchema } from "@/types";
import Link from "next/link";

function Page() {
  const [links, setLinks] = useState<DataBaseUrlSchema[]>();
  const [username, setUsername] = useState<string>();
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const username = formData.get('username')?.toString() ?? 'admin'

    const response = await getUserLinks(username)

    if (response.error) {
      setError(response.error.message)
      return
    }
    setLinks(response.data)
    setUsername(username)
  }

  return (
    <main>
      <h1>URLs</h1>
      <h3>Type a username to get it&apos;s links</h3>

      <form onSubmit={handleSubmit}>
        <label>
          <span>username</span>
          <input name="username" type="text" defaultValue={'admin'} className="text-slate-900" />
        </label>
        <button type="submit">Search Links</button>
      </form>
      <span>default username is <strong>admin</strong></span>

      {
        links && <h3>Links for <strong>{username}</strong></h3>
      }
      {
        links?.map((link) => (
          <div key={link.short_url}>
            <div>
              <span>Long URL: </span>
              <Link href={link.long_url}>{link.long_url}</Link>
            </div>
            <div>
              <span>Short URL: </span>
              <Link href={'https://url-shortener-sage-theta.vercel.app/' + link.short_url}>{link.short_url}</Link>
            </div>
          </div>
        ))
      }
    </main>
  )
}

export default Page;