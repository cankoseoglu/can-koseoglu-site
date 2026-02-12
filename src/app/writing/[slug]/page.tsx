import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/constants";
import { posts, getPostBySlug, formatDate } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE.url}/writing/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${SITE.url}/writing/${post.slug}`,
      authors: [SITE.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        date={post.date}
        url={`${SITE.url}/writing/${post.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url },
          { name: "Writing", url: `${SITE.url}/writing` },
          { name: post.title, url: `${SITE.url}/writing/${post.slug}` },
        ]}
      />

      <div className="animate-fade-up mb-10">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-600 mb-8"
        >
          <span aria-hidden="true">&larr;</span>
          Back to writing
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl leading-tight">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-neutral-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
      </div>

      <div
        className="animate-fade-up-delay-1 prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
