import Link from "next/link";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-orange-200 text-3xl">
          {`This is Next App's About Page`}
        </p>
        <Link href={'/'}>
          <button className="text-2xl">Go to Home</button>
        </Link>
      </main>
    </div>
  );
}
