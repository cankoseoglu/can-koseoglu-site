import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 mt-auto">
      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} {SITE.name}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-600"
            >
              LinkedIn
            </Link>
            <Link
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-600"
            >
              GitHub
            </Link>
            <Link
              href={SITE.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-600"
            >
              X
            </Link>
            <Link
              href="/feed.xml"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-600"
            >
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
