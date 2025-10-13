# Front-End Developer Portfolio

## Portfolio Overview

Animated, single-page portfolio for a front-end developer built with Next.js 15, Tailwind CSS 4, and Framer Motion. The layout highlights hero storytelling, case studies, skillsets, experience, testimonials, and a polished contact CTA.

## Key Features

- Motion-rich hero with floating spotlights and dual CTA buttons.
- Project carousel with hover reveals and animated call-to-action links.
- Skills grid paired with infinite marquees for process highlights.
- Timeline-style experience section and testimonial quotes.
- Gradient contact card with quick-access social and email links.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- lucide-react icon set

## Project Structure

- `src/app/page.tsx` — Composition of all portfolio sections.
- `src/components/` — Individual section components and shared UI primitives.
- `src/lib/portfolio-data.ts` — Structured data for hero content, projects, skills, timeline, testimonials, and contact links.
- `public/` — Static assets (add your own imagery, favicons, résumé, etc.).

## Getting Started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Available Scripts

- `npm run dev` — Start the development server with Turbopack.
- `npm run lint` — Lint the codebase using ESLint.
- `npm run build` — Compile the production bundle.
- `npm run start` — Serve the production build locally.

## Customization Checklist

- Update `src/lib/portfolio-data.ts` with your name, biography, project links, and contact details.
- Replace placeholder URLs such as résumé download and live demos.
- Swap gradients, imagery, or iconography to match your branding.
- Add actual assets (logo, social previews, résumé PDF) inside `public/`.
- Adjust metadata in `src/app/layout.tsx` for SEO and sharing.

## Deployment

The project is ready for platforms like Vercel, Netlify, or your preferred host:

```bash
npm run build
npm run start
```

Ensure environment variables or analytics scripts are configured in `next.config.ts` before deploying.

## License

This starter portfolio is provided without a license. Add your preferred license file before publishing.
