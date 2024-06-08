interface Props {
  newUrl: string;
  errorMessage: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function GeneratedUrlForm({ newUrl, errorMessage, handleSubmit }: Props) {
  return (
    <>
      <label>
        <span>Username:</span>
        <input required name="username" type="text" placeholder="john doe" className="text-slate-900" />
      </label>
      <label>
        <span>URL:</span>
        <input required name="url" type="text" placeholder="longUrl.com/lorem/ipsum" className="text-slate-900" />
      </label>
      <button className="submit-button" type="submit">Shorten</button>
    </>
  )
}

export default GeneratedUrlForm;