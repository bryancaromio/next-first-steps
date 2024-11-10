import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-4xl font-bold">
        Hello World!!
        {new Date().toLocaleTimeString()}
      </span>

      <Link href="/about">About</Link>
    </main>
  );
}
