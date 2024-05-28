"use client"

import { storeNewUrl } from "../_lib/storeNewUrl";

function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const url = formData.get('url') as string | null
    const username = formData.get('username')?.toString() ?? 'admin'

    url && storeNewUrl(url, username)
  }

  return (
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
    </form>
  )
}

export default Form;
