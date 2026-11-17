# Youssef Atef — Portfolio

## Project Overview

A restrained, editorial portfolio that presents Youssef Atef as a Software Engineer who turns real business problems into reliable software. Built with Next.js App Router, strict TypeScript, Tailwind CSS, shadcn/ui patterns, Lucide, Motion, and next-themes.

Status: implemented and validated locally. The original CV is now supplied and integrated; full-page reference screenshot comparison remains pending. Read this file and [the permanent brief](docs/PORTFOLIO_BRIEF.md) before future changes.

## Development Progress

### 1. Discovery and setup

- [x] Inspect workspace (empty; no existing application or applicable AGENTS.md).
- [x] Read the supplied text brief and record confirmed facts.
- [x] Add the original supplied CV and verify its PDF signature and identical source/copy SHA-256 hashes.
- [ ] Compare full-page reference screenshots — still not supplied.
- [x] Establish progress tracker and permanent brief before implementation.
- [x] Configure Next.js App Router and strict TypeScript.
- [x] Configure Tailwind, selective shadcn/ui, Lucide, Motion, and next-themes.
- [x] Separate typed content from focused presentation components (source reviewed).

### 2. Visual foundation

- [x] Define semantic light/dark tokens and Geist typography.
- [x] Establish editorial composition, spacing, borders, and responsive layouts.
- [x] Replace navigation with a responsive Personal Identity Header; desktop/mobile layouts verified in both themes.
- [x] Implement accessible persistent system-aware theme switching.

### 3. Content and sections

- [x] Hero with engineering message, location, supporting copy, and a sole Request CV action; personal identity stays in the header.
- [x] Four concise numbered capabilities with one description each.
- [x] Complete professional experience timeline.
- [x] Unified technical toolkit with all 21 verified skills and icons.
- [x] Education as supplied in the brief.
- [x] Contact section ends the page with functional verified links; Footer is removed.
- [x] Verify the real CV download: browser-downloaded bytes match the supplied PDF at desktop/mobile widths in both themes.

### 4. Interactions and accessibility

- [x] Smooth anchor scrolling and keyboard focus states.
- [x] Normal-flow Personal Identity Header with user-confirmed GitHub, LinkedIn/email actions, top anchor, and theme toggle; no subtitle, CTA, or mobile menu.
- [x] Motion entrance/reveals and reduced-motion support.
- [x] SEO metadata, verified Person structured data, favicon, social image asset.
- [ ] Configure social-image absolute URLs with the actual deployment domain.
- [x] Verify semantic landmarks, heading order, and contrast.

### 5. Validation

- [x] TypeScript check.
- [x] ESLint check (zero errors or warnings).
- [x] Production build (static export; no build warnings).
- [x] Desktop light and dark browser review.
- [x] Mobile light and dark browser review; no horizontal overflow.
- [x] Keyboard, theme persistence, header actions, and contact link checks.
- [x] Reduced-motion review and standard-motion smoke check.
- [x] Final documentation synchronized with implementation.

## Validation results

### CV delivery and Hero LinkedIn removal

- [x] Verify Request CV downloads the supplied original PDF, with the correct filename and byte-for-byte content.
- [x] Remove LinkedIn only from the Hero, preserving header and Contact links.

Source: `C:/Users/user/Downloads/Youssef_Atef_CV.pdf`. Runtime: `public/Youssef_Atef_CV.pdf` (10,883 bytes). The copied file has an identical SHA-256 hash and a valid PDF signature. Professional copy is unchanged; this update integrates the file without claiming a complete content audit.

Validation: production build/TypeScript and ESLint pass. Actual browser downloads at 1440px and 390px, in both themes, produce `Youssef_Atef_CV.pdf` with identical bytes. Hero LinkedIn is absent; header and Contact destinations remain intact.

### Developer mascot: static integration verified; animation pending

- [x] Create a stylized 3D developer character static fallback (original fictional character; not a personal likeness).
- [x] Integrate a fixed-size 48px desktop / 40px mobile circular mascot.
- [ ] Activate and verify genuine animated WebP idle/hover assets. The typed configuration and gated selection logic are implemented; both paths remain null until appropriate assets are supplied.
- [x] Verify static reduced-motion and asset-failure fallbacks, including failures before React hydration.
- [x] Verify layout, themes, hover, performance characteristics, types, lint, and production build.
- [ ] Genuine blinking/breathing/head-turn animation — pending a suitable animated character asset; do not claim a static render is animated.

Runtime asset: `public/mascot/developer-static.webp` — 192×192, transparent, 9,342 bytes. Source PNG and the exact final generation prompt are preserved in `docs/assets/`; see [MASCOT_PROMPT.md](docs/assets/MASCOT_PROMPT.md). Created with the built-in image-generation tool and optimized using existing Sharp tooling; no new dependencies were installed.

