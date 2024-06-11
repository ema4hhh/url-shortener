import { DataBaseUrlSchema } from "@/types"

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  handleClick: (shortUrl: string) => void
  links: DataBaseUrlSchema[]
  username: string
}

function Form({ handleSubmit }: Props) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Username:</span>
        <input autoComplete="name" required name="username" type="text" defaultValue={'admin'} className="text-slate-900" />
      </label>
      <button className="submit-button w-full" type="submit">Search Links</button>
    </form>
  )
}

export default Form