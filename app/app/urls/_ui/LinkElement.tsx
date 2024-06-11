import Link from "next/link"

interface Props {
  short_url: string
  long_url: string
  handleClick: (short_url: string) => Promise<void>
}

function LinkElement({ short_url, long_url, handleClick }: Props) {
  return (
    <li className="relative pb-7 md:pb-0">
      <div>
        <span className="font-semibold">Long URL: </span>
        <Link href={long_url}>{long_url}</Link>
      </div>
      <div>
        <span className="font-semibold">Short URL: </span>
        <Link href={short_url}>{short_url}</Link>
      </div>

      <div className="absolute bottom-0 right-0 flex gap-1 justify-center items-center">
        <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1.5 py-px text-center" onClick={() => navigator.clipboard.writeText(short_url)}>Copy</button>
        <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-1.5 py-px text-center" onClick={() => handleClick(short_url)}>X</button>
      </div>
    </li>
  )
}

export default LinkElement;