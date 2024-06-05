interface Props {
  newUrl: string;
  errorMessage: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function GeneratedUrlForm({ newUrl, errorMessage, handleSubmit }: Props) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input name="username" type="text" placeholder="john doe" className="text-slate-900" />
        </label>
        <label>
          <span>URL</span>
          <input name="url" type="text" placeholder="longUrl.com/lorem/ipsum" className="text-slate-900" />
        </label>
        <button type="submit">Shorten</button>
        {
          newUrl && <output>Short URL: {newUrl}</output>
        }
      </form>

      {errorMessage && <p>Something went wrong: <br /> <strong>{errorMessage}</strong></p>}
    </>
  )
}

export default GeneratedUrlForm;