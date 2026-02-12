export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readingTime: string;
  content: string; // HTML string
}

export const posts: Post[] = [
  {
    slug: "from-erasmusinn-to-airbnb-arbitrage",
    title: "From 10,000 Rooms to Crypto Spreads to Airbnb Arbitrage",
    description:
      "How a failed marketplace, a BTC arbitrage bot, and one Airbnb listing turned into a million-dollar short-term rental business in Istanbul.",
    date: "2026-01-28",
    readingTime: "5 min read",
    content: `
<p>Every company I've built grew out of the one before it. Not by design — by necessity. When one thing stopped working, I looked at the edges for what came next. That pattern took me from a student accommodation marketplace to a Bitcoin arbitrage bot to a short-term rental portfolio generating over $1M in annual revenue.</p>

<h2>ErasmusInn: scaling supply the hard way</h2>

<p>After three years in finance, I launched ErasmusInn in 2015 — a proptech student accommodation marketplace backed by 500 Global and angel investors. The idea was simple: over 4 million students move across Europe every year and have nowhere reliable to find housing. We'd be the platform they turned to.</p>

<p>I personally validated and scaled the supply side to 10,000 rooms by onboarding hosts across 12 European cities. I stayed in a different Airbnb each night, meeting landlords, pitching the platform, and signing up inventory city by city — Berlin, Lisbon, Madrid, Istanbul, and everywhere in between. We led a 6-person sales team and were finalists at Startup Turkey 2016.</p>

<p>But underneath the traction was a structural problem. Without channel-manager tools or exclusive listing agreements, hosts distributed their inventory everywhere — on our platform, on Airbnb, on local classifieds, on Facebook groups. We had no supply lock-in. Bookings would fall through because a room had already been let somewhere else. The operation became unsustainable, and we wound it down.</p>

<h2>Finding spread where others saw noise</h2>

<p>After ErasmusInn, I was looking for what came next. I noticed that Bitcoin traded at meaningfully different prices on USD exchanges versus Turkish-lira platforms like Paribu and BTCTurk. The spread was sometimes as wide as 20% per trade.</p>

<p>I built a simple arbitrage bot — buy BTC on USD exchanges, sell on Turkish-lira platforms, pocket the spread. It worked well for a while. But like all arbitrage, the margin compressed as more participants entered. The window closed.</p>

<p>What that experience reinforced was a principle I've carried into every business since: if you can see a pricing inefficiency before the market corrects it, move fast.</p>

<h2>One listing that changed everything</h2>

<p>While running the arbitrage bot, I spotted another spread — this time in real estate. I listed my Istanbul flat on Airbnb as an experiment. Short-term letting generated roughly $4,000 per month versus around $1,000 on a long-term lease. A 4x spread, hiding in plain sight.</p>

<p>I took that insight and ran with it. I started leasing more apartments, furnishing them, and listing them on Airbnb — a model known as rental arbitrage. The economics were compelling: lease at long-term rates, operate at short-term yields, and keep the spread.</p>

<h2>Scaling to 10% of Istanbul</h2>

<p>Over the next few years, I bootstrapped that first listing into a portfolio that captured roughly 10% of Istanbul's professionally managed short-term rental listings and generated over $1M in ARR with a 45% EBITDA margin. We called the company Oval.</p>

<p>The business worked because Istanbul had massive tourist demand, a weak lira that made the city cheap for foreign visitors, and a fragmented supply of professionally managed rentals. We moved quickly, locked in favourable leases, and built out the operational muscle to manage dozens of properties simultaneously.</p>

<h2>The seeds of what came next</h2>

<p>But scaling Oval also exposed a fundamental truth about hospitality operations: the more properties you add, the more chaos you create. Every new unit meant more guest messages, more cleaner coordination, more vendor management, more exceptions — all stitched together with WhatsApp threads and spreadsheets.</p>

<p>That pain — the feeling that the operational engine was always one step from breaking — is exactly what led me to build Cendra. But that's a story for another post.</p>
`,
  },
  {
    slug: "from-banking-to-building",
    title: "Why I Left Investment Banking to Start Companies",
    description:
      "Can Koseoglu on the leap from UBS, Fibabanka, and IEG to founding startups — what finance taught me, what it couldn't, and why building felt like the only path forward.",
    date: "2025-12-15",
    readingTime: "4 min read",
    content: `
<p>I spent the first three years of my career in finance — starting as an investment banking analyst at UBS, then moving into project finance at Fibabanka where I worked on deals totalling over $600M, and finally joining the M&A team at IEG Investment Banking Group in Istanbul.</p>

<p>Those years taught me a lot. How to structure a deal. How to read a business from the outside. How to stay sharp under pressure. But they also taught me something I didn't expect: I didn't want to advise on businesses. I wanted to build them.</p>

<h2>What finance teaches you</h2>

<p>Investment banking gives you an incredible lens into how companies work. You see dozens of businesses from the inside — their unit economics, their growth levers, their fragilities. At Fibabanka, I sat across the table from hotel operators, mining companies, and manufacturers. At IEG, I was executing sell-side deals and raising capital for e-commerce companies. You develop pattern recognition fast.</p>

<p>But you're always on the outside. You model the business; you don't feel it. You never deal with a customer complaint at midnight or a warehouse that flooded.</p>

<h2>The moment it clicked</h2>

<p>There wasn't a single dramatic moment. It was a slow realisation that the people I most admired in every deal weren't the bankers — they were the founders. The ones who'd built something from nothing and were now sitting across from us explaining what they'd created.</p>

<p>I left IEG and co-founded ErasmusInn — a student accommodation marketplace. We had no funding, no team, and no idea what we were doing. Within three years, we'd scaled to 10,000+ rooms across 12 European cities and were backed by 500 Startups. It was harder than anything I'd done in banking, and I loved every minute of it.</p>

<h2>What I'd tell someone considering the same leap</h2>

<p>Finance is a great training ground, but it's not the destination for everyone. If you find yourself more excited by the companies you're advising than the advice you're giving, that's a signal worth listening to. The skills transfer — financial rigour, pattern recognition, structured thinking — but the mindset has to change completely. You go from analysing risk to living it.</p>

<p>I haven't looked back.</p>
`,
  },
  {
    slug: "scaling-erasmusinn-across-europe",
    title: "Scaling a Marketplace to 10,000 Rooms Across 12 Countries",
    description:
      "Lessons from building ErasmusInn — a student accommodation platform backed by 500 Startups. What worked, what broke, and what I'd do differently.",
    date: "2025-11-02",
    readingTime: "5 min read",
    content: `
<p>ErasmusInn was my first real company. We built a peer-to-peer accommodation marketplace for exchange students — think Airbnb, but purpose-built for the 4 million+ students who move across Europe every year and have no idea where to live.</p>

<p>Over three years, we grew to 10,000+ rooms across 12 European cities, generated over EUR 3M in GMV, and were backed by 500 Startups. We were finalists at Startup Turkey 2016. It was the most formative experience of my career.</p>

<h2>The supply-side problem</h2>

<p>Marketplaces live or die on supply. Early on, our biggest challenge was convincing landlords to list on a platform nobody had heard of. We solved this the old-fashioned way: I led a 6-person sales team and we went city by city, door by door. Berlin, Lisbon, Madrid, Istanbul — we'd spend weeks in each city building supply before even thinking about demand.</p>

<p>What worked was hyper-local execution. Every city had different landlord expectations, different payment norms, different trust thresholds. A playbook that worked in Berlin completely failed in Lisbon. You had to adapt constantly.</p>

<h2>What broke at scale</h2>

<p>The biggest lesson was that growth exposes every weakness in your business. At 500 rooms, our manual verification process felt thorough. At 5,000 rooms, it became a bottleneck. At 10,000, it was unsustainable. We should have invested in automation earlier.</p>

<p>We also underestimated the importance of payment infrastructure across borders. Students paying from Turkey to landlords in Portugal, in EUR, with different banking systems — every edge case became a support ticket.</p>

<h2>What I'd do differently</h2>

<p>I'd focus on fewer cities, deeper. We spread across 12 countries too fast. In hindsight, dominating 3-4 cities completely would have been more defensible than being present in 12.</p>

<p>But the core insight was right: students need a trusted, purpose-built platform. And the experience of building a cross-border marketplace — with all its operational complexity — shaped everything I built afterwards.</p>
`,
  },
  {
    slug: "building-the-invisible-gm",
    title: "Building the Invisible GM: Why Hospitality Needs Autonomous Agents",
    description:
      "Can Koseoglu on why the next leap for hospitality isn't better software — it's AI agents that define goals and decide the steps to get there, end to end.",
    date: "2025-09-20",
    readingTime: "5 min read",
    content: `
<p>Before starting Cendra, I spent six years running short-term rental operations at Oval. We bootstrapped an Airbnb rental arbitrage business to multi-million USD ARR, capturing 10% market share in Istanbul. On paper, it was a success. In practice, every single day was operational chaos.</p>

<h2>The pain that built Cendra</h2>

<p>When you manage a handful of properties, everything feels manageable. You respond to guest messages yourself. You coordinate cleaners over WhatsApp. You check the units personally. But the moment you try to scale past 20, 30, 50 properties, the system breaks — and what breaks isn't effort. It's the inability to reliably make and coordinate thousands of operational micro-decisions every day.</p>

<p>A guest message turns into a cleaner re-route, which triggers a maintenance call, a vendor follow-up, an owner update, an SOP check — and it all lives across WhatsApp threads, inboxes, spreadsheets, and people's heads. Every additional unit increases complexity across guest requests, housekeeping, vendor management, escalations, and owner reporting. You're adding chaos, not revenue.</p>

<h2>Why better software isn't the answer</h2>

<p>The hospitality industry has plenty of software. Property management systems, channel managers, messaging tools, task managers — operators are drowning in dashboards. But these tools still require a human to make every decision and stitch every workflow together. They digitise the chaos; they don't resolve it.</p>

<p>What operators actually need is something that can plan, decide, and execute — not just notify and wait.</p>

<h2>The Invisible GM</h2>

<p>That's what we're building at Cendra. We call it the Invisible GM — an AI operations layer built around prebuilt, domain-trained autonomous agents. These agents don't just respond to events. They run end-to-end workflows: triaging requests, triggering tasks, routing edge cases to the right person, enforcing SOPs, and maintaining consistency across the entire portfolio.</p>

<p>The operator defines the outcome — a resolved guest issue, a clean unit, a ready check-in. Cendra's agents decide the steps needed to get there. Humans only step in for true exceptions.</p>

<h2>Ending operational chaos in hospitality</h2>

<p>The short-term rental and hospitality industry is one of the last major sectors still dominated by manual workflows. Operators are brilliant at hospitality — but they're buried in coordination. Cendra exists to free them from that. To let them focus on compounding activities like scaling their portfolio and improving guest experience, while the Invisible GM handles the operational engine underneath.</p>

<p>We raised a $1M seed round led by Revo Capital to make this real. We're just getting started.</p>
`,
  },
  {
    slug: "what-i-look-for-in-cofounders",
    title: "What I Look for in a Co-Founder",
    description:
      "After starting multiple companies, here's what I've learnt about finding the right people to build with — and the mistakes most first-time founders make.",
    date: "2025-08-05",
    readingTime: "4 min read",
    content: `
<p>I've co-founded four companies now — ErasmusInn, Oval, Fullog, and Cendra. Each time, the co-founder dynamic was different. And each time, it was the single most important decision I made.</p>

<h2>Complementary skills, shared values</h2>

<p>The biggest mistake first-time founders make is partnering with people who think exactly like them. It feels comfortable, but it creates blind spots. At Cendra, my co-founders Mumin Sahin and Ali Ozaltin bring deep technical and product expertise. I bring the operator lens and commercial instinct. We overlap on values — urgency, ownership, honesty — but our skills are genuinely complementary.</p>

<h2>Stress-test before you commit</h2>

<p>You don't know someone until you've been under pressure together. Before formally co-founding, work on something together — even if it's small. See how they handle ambiguity, disagreement, and setbacks. The early days of a startup are relentlessly hard, and the wrong co-founder will make them impossible.</p>

<h2>Aligned on sacrifice</h2>

<p>Building a company requires real sacrifice — financial, personal, emotional. You need co-founders who are genuinely willing to make those sacrifices, not just say they are. Misaligned commitment is a slow poison. It doesn't kill the company overnight, but it creates resentment that compounds.</p>

<h2>The ability to disagree well</h2>

<p>The best co-founder relationships I've had are the ones where we can disagree openly, make a decision, and then commit fully — regardless of whose idea won. If you can't argue productively with your co-founder, you'll either avoid hard conversations or let them fester. Neither ends well.</p>

<p>Choose carefully. Everything else — the market, the product, the timing — can be iterated on. Your co-founders can't.</p>
`,
  },
  {
    slug: "founder-lessons-first-100-customers",
    title: "How to Get Your First 100 Customers",
    description:
      "A practical playbook from Can Koseoglu on early-stage customer acquisition — no growth hacks, just the hard work of talking to people and solving real problems.",
    date: "2025-07-12",
    readingTime: "4 min read",
    content: `
<p>I've had to find the first 100 customers for multiple businesses now — a student accommodation marketplace, a short-term rental operation, a 3PL fulfilment company, and an AI platform for hospitality operators. The tactics change; the principles don't.</p>

<h2>Do things that don't scale</h2>

<p>At ErasmusInn, our first 100 customers came from me and a small team physically walking through European cities, knocking on doors, and convincing landlords to list their rooms. At Oval, the first properties came from my personal network and cold outreach to landlords on Turkish real estate sites. None of this scales. That's the point.</p>

<p>Your first 100 customers are not a marketing problem. They're a hustle problem. You need to be in the room, on the phone, in the inbox — doing whatever it takes to get people to try your product.</p>

<h2>Solve the problem before you sell the product</h2>

<p>The best early customers come from solving their problem first and formalising the relationship second. At Cendra, our earliest users were operators I'd known from running Oval. I understood their pain because I'd lived it. The conversation wasn't "buy our software" — it was "let us take this operational headache off your plate."</p>

<h2>Ask for feedback, not permission</h2>

<p>Don't ask potential customers "would you use this?" — put something in front of them and ask "what's broken?" People are terrible at predicting their own behaviour, but they're excellent at telling you what's wrong with something they're actually using.</p>

<h2>The first 100 are the hardest</h2>

<p>Every customer after the first 100 is easier, because you'll have references, case studies, and word of mouth. But you have to earn those the hard way — one conversation at a time. There's no shortcut, and anyone who tells you otherwise is selling something.</p>
`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
