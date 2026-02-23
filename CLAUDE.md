# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Next.js dev server
npm run build    # Production build
npm run lint     # ESLint
npm start        # Start production server
```

No test runner is configured.

To open the Sanity Studio locally, run `npm run dev` and navigate to `/studio`.

## Architecture

This is a **Next.js 16 App Router** single-page marketing site for HKTVRO (Hong Kong security/tech integrator), backed by **Sanity CMS** with bilingual (English/Chinese) support.

### Routing & i18n

- Root `/` redirects to `/en` (see `app/page.tsx`)
- Path-based i18n: `/en` and `/zh` via `app/(site)/[lang]/page.tsx`
- The `(site)` route group applies `SiteHeader` + `SiteFooter` layout (`app/(site)/layout.tsx`)
- `HtmlLangSync` is a client component that syncs `document.documentElement.lang` based on the URL path
- Lang is derived from the URL path (`pathname.startsWith("/zh")`), not search params or cookies

### Content Layers

There are **two parallel i18n copy systems** — be careful not to conflate them:

1. **`app/lib/i18n.ts`** — Static fallback copy in simplified Chinese (简体). Used by server components and SSR. Exports `copy` object and `getLangFromSearchParams()`.
2. **`app/lib/copy.ts`** — Static copy in traditional Chinese (繁體). Used by most client components (SiteHeader, section components). Exports `copy` object and `getLang()`.

Both use the same structure: `copy.section.key[lang]` where `lang` is `"en" | "zh"`.

Dynamic content is fetched from **Sanity** via functions in `sanity/lib/client.ts`. Sanity fields use `_en` / `_zh` field name suffixes (e.g., `title_en`, `title_zh`).

### Sanity CMS

- Studio mounted at `/studio` (route: `app/studio/[[...tool]]/page.tsx`)
- Sanity config: `sanity.config.ts` — uses `projectId`/`dataset` from env vars
- Schema types live in `sanity/schemaTypes/` — all are **singletons** (one document per type, enforced via custom `structure.ts`)
- Schema types: `siteSettings`, `solutionsSection`, `industriesSection`, `whyusSection`, `processSection`, `projectsSection`, `contactSection`, `hiringSection`
- All section schemas follow the same bilingual field pattern with `_en`/`_zh` suffixes
- Fetch helpers in `sanity/lib/client.ts` — one function per schema type

### Required Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_API_VERSION   # optional, defaults to 2026-02-21
RESEND_API_KEY                   # for contact form emails
CONTACT_TO_EMAIL                 # recipient address for contact form
```

### Component Structure

- `app/components/Layout/` — `SiteHeader`, `SiteFooter`, `SiteFooterWrapper`, `Container`, `Section`, `LangSwitch`
- `app/components/sections/` — one component per page section (Hero, Solutions, Industries, WhyUs, Process, Projects, Contact/ContactWrapper, Hiring)
- `app/components/ui/` — `SectionHeading`, `FadeIn`
- `components/ui/` — shadcn/ui primitives (Button, Badge, Card, Input, Separator, Sheet, Textarea)
- `lib/utils.ts` — `cn()` utility from shadcn

### Contact Form

- Client-side form posts to `/api/contact` (Next.js Route Handler)
- Server sends email via **Resend** SDK
- Form state is managed locally in `Contact.tsx`; `ContactWrapper` handles Suspense boundary

### Styling

- Tailwind CSS v4 with `@tailwindcss/postcss`
- `tw-animate-css` for animations, `class-variance-authority` + `clsx` + `tailwind-merge` for variant composition
- CSS variables for theming (defined in `app/globals.css`)
