This repository is a Next.js (App Router) site tightly integrated with a local Sanity Studio.

Purpose
- Help AI coding agents make safe, focused changes: where content lives, how i18n works, and how Sanity is wired.

Quick start (dev)
- Run local dev server: `npm run dev` (uses Next.js `app/` router).
- Key env required for Sanity: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION` (see `sanity/env.ts`).

Big picture
- Frontend: `app/` contains the Next.js App Router pages and layouts. See `app/(site)/[lang]/page.tsx` and `app/layout.tsx` for site shell and per-language pages.
- Components: shared UI under `components/` and `app/components/` (layout helpers in `app/components/Layout/`).
- Content: Sanity schemas and Studio live in `sanity/` (schemaTypes, `sanity.config.ts`, `sanity.cli.ts`). The Studio is mounted at the local route implemented in `app/studio/[[...tool]]/page.tsx`.
- Data flow: frontend calls helpers in `sanity/lib/client.ts` and `sanity/lib/live.ts` to fetch GROQ results. Images are built via `sanity/lib/image.ts`.

Important conventions (do not invent alternatives)
- Localisation: content fields use language suffixes (`*_en` / `*_zh`). Fetchers in `sanity/lib/client.ts` select both variants — pick the appropriate one at rendering time. The app-level copy is in `app/lib/copy.ts` and `getLang()` reads `?lang=` query param.
- Sanity-first edits: schema changes belong in `sanity/schemaTypes/`. Modify schema files there and update `sanity/schemaTypes/index.ts` if needed.
- Live content: use `sanity/lib/live.ts` (`sanityFetch`, `SanityLive`) if pages need auto-updating in dev or preview.
- API routes: server endpoints use Next App routes under `app/api/` (example: `app/api/contact/route.ts`). Keep server logic inside those files.

Helpful file examples
- To change copy strings: `app/lib/copy.ts` (contains English/Chinese literals).
- To add a Sanity query helper: `sanity/lib/client.ts` (pattern: `export async function getX() { return client.fetch(<GROQ>) }`).
- To generate image URLs: `sanity/lib/image.ts` exports `urlFor(source)`.

Build / deploy notes
- Standard Next.js commands: `npm run build` and `npm run start`.
- This project expects Node environment variables for Sanity before build — build will throw if `NEXT_PUBLIC_SANITY_PROJECT_ID` or `NEXT_PUBLIC_SANITY_DATASET` are missing (see `sanity/env.ts`).

Code style & tests
- TypeScript with React 19 and Next 16 — prefer explicit types on exported helpers.
- Linting: run `npm run lint` (uses eslint). There are no automated tests in the repo by default.

When editing content or schema
- Schema edits: change files in `sanity/schemaTypes/`, then run the Sanity CLI locally (repo contains `sanity.cli.ts`). If you change a published field name, update all callers in `sanity/lib/client.ts` and any front-end components that read those fields.

When adding pages or components
- Place route-level pages under `app/`. Use `app/(site)/` for language-aware routing and keep shared layout in `app/layout.tsx`.

Questions I will ask before making major changes
- Do you want schema code added to the local Studio (`sanity/schemaTypes/`) or deployed directly to cloud?
- Which languages and locales should I target when adjusting content fields (current repo uses `en` and `zh`)?

If something's missing
- If you want tests, CI, or deployment automation added, tell me which provider (Vercel, GitHub Actions, etc.) and I will draft it.

End of file
