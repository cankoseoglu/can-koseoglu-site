import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Now",
  description: `What ${SITE.name} is focused on right now — inspired by nownownow.com.`,
  alternates: { canonical: `${SITE.url}/now` },
  openGraph: {
    title: `Now — ${SITE.name}`,
    description: `What ${SITE.name} is focused on right now.`,
    url: `${SITE.url}/now`,
  },
};

const focuses = [
  {
    title: "Leading Cendra",
    description:
      "Running day-to-day as CEO — product strategy, fundraising, hiring, and shipping the Invisible GM: autonomous AI agents that run end-to-end hospitality operations so operators can scale without scaling overhead.",
  },
  {
    title: "Scaling go-to-market",
    description:
      "Focused on growing Cendra's customer base across key hospitality markets. Building partnerships, refining our sales motion, and turning early traction into repeatable revenue.",
  },
  {
    title: "Expanding the agent roadmap",
    description:
      "Pushing Cendra's workflow-first roadmap deeper into physical operations — AI-assisted cleaning inspections, smart-home integrations, and fully agent-driven automation across the property lifecycle.",
  },
  {
    title: "Writing and speaking",
    description:
      "Sharing what I've learnt from building companies — on stage and online. Writing about startups, leadership, and the founder journey.",
  },
];

const LAST_UPDATED = "February 2026";

export default function NowPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <div className="animate-fade-up">
        <PageHeader
          title="Now"
          description="What I'm focused on at this point in my life."
        />
      </div>

      <div className="animate-fade-up-delay-1 grid gap-6 mb-12">
        {focuses.map((focus) => (
          <div
            key={focus.title}
            className="rounded-xl border border-neutral-100 p-6 transition-colors hover:border-neutral-200 hover:bg-neutral-50/50"
          >
            <h2 className="font-semibold text-neutral-900">{focus.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              {focus.description}
            </p>
          </div>
        ))}
      </div>

      <div className="animate-fade-up-delay-2 rounded-xl bg-neutral-50 p-6">
        <p className="text-sm text-neutral-500">
          This page is inspired by{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
          >
            nownownow.com
          </a>
          . Last updated{" "}
          <span className="font-medium text-neutral-700">{LAST_UPDATED}</span>.
        </p>
      </div>
    </section>
  );
}
