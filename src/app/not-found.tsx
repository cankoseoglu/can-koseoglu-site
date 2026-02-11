import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6">
      <div className="flex min-h-[calc(100vh-65px-120px)] flex-col items-center justify-center text-center">
        <p className="text-7xl font-bold text-neutral-200">404</p>
        <h1 className="mt-4 text-xl font-semibold text-neutral-900">
          Page not found
        </h1>
        <p className="mt-2 text-neutral-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-neutral-700"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
