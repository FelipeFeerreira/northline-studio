# Northline Studio

Complete responsive agency project: Next.js 14 App Router, TypeScript, Tailwind CSS, Zustand, TanStack Query, PostgreSQL and Prisma. Original forest-green design with local artwork and all requested landing-page sections plus dedicated pages.

## Release status

The source is ready for setup and testing, but public production release is blocked by the required Next.js 14 line: npm audit reports a critical advisory for Next.js 14.2.35, the newest published 14.x version at verification. Next.js 14 is outside current LTS support. Upgrade to a supported, patched major before public deployment; this deliverable preserves your explicitly requested version. See https://nextjs.org/support-policy and https://github.com/vercel/next.js/security/advisories. Other reported dependency findings were resolved using compatible versions and a PostCSS override. The remaining risk is not claimed to be fixed by application-level safeguards.

## Local setup

Requires Node.js 22 LTS, npm, and PostgreSQL.

```sh
npm ci
cp .env.example .env
# PowerShell: Copy-Item .env.example .env
```

Set DATABASE_URL and DIRECT_URL to your PostgreSQL instance. The first is the runtime URL (a pooled connection is appropriate for serverless); the second is the direct migration URL. They may be identical locally. Use the database provider's TLS settings in production. Never commit credentials.

```sh
npm run db:deploy
npm run dev -- --hostname 127.0.0.1
```

Visit http://localhost:3000. The included initial migration creates ContactSubmission. No seed is needed. For subsequent schema changes, run `npm run db:migrate -- --name describe_change` and commit the generated migration. `npm run db:generate` regenerates Prisma Client.

## Configuration

| Variable | Use |
| --- | --- |
| DATABASE_URL | Runtime PostgreSQL URL |
| DIRECT_URL | Direct connection for migrations |
| NEXT_PUBLIC_SITE_URL | Canonical origin, without trailing slash |
| NEXT_PUBLIC_CONTACT_EMAIL | Your real public email; default hello@example.com is a placeholder |
| NEXT_PUBLIC_CALENDLY_URL | Your real HTTPS Calendly URL; empty uses email scheduling |
| NEXT_PUBLIC_LINKEDIN_URL | Your real agency profile; empty displays coming soon |
| NEXT_PUBLIC_GITHUB_URL | Your real agency profile; empty displays coming soon |

Public variables are embedded at build time; rebuild after changes. Never use NEXT_PUBLIC variables for secrets. Booking and social values should be valid HTTPS URLs.

## Verification and production server

```sh
npm test
npm run build
npm run typecheck
npm start -- --hostname 127.0.0.1
```

The build generates Prisma Client but does not connect to PostgreSQL or apply migrations. Tests cover the hero, successful and failed contact submissions, validation, persistence calls, safe database failures, origin checks, honeypot handling, and payload limits. API tests mock Prisma; real database persistence must be checked against your configured database.

## Contact flow

POST /api/contact accepts JSON fields name, email, optional phone, message, and the hidden website honeypot. Input is trimmed and validated, request size is capped at 24 KB, browser origin is checked, and valid records are persisted with Prisma. Database failures return a safe 503 response without internal details. The form uses TanStack Query useMutation with pending, success and accessible error states, retaining input on failure. An explicit success response follows a completed database write, except intentionally indistinguishable bot responses.

Submissions are stored only: no email notification or CRM service is configured. Use `npx prisma studio` on a trusted local machine to review records; do not expose it publicly. Configure access control, backups and retention/deletion for the database.

Honeypot and origin checks do not constitute rate limiting. Configure a Vercel Firewall rate-limit rule on /api/contact for the expected traffic before public release. No extra backend service is included.

## Vercel deployment

1. Resolve the framework release blocker above before exposing the site publicly.
2. Push this folder as your repository root, or set it as Vercel's project root. Select Next.js and Node.js 22.x. vercel.json uses npm ci and npm run build.
3. Add the environment variables listed above. Set the real canonical domain and contact information. Use separate databases for Preview and Production.
4. From a trusted local shell or release job with the target database environment, run `npm run db:deploy`. Migrations are deliberately separate from builds so preview deployments do not modify production.
5. Deploy, attach the domain, configure the endpoint rate limit, and submit a real inquiry. Verify the row in the intended database and test booking, email, social links, and mobile navigation.

## Content to replace before launch

- Northline is an invented agency brand. Change header/footer, site configuration and metadata if needed.
- Portfolio SVGs are original illustrative concepts, clearly marked as placeholders; no real client projects or outcomes are claimed.
- Replace the testimonial placeholder with an approved quote or remove it.
- Set real email, Calendly and social links; missing URLs never link to fabricated profiles.
- Confirm the service-plan scope and commercial terms. Pricing uses tailored quotes rather than invented amounts.
- Finalize the privacy template with the legal entity, retention period, processing basis, service providers and applicable rights.
- Verify migrations, database backups and access, canonical URL, and a real contact submission.

## Structure

- app/: landing page, services, portfolio, process, testimonials, pricing, contact, privacy, metadata and contact API
- components/: hero, cards, sections, contact form, providers, navigation and footer
- lib/: site settings, validation, Prisma, TanStack Query client, Zustand UI store
- prisma/: ContactSubmission schema and initial PostgreSQL migration
- public/images/: local concept SVG screenshots
- tests/: Vitest and React Testing Library tests

No external CSS framework, font service, icon library, analytics, email service or unrelated backend is used. The UI includes visible focus styles, reduced-motion support, labelled form fields, live feedback, semantic landmarks and a skip link.

## Portfolio verification

See [verification notes](docs/PORTFOLIO_VALIDATION.md) for checks performed during preparation of this public source snapshot. Deployment instructions describe setup steps; they do not imply that a public live deployment has been provisioned.