Implementation: `src/components/ui/developer-avatar.tsx`; assets are configured in `src/data/developer-avatar.ts`. The native image is decorative and the parent identity remains clickable. Static image failure shows YA initials in the same fixed shell. Optional real clips will be gated by reduced-motion preference, viewport visibility, and tab visibility; pointer leave returns to idle/static. Hover currently only retains the existing understated border treatment, with no fake blink, head rotation, breathing, or typing animation.

Validation: TypeScript, ESLint, and production build pass. All twelve viewport/theme combinations pass, including dimensions, hover remaining static, keyboard order, accessibility, and no overflow. The runtime WebP is under 12KB. Deliberately blocking the image verifies initials fallback and unchanged dimensions at desktop/mobile widths. No runtime errors occur during normal loading. The static implementation has no continuous animation work, timers, requestAnimationFrame, canvas, WebGL, Rive, or Lottie runtime; with animation paths null it starts no avatar observers. Actual animation playback, transition quality, and decoding performance remain unverified pending genuine assets.

### Header greeting & timeline refinement

- [x] Match the supplied greeting reference: “Hey, I’m Youssef Atef.” with a green name; the avatar is now a 48px desktop / 40px mobile fictional developer mascot.
- [x] Source actual company colors from official assets: SB Technology #EF3F3B from its SVG logo; Efficient Vision #0036CC from its website stylesheet. Source links are recorded in the permanent brief.
- [x] Use the primary theme color for the timeline spine and current-entry connector/marker, preserving subtle opacity (24% spine in light mode, 38% in dark mode). Production build passes; rendered color checks pass at 1440px and 390px in both themes.
- [x] Add thin 16px connectors and small junction markers aligned to company headings; no lines cross the date text. Current entry uses primary color; previous entry retains its brand blue.
- [x] Verify desktop/mobile, both themes, typecheck, lint, and build.

All twelve viewport/theme combinations pass, including connector-to-spine geometry checks and the preserved ten responsibility items. TypeScript, ESLint, and the static production build pass. axe reports zero violations and the browser reports no runtime errors or horizontal overflow. Desktop/mobile header and timeline captures were visually reviewed. Experience copy, roles, dates, and overall desktop/mobile layout remain intact. The spine sits beside the content on desktop and moves to the left edge on mobile to allow short, clean connectors.

### Composition refinement verified

- [x] Normal-flow header with refined name/avatar and no professional subtitle.
- [x] Add user-confirmed GitHub: https://github.com/yousufatef, also included in Person metadata.
- [x] Integrate Hero information and use a subtle Request CV text action.
- [x] Remove Explore indicator and its decoration.
- [x] Remove capability dividers while preserving the four capabilities and responsive grid.
- [x] Remove Footer and unused styles/imports; preserve contact information.
- [x] Verify centered container, mobile layout, both themes, links, TypeScript, lint, and production build.

All twelve viewport/theme combinations pass. Browser checks verify the header uses normal flow and scrolls offscreen; header/main share centered edges and a 1120px maximum width; name/actions do not overlap; GitHub, LinkedIn, and email destinations are correct; Request CV is a transparent text link with the preserved email fallback; capability borders, Explore controls, subtitle, and Footer are absent. No runtime errors, horizontal overflow, or axe violations were found. Desktop/mobile captures were reviewed in both themes. The original CV is now integrated as a direct download.

### UI refinement verified

- [x] Skills section redesign into one wrapping collection.
- [x] Icon and readable label for every verified skill (all 21 retained).
- [x] What I Bring reduced to four concise title/description items.
- [x] What I Bring displayed in two columns from 768px and one column on mobile. Production build passed; browser checks at 1440, 768, 767, 390, and 320px in both themes confirmed column count, row alignment, and no overflow.
- [x] Centralized typography scale across all sections.
- [x] Responsive typography review (visible text at least 12px; body 14–16px; hero 32–48px).
- [x] Light and dark theme verification.
- [x] Final browser and visual review.

The refinement preserves the section order, palette, Geist fonts, experience, contact actions, and theme/motion behavior. Capability detail was intentionally reduced, and obsolete layout styles were removed. Simple Icons supplies brand SVG paths in Server Components; the Azure DevOps logo is a local Devicon asset, and engineering practices use the existing Lucide library. The header now uses a personal identity and direct professional/contact actions, replacing the former navigation and mobile menu. ThemeToggle and DeveloperAvatar are its small isolated Client Components.

Verified on 2026-11-17 using the production static export and headless Microsoft Edge:

| Check                                                                | Result                                          |
| -------------------------------------------------------------------- | ----------------------------------------------- |
| TypeScript, ESLint, production build                                 | Pass                                            |
| 1920px, 1440px, 1024px, 768px, 390px, 320px, each light and dark     | Pass; no horizontal overflow                    |
| axe WCAG 2 A/AA and WCAG 2.1 AA checks                               | Zero violations in all twelve combinations      |
| Verified skills, icons, wrapping, and icon/label geometry            | All 21 names preserved; 18px icons; no overlaps |
| Shared type scale and concise capabilities                           | Pass across all twelve combinations             |
| System theme, manual toggle, reload persistence                      | Pass                                            |
| Personal header, verified social actions, top anchor, keyboard order | Pass across all twelve combinations             |
| Skip link, reduced motion, contact hrefs                             | Pass                                            |
| Standard-motion reveal smoke check                                   | Pass                                            |
| Browser runtime / console errors                                     | None                                            |
| Dependency security audit                                            | Zero vulnerabilities at installation            |

