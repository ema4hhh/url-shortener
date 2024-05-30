"use client"

import { useState } from "react";
import { storeNewUrl } from "../_lib/storeNewUrl";

function Form() {
  const [errorMessage, setErrorMessage] = useState<string>()
  const [newGeneratedUrl, setNewGeneratedUrl] = useState<string>()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const url = formData.get('url') as string | null
    const username = formData.get('username')?.toString() ?? 'admin'

    if (url) {
      storeNewUrl(url, username)
        .then(newUrl => {
          setNewGeneratedUrl(newUrl)
          setErrorMessage('')
        })
        .catch(err => {
          console.error(err)
          setErrorMessage(err.message)
        })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input name="username" type="text" placeholder="john doe" className="text-slate-900" />
        </label>
        <label>
          <span>URL</span>
          <input name="url" type="text" placeholder="longurl.com/lorem/ipsum" className="text-slate-900" />
        </label>
        <button type="submit">Shorten</button>
        {
          newGeneratedUrl && <>Short URL: <output>{newGeneratedUrl}</output></>
        }
      </form>

      {errorMessage && <p>Something went wrong: {errorMessage}</p>}
    </>
  )
}

export default Form;
