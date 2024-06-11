import { DataBaseUrlSchema } from "@/types";
import LinkElement from "./LinkElement";

interface Props {
  links: DataBaseUrlSchema[]
  username: string
  handleClick: (short_url: string) => Promise<void>
}

function LinksList({ links, username, handleClick }: Props) {
  return (
    <article>
      {<p className="mb-3">Links for <strong>{username}</strong></p>}

      <ul className="flex flex-col gap-2 px-2 border-l-4 border-purple-700 divide-y-2 divide-purple-700">
        {
          links.map((link) => (
            <LinkElement key={link.short_url} handleClick={handleClick} short_url={link.short_url} long_url={link.long_url} />
          ))
        }
      </ul>
    </article>
  )
}

export default LinksList;