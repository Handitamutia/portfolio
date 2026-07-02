import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8f0ea] text-[#252047]">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d96d68]">Page not found</p>
        <h1 className="mt-6 text-6xl font-serif tracking-tight">404</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#57506e]">
          The page you&apos;re looking for cannot be found. Return to the portfolio homepage and explore the work.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#252047] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#3b3a6c]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
