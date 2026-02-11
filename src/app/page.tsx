import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl px-6">
      <div className="flex min-h-[calc(100vh-65px-120px)] flex-col justify-center">
        <div className="animate-fade-up mb-6">
          <Image
            src="/headshot.jpg"
            alt="Can Koseoglu"
            width={88}
            height={88}
            className="rounded-full border-2 border-neutral-100"
            priority
          />
        </div>

        <div className="animate-fade-up">
          <p className="text-sm font-medium tracking-widest text-neutral-400 uppercase mb-6">
            Founder &middot; CEO &middot; Builder
          </p>
        </div>

        <h1 className="animate-fade-up-delay-1 text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
          Can Koseoglu
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-neutral-500 sm:text-xl">
          I build companies from zero to one. Currently the CEO of Cendra,
          building the Invisible GM for hospitality. From investment banking to
          scaling multiple startups across proptech and hospitality — I lead,
          build, and ship.
        </p>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/about"
            className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-neutral-700 hover:shadow-lg"
          >
            About me
          </Link>
          <Link
            href="/writing"
            className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50"
          >
            Writing
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
