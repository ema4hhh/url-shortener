"use client"

import { useState } from "react";
import { storeNewGeneratedUrl } from "../_lib/storeNewGeneratedUrl";
import GeneratedUrlForm from "./GeneratedUrlForm";
import CustomUrlForm from "./CustomUrlForm";
import { storeNewCustomUrl } from "../_lib/storeNewCustomUrl";
import Link from "next/link";

function Form() {
  const [errorMessage, setErrorMessage] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [isCustomUrl, setIsCustomUrl] = useState(false)

  const handleClick = () => {
    setIsCustomUrl(!isCustomUrl)
    setErrorMessage('')
    setNewUrl('')
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const url = formData.get('url') as string | null
    const username = formData.get('username')?.toString() ?? 'admin'
    const customUrl = formData.get('customUrl') as string | null

    if (isCustomUrl && url && customUrl) {
      storeNewCustomUrl(url, customUrl, username)
        .then(result => {
          setNewUrl(result.newUrl)
          setErrorMessage(result.errorMessage)
        })
        .catch(err => {
          console.error(err)
          setErrorMessage(err.message)
        })
      return
    }

    if (url) {
      storeNewGeneratedUrl(url, username)
        .then(result => {
          setNewUrl(result.newUrl)
          setErrorMessage(result.errorMessage)
        })
        .catch(err => {
          console.error(err)
          setErrorMessage(err.message)
        })
      return
    }
  }

  return (
    <>
      <button className="primary-button" onClick={handleClick}>{isCustomUrl ? 'Generated URL' : 'Custom URL'}</button>
      <form onSubmit={handleSubmit}>
        {
          isCustomUrl
            ? <CustomUrlForm newUrl={newUrl} errorMessage={errorMessage} handleSubmit={handleSubmit} />
            : <GeneratedUrlForm newUrl={newUrl} errorMessage={errorMessage} handleSubmit={handleSubmit} />
        }
        {
          newUrl && <output>Short URL: <strong><Link href={`${window.location.origin}/${newUrl}`}>{newUrl}</Link></strong></output>
        }
      </form>
      {
        errorMessage && <p>Something went wrong: <br /> <strong>{errorMessage}</strong></p>
      }
    </>
  )
}

export default Form;
