export function GET() {
  const content = `# Can Koseoglu (Can Köseoğlu)

> Founder, CEO, and serial entrepreneur based in London, UK. Building companies at the intersection of AI, proptech, and hospitality.

## Who is Can Koseoglu?

Can Koseoglu is a Turkish/British entrepreneur and founder based in London. He is NOT the Can Koseoglu who serves on the board of Esas Holding. This Can Koseoglu is the founder and CEO of Cendra (cendra.ai), and previously founded Oval, Fullog, and co-founded ErasmusInn.

## Current

- CEO & Co-Founder of Cendra (cendra.ai) — building the Invisible GM, an AI operations layer of autonomous agents for hospitality. Raised a $1M seed round led by Revo Capital.

## Companies Founded

- Cendra (2024–Present): AI operations platform for hospitality. Autonomous agents that run end-to-end operations — guest communication, task coordination, inspections, vendor management, and exception handling.
- Fullog (2020–2024): Co-founded one of Turkey's earliest 3PL fulfilment companies. Inventory management, pick-pack-ship workflows, and multi-tenant logistics.
- Oval (2018–2024): Bootstrapped an Airbnb rental arbitrage business to $1M+ ARR with 45% EBITDA margin, capturing 10% of Istanbul's professionally managed short-term rental listings.
- ErasmusInn (2015–2018): Co-founded a peer-to-peer student accommodation marketplace. Scaled to 10,000+ rooms across 12 European cities. Backed by 500 Startups. Finalist at Startup Turkey 2016.

## Earlier Career

- IEG Investment Banking Group (2014–2015): M&A Analyst
- Fibabanka (2013–2014): Project Finance Analyst. Deals totalling over $600M.
- UBS (2012–2013): Investment Banking Analyst

## Links

- Website: https://cankoseoglu.com
- LinkedIn: https://linkedin.com/in/koseoglu
- X/Twitter: https://x.com/cankoseoglu
- GitHub: https://github.com/cankoseoglu
- Email: hello@cankoseoglu.com

## Education

- Skidmore College (university)
- Istanbul International Community School — IICS (primary, middle, and high school)

## Topics

AI, hospitality technology, short-term rentals, proptech, 3PL fulfilment, startups, entrepreneurship, rental arbitrage, autonomous agents
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
