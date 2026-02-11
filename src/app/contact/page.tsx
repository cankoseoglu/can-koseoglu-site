import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name}. Reach out via email or connect on LinkedIn.`,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: `Contact — ${SITE.name}`,
    description: `Get in touch with ${SITE.name}. Reach out via email or connect on LinkedIn.`,
    url: `${SITE.url}/contact`,
  },
};

const links = [
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    description: SITE.email,
    external: false,
  },
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    description: "Connect on LinkedIn",
    external: true,
  },
  {
    label: "GitHub",
    href: SITE.github,
    description: "See what I'm building",
    external: true,
  },
  {
    label: "X / Twitter",
    href: SITE.twitter,
    description: "Follow for updates",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <div className="animate-fade-up">
        <PageHeader
          title="Contact"
          description="I'm always open to interesting conversations. Reach out — I'll do my best to reply."
        />
      </div>

      <div className="animate-fade-up-delay-1 grid gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between rounded-xl border border-neutral-100 px-6 py-5 transition-all hover:border-neutral-200 hover:bg-neutral-50 hover:shadow-sm"
          >
            <div>
              <h2 className="font-semibold text-neutral-900">{link.label}</h2>
              <p className="mt-0.5 text-sm text-neutral-500">
                {link.description}
              </p>
            </div>
            <span className="text-neutral-300 transition-transform group-hover:translate-x-1 group-hover:text-neutral-500">
              &rarr;
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
