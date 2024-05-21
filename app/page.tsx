import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <button><Link href="/create">Go to create</Link></button>
    </main>
  );
}
