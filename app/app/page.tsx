import Link from "next/link";

function Page() {
  return (
    <main className="gap-6">
      <h1>App Home</h1>
      <p><Link className="link" href="/app/create">Create a new link</Link> or <Link className="link" href="/app/urls">see a list of links</Link>.</p>
    </main>
  )
}

export default Page;