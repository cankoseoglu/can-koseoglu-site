import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${SITE.name} — founder, CEO, and serial entrepreneur building at the intersection of AI, proptech, and hospitality.`,
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: `About — ${SITE.name}`,
    description: `Learn more about ${SITE.name} — founder, CEO, and serial entrepreneur.`,
    url: `${SITE.url}/about`,
  },
};

const timeline = [
  {
    year: "2023 – Present",
    title: "Cendra — Co-Founder",
    description:
      "Building the Invisible GM — an AI operations layer of prebuilt autonomous agents that run end-to-end hospitality operations. Operators define the outcome and Cendra's agents decide the steps to get there, from guest communication and task coordination to inspections, vendor management, and exception handling. Raised a $1M seed round led by Revo Capital.",
  },
  {
    year: "2020 – 2024",
    title: "Fullog — Co-Founder",
    description:
      "Bootstrapped one of Turkey's earliest 3PL fulfilment companies from the ground up. Secured a 10-year lease on a distressed asset, built out the warehouse, and scaled operations across inventory management, pick-pack-ship workflows, and multi-tenant logistics.",
  },
  {
    year: "2018 – 2024",
    title: "Oval — Founder",
    description:
      "Bootstrapped an Airbnb rental arbitrage business to a multi-million USD ARR company with 45% EBITDA margin, capturing 10% market share of Airbnb rentals in Istanbul. The operator pain felt here — coordinating cleaners, managing vendors, handling guest escalations across WhatsApp threads and spreadsheets — became the foundation for Cendra.",
  },
  {
    year: "2015 – 2018",
    title: "ErasmusInn — Co-Founder",
    description:
      "Co-founded a peer-to-peer student accommodation marketplace that scaled to 10,000+ rooms across 12 European cities, generating over EUR 3M in GMV. Led a 6-person sales team. Backed by 500 Startups. Finalist at Startup Turkey 2016.",
  },
  {
    year: "2014 – 2015",
    title: "IEG — Investment Banking Analyst",
    description:
      "M&A team. Led the execution of sell-side transactions in the steel scrap sector generating over $100M in annual revenue. Raised $3M at a $50M valuation for an e-commerce company specialising in furniture and household goods.",
  },
  {
    year: "2013 – 2015",
    title: "Fibabanka — Project Finance Analyst",
    description:
      "Worked across major project finance deals totalling over $600M, spanning hotel management, tourism, mining, manufacturing, and urban renewal. Closed the EUR 200M debt refinancing for a hotel management company operating across Antalya and Bodrum.",
  },
  {
    year: "2012 – 2013",
    title: "UBS — Investment Banking Analyst",
    description:
      "Started career in global banking at UBS. M&A team, gaining foundational experience in capital markets and institutional finance.",
  },
];

const values = [
  {
    title: "Build to lead, lead to build",
    description:
      "I start companies to solve real problems. The best way to lead is to stay close to the product and the customer — always.",
  },
  {
    title: "Move fast, learn faster",
    description:
      "Speed wins. I believe in getting to market quickly, listening to users, and iterating relentlessly. Perfect is the enemy of shipped.",
  },
  {
    title: "Assemble great teams",
    description:
      "Companies are built by people. I focus on recruiting exceptional talent, creating ownership culture, and getting out of the way.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <div className="animate-fade-up">
        <PageHeader
          title="About"
          description={`${SITE.name} — founder, CEO, and serial entrepreneur building companies from zero to one.`}
        />
      </div>

      {/* Bio */}
      <div className="animate-fade-up-delay-1 prose mb-16">
        <div className="mb-8 not-prose">
          <Image
            src="/headshot.jpg"
            alt="Can Koseoglu — Founder, CEO, Builder"
            width={128}
            height={128}
            className="rounded-full border-2 border-neutral-100"
            priority
          />
        </div>
        <p>
          I&apos;m Can Koseoglu — a founder
          and CEO based in London. I build companies at the intersection of
          technology and real-world industries. Over the past decade, I&apos;ve gone
          from investment banking to founding and scaling multiple startups across
          proptech and hospitality.
        </p>
        <p>
          Right now I&apos;m leading{" "}
          <a
            href="https://cendra.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
          >
            Cendra
          </a>
          , where we&apos;re building the Invisible GM — an AI operations layer
          of prebuilt autonomous agents that run end-to-end hospitality
          operations. You define the outcome — a resolved guest issue, a clean
          unit, a ready check-in — and Cendra&apos;s agents decide the steps
          needed to get there. The idea was born from running Oval, where I
          bootstrapped an Airbnb rental arbitrage business to multi-million USD
          ARR and 10% market share in Istanbul — and felt first-hand how
          operational chaos breaks the moment you try to scale properties. In
          parallel, I co-founded Fullog, bootstrapping one of Turkey&apos;s earliest
          3PL fulfilment companies from the ground up. Before that, I co-founded
          ErasmusInn — a student accommodation marketplace that scaled to 10,000+
          rooms across 12 European cities, backed by 500 Startups.
        </p>
        <p>
          I started my career in finance — as an investment banking analyst at
          UBS, then in project finance at Fibabanka, followed by M&amp;A at IEG
          Investment Banking Group. Those years gave me a strong foundation in
          deal-making and strategic thinking. But I quickly realised I wanted to
          build, not advise — and I&apos;ve been starting companies ever since.
        </p>
        <p>
          Away from work, you&apos;ll find me on a tennis court, a golf course,
          or a ski slope — whichever is closest.
        </p>
      </div>

      {/* Timeline */}
      <div className="animate-fade-up-delay-2 mb-16">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 mb-8">
          Career
        </h2>
        <div className="space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="group flex gap-6">
              <div className="w-36 shrink-0 pt-0.5">
                <span className="text-sm font-medium text-neutral-400 font-mono">
                  {item.year}
                </span>
              </div>
              <div className="border-l border-neutral-100 pl-6">
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="animate-fade-up-delay-3">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 mb-8">
          What I believe in
        </h2>
        <div className="grid gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-neutral-100 p-6 transition-colors hover:border-neutral-200 hover:bg-neutral-50/50"
            >
              <h3 className="font-semibold text-neutral-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
