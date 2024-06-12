"use client"

import { useCallback, useState } from "react";
import { getUserLinks } from "./_lib/getUserLinks";
import { DataBaseUrlSchema } from "@/types";
import Form from "./_ui/Form";
import { deleteUrl } from "./_lib/deleteUrl";
import Loading from "./loading";
import LinksList from "./_ui/LinksList";

function useGetUserLinks() {
  const [links, setLinks] = useState<DataBaseUrlSchema[]>([]);
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUserLinks = async (username: string) => {
    setLoading(true)

    const response = await getUserLinks(username)

    if (response.error) {
      setError(response.error.message)
      setLoading(false)
      return
    }

    const responseWithCompleteShortUrl = [...response.data].map((links) => {
      links.short_url = `${window.location.origin}/${links.short_url}`
      return links
    })

    response.data = responseWithCompleteShortUrl

    setLinks(response.data)
    setLoading(false)
    setUsername(username)
  }

  return { links, username, error, setError, loading, fetchUserLinks }
}

function Page() {
  const { links, username, error, setError, loading, fetchUserLinks } = useGetUserLinks()

  const handleClick = async(shortUrl: string) => {
    const error = await deleteUrl(shortUrl)

    if (error) {
      setError(error.message)
      return
    }

    if (username === '') return

    fetchUserLinks(username)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (links.length) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const username = formData.get('username')?.toString() ?? 'admin'

    fetchUserLinks(username)
  }

  return (
    <main className="md:max-w-lg gap-2">
      <h4 className="text-center">Here you can view the created urls by username</h4>
      <h6>You can view already created links with <strong>admin</strong></h6>

      {
        error && (
          <p>Something went wrong: <span className="text-red-500">{error}</span></p>
        )
      }

      <section className="w-full flex flex-col flex-grow gap-3">
        <Form handleSubmit={handleSubmit} handleClick={handleClick} links={links} username={username} />

        {
          (links.length === 0 && username !== '') && <p> There is no links for <strong>{username}</strong></p>
        }

        {
          (loading && !(links.length)) && <Loading />
        }

        {
          !(links.length === 0) && <LinksList links={links} username={username} handleClick={handleClick} />
        }
        
      </section>
    </main>
  )
}

export default Page;