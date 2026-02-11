import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SITE } from "@/lib/constants";
import { posts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: `Articles and essays by ${SITE.name} on startups, hospitality, AI, and the founder journey.`,
  alternates: { canonical: `${SITE.url}/writing` },
  openGraph: {
    title: `Writing — ${SITE.name}`,
    description: `Articles and essays by ${SITE.name} on startups, hospitality, AI, and the founder journey.`,
    url: `${SITE.url}/writing`,
  },
};

export default function WritingPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <div className="animate-fade-up">
        <PageHeader
          title="Writing"
          description="Thoughts on startups, hospitality, AI, and things I'm learning along the way."
        />
      </div>

      <div className="animate-fade-up-delay-1 space-y-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group -mx-4 flex flex-col rounded-xl px-4 py-5 transition-colors hover:bg-neutral-50"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-semibold text-neutral-900 group-hover:text-neutral-700 leading-snug">
                {post.title}
              </h2>
            </div>
            <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed line-clamp-2">
              {post.description}
            </p>
            <div className="mt-2 flex items-center gap-3 text-xs text-neutral-400">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
