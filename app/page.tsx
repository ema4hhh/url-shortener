import Link from "next/link";

export default function Home() {
  return (
    <main className="gap-6">
      <h1>Welcome to the URL shortener service</h1>
      <h4>You can go ahead and <Link className="link" href="/app/urls">see the list of links</Link> or <Link className="link" href="/app/create">create a short URL</Link></h4>
    </main>
  );
}
