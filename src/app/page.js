'use client'

import Link from "next/link";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <p className="text-orange-200 text-3xl">
                    This is Next App
                </p>

                <Link href={'/about'}>
                    <button className="text-2xl">Go to About</button>
                </Link>
                <button className="text-2xl" onClick={() => {
                    window.location.href = 'planify://tradebook';
                }}>Trade book
                </button>
                <button className="text-2xl" onClick={() => {
                    window.location.href = 'planify://';
                }}>Open App
                </button>
                <p className="text-orange-200 text-3xl">
                    Complete URL
                </p>
                <button className="text-2xl" onClick={() => {
                    window.location.href = 'https://planify.in/tradebook';
                }}>Trade book
                </button>
                <button className="text-2xl" onClick={() => {
                    window.location.href = 'https://planify.in/';
                }}>Open App
                </button>
            </main>
        </div>
    );
}
