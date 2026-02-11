# cankoseoglu.com

Personal website for Can Koseoglu. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Font:** Geist (via next/font)
- **Deployment:** Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Hero with name, positioning, and CTAs |
| `/about` | Bio, timeline, values |
| `/writing` | Blog index with 5 placeholder posts |
| `/writing/[slug]` | Individual post pages |
| `/now` | Current focuses (nownownow.com style) |
| `/contact` | Email, LinkedIn, GitHub, X links |

## SEO

- Unique `<title>`, `<meta description>`, and canonical URL per page
- JSON-LD structured data (Person, WebSite, Article schemas)
- Auto-generated `sitemap.xml` and `robots.txt`
- RSS feed at `/feed.xml`
- Dynamic OpenGraph image via `opengraph-image.tsx`
- Twitter card metadata

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). No configuration needed — Vercel auto-detects Next.js.

## Customization

Edit `src/lib/constants.ts` to update:
- Name, bio, and description
- Email, LinkedIn, GitHub, and X URLs
- Site URL (for canonical links and sitemap)

Edit `src/lib/posts.ts` to add/update blog posts.

Replace `src/app/favicon.ico` with your own favicon.
