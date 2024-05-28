import Link from "next/link";

export default function Home() {
  return (
    <main>
      <button><Link href="/app/create">Go to create</Link></button>
    </main>
  );
}