Screenshots are generated in ignored `test-results/`. Automated accessibility checks do not replace a full assistive-technology audit. No field Core Web Vitals or Lighthouse performance score is claimed.

### Personal Identity Header verification

- [x] Compact fictional developer mascot with a personal greeting and green highlighted name; initials remain an image-failure fallback. No subtitle or professional-title pill.
- [x] User-confirmed GitHub plus verified LinkedIn and email actions; no invented X profile.
- [x] Identity returns to the introduction; LinkedIn and email remain accessible. No Get in Touch button remains.
- [x] No section-navigation links, mobile menu, active-section state, or unused navigation data/styles.
- [x] Desktop and mobile visual inspection in light and dark themes, including 320px.
- [x] Keyboard tab order: skip link → identity → GitHub → LinkedIn → email → theme toggle.
- [x] TypeScript, ESLint, and production build pass; all twelve browser viewport/theme combinations pass with zero axe violations and no browser errors.
- [x] Header name/actions fit without overlap; compact controls wrap naturally when needed on narrow screens.

The header remains a Server Component with theme switching and DeveloperAvatar isolated on the client. A fictional developer mascot accompanies “Hey, I’m Youssef Atef.”, with the name highlighted green. It participates in normal page flow and scrolls out of view. The identity returns to `#top` on the header itself. The mascot does not represent Youssef's actual face. Its current render is static; real animation remains pending an authored asset.

### Header, Hero & spacing refinement

- [x] Remove Header Get in Touch button.
- [x] Remove repeated Hero name/title/editorial introduction row.
- [x] Remove Hero Get in Touch CTA; Request CV is the sole Hero action, now styled as a subtle text link.
- [x] Preserve the Request CV email fallback for a future null CV path; the current action uses the supplied PDF.
- [x] Link Request CV directly to the original PDF at `/Youssef_Atef_CV.pdf`.
- [x] Reduce section spacing using shared desktop/mobile tokens (64px desktop/tablet, 40px mobile).
- [x] Rename THE TOOLKIT label to STACK without changing skills.
- [x] Verify responsive layouts and both themes.

TypeScript, ESLint, production build, and all twelve viewport/theme browser combinations pass. Rendered desktop/mobile layouts were inspected in both themes. Checks confirm no Get in Touch links, no repeated Hero introduction row, one Request CV action, its configured CV destination, consistent section padding, visible supporting text, unchanged skill names/icons, and the STACK label. No overflow, browser errors, or axe violations were found. The supplied original PDF is now integrated as a direct download.

## Development

Use Node.js 22 LTS (minimum 20.9). Run `npm ci`, then `npm run dev` to develop at http://localhost:3000. All direct dependency versions and the lockfile are pinned.

- `npm run typecheck` — strict TypeScript validation.
- `npm run lint` — Next.js, React, and accessibility lint rules.
- `npm run build` — optimized static export to `out/`.
- `npm start` — local preview of the built export at http://localhost:3000; build first.
- `npm run test:browser` — browser checks against the running preview. Requires an installed Microsoft Edge; uses Playwright Core without downloading browsers.
- `npm run format` — format source and documentation with Prettier.

For deployment, serve `out/` on any static host. Set `NEXT_PUBLIC_SITE_URL` to your confirmed HTTPS origin before building to enable absolute social-image metadata; no domain or canonical URL is invented. The supplied PNG and editable SVG live in `public/`.

Request CV downloads the original file at `public/Youssef_Atef_CV.pdf`, configured through `profile.cv` in `src/data/portfolio.ts`. Replace the PDF there when updating the CV, and verify the new file. The existing email fallback applies only if `profile.cv` is set to null.

ESLint 9.39.5 is deliberately pinned because the React, JSX accessibility, and import plugins bundled with Next.js 16.4.6 declare compatibility through ESLint 9. npm emits an upstream deprecation notice for this development dependency; ESLint 10 currently introduces invalid peer dependencies. Revisit together when Next.js updates its plugin versions.

## Current Status

- Completed: original CV download, Hero LinkedIn removal, generated mascot static fallback/integration, existing greeting/timeline/layout refinements, both themes, and the validation recorded above.
- In Progress: none.
- Pending: genuine mascot idle/hover animation clips and playback/performance verification; full-page reference screenshots; a future detailed CV/copy audit if requested; actual deployment origin for social-image metadata; hosting if requested.
- Known Issues: mascot currently displays a static 3D render; genuine animation is pending. Original CV is now present; full-page references remain missing. Existing experience copy is unchanged from the user brief, without a new detailed content audit. External mail delivery, phone calls, and social account status are not tested. Upstream ESLint 9 deprecation notice as explained above.
- Last Updated: 2026-11-17.
#   Y o u s s e f - P o r t f o l i o -  
 