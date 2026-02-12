import { SITE } from "@/lib/constants";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    alternateName: "Can Köseoğlu",
    url: SITE.url,
    image: `${SITE.url}/headshot.jpg`,
    sameAs: [SITE.linkedin, SITE.github, SITE.twitter],
    jobTitle: "Founder & CEO",
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Hospitality Technology",
      "Short-Term Rentals",
      "Proptech",
      "3PL Fulfilment",
      "Startups",
      "Entrepreneurship",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Cendra",
      url: "https://cendra.ai",
    },
    founder: [
      {
        "@type": "Organization",
        name: "Cendra",
        url: "https://cendra.ai",
        description:
          "The Invisible GM — an AI operations layer of autonomous agents for hospitality.",
      },
      {
        "@type": "Organization",
        name: "Fullog",
        description:
          "One of Turkey's earliest 3PL fulfilment companies, providing inventory management and pick-pack-ship logistics.",
      },
      {
        "@type": "Organization",
        name: "Oval",
        description:
          "Airbnb rental arbitrage business capturing 10% of Istanbul's professionally managed short-term rental listings.",
      },
      {
        "@type": "Organization",
        name: "ErasmusInn",
        description:
          "Peer-to-peer student accommodation marketplace scaled to 10,000+ rooms across 12 European cities. Backed by 500 Startups.",
      },
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "UBS",
      },
    ],
    nationality: [
      { "@type": "Country", name: "Turkey" },
      { "@type": "Country", name: "United Kingdom" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    author: {
      "@type": "Person",
      name: SITE.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  date,
  url,
}: {
  title: string;
  description: string;
  date: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    url,
    author: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
