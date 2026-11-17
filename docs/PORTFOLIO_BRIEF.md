# Permanent portfolio brief

## 1. Personal information

- Name: Youssef Atef.
- Professional title: Software Engineer.
- Location: Giza, Egypt.
- Email: youssef.atef.business@gmail.com.
- Phone: +201115737646.
- LinkedIn: https://linkedin.com/in/youssef-atef-elagamy.
- GitHub: https://github.com/yousufatef (confirmed directly by the user).
- No X profile is verified.

## 2. Professional positioning

Software Engineer with 2+ years of experience building scalable SaaS and ERP platforms, data-intensive applications, and secure RESTful APIs. Lead with understanding real-world problems, translating complex requirements, maintainable systems, performance, structured architecture, and accessible experiences. Technologies support this positioning rather than define it. Do not assume work availability or invent metrics.

## 3. Actual professional experience

These details are confirmed by the supplied text brief. The original CV has now been supplied at `C:/Users/user/Downloads/Youssef_Atef_CV.pdf` and copied unchanged to `public/Youssef_Atef_CV.pdf`. File integrity is verified; this delivery update does not claim a complete comparison of the professional copy against the PDF.

### SB Technology

Software Engineer · April 2025–Present · Cairo, Egypt. Enterprise SaaS and data-heavy ERP platforms.

- Architected multi-tenant SaaS and ERP modules supporting multiple user roles.
- Built a reusable component library that accelerated feature delivery across the team.
- Engineered real-time dashboards over large datasets with granular role-based access control.
- Reduced redundant API calls through TanStack Query caching.
- Improved initial load performance in React.js and Next.js through route-based code splitting, lazy loading, and Core Web Vitals tuning.
- Integrated RESTful APIs with automated JWT refresh interceptors and centralized error handling.

### Efficient Vision

Frontend Engineer · September 2024–February 2025 · Cairo, Egypt. Healthcare patient and clinician platforms.

- Led end-to-end frontend delivery of four live healthcare platforms from zero to production release.
- Worked on Wyost Patient/HCP and Jubbontie Patient/HCP platforms.
- Achieved ADA compliance through semantic HTML5, ARIA landmarks, and accessibility audits.
- Improved Lighthouse SEO and performance through structured metadata (JSON-LD), semantic markup, and SSR/SSG optimization.

## 4. Education

Bachelor of Computer Science, Akhbar El Yom Academy, Egypt. No dates, GPA, honors, or certifications supplied.

## 5. Technical skills

- Languages: TypeScript; JavaScript (ES6+).
- Frontend: React.js; Next.js; Redux Toolkit; TanStack Query; Tailwind CSS.
- Backend & APIs: Node.js; NestJS; Express.js; RESTful API Design; RBAC.
- Databases: PostgreSQL; MongoDB.
- Architecture & practices: Multi-Tenant SaaS Architecture; Reusable Component Architecture; Performance Optimization; Internationalization (i18n).
- Tools: Git; GitHub; Azure DevOps.

## 6. Solution-oriented content

What I Bring contains exactly four numbered editorial items in a two-column grid from 768px and a single column below 768px. Each has only a short title and one concise value description, stored as `number`, `title`, and `description` in typed content. Preserve row-major reading order and aligned number/title pairs with descriptions underneath. Use 32px row gaps and 64px column gaps instead of per-item borders or padded cards. The section boundary remains subtle. Do not reintroduce problem/approach columns, technical tags, evidence footers, long explanations, or oversized service cards.

1. **Business Systems.** Turning complex business workflows into organized digital systems that make everyday work simpler.
2. **Scalable Platforms.** Building maintainable applications that grow with multiple users, roles, and organizations.
3. **Data-Driven Applications.** Creating efficient dashboards and applications that make complex data easier to manage and understand.
4. **Performance & Reliability.** Making software faster, more accessible, and more reliable so people can use it with confidence.

The first three are grounded in SB Technology's enterprise modules, RBAC, caching, and dashboards. The fourth is supported by both roles. Detailed evidence stays in Professional Experience. Do not imply database-level isolation guarantees, distributed real-time infrastructure, or unsupported metrics.

## 7. Website sections

Hero → What I Bring → Experience → Technical Stack → Education → Contact. Contact is the page ending; there is no Footer. Preserve email, phone, location, and LinkedIn in Contact and professional links in the header. No Projects, testimonials, client logos, or fabricated statistics.

## 8. Design system

Editorial, left-aligned composition with deliberate whitespace and integrated Hero metadata.

- Light: background #FFFFFF; text #171717; secondary #737373; muted #A3A3A3; border #E5E5E5; accent #2563EB.
- Dark: background #0A0A0A; text #F5F5F5; secondary #A3A3A3; muted #737373; border #262626; accent #7DA8FF.
- Muted labels use accessible secondary tokens; the faint muted palette is decorative only.
- Typography: preserve locally bundled Geist Sans and Geist Mono. All font sizes use centralized `--text-*` CSS tokens in `:root`, without per-breakpoint size overrides. Hero and contact headlines scale from 32–48px; section headings 22–30px; subsection/company/education titles 16–20px; body 14–16px; supporting copy and header greeting 14–15px; skill/action labels 13–14px; metadata 12px. Fluid `clamp()` sizing follows the viewport, with body line heights around 1.65–1.85 and short readable line lengths. Use medium heading weights and regular body weights. No visible text below 12px.
- Container: header and main share a centered 1120px maximum content width through `--container-width`. `--page-gutter` sets 48px desktop and 24px mobile gutters. Content never stretches across a large viewport; all sections align to main's shared edges.
- Spacing: 4px base. Shared CSS tokens set all content section padding to 64px top/bottom on desktop/tablet and 40px below 768px. Section-to-content spacing is 32px/24px; hero top padding 64px/40px and bottom padding 32px/24px. No Explore indicator, empty footer space, per-section padding exceptions, or oversized wide-screen hero overrides. Whitespace stays comfortable, with thin section-boundary separators and consistent vertical rhythm.
- Borders: 1px separators; no decorative shadows or oversized cards.
- Header: Personal Identity Header, specified below. Traditional section navigation, active-section indicators, and mobile menus are removed.
- Actions: quiet text links with visible focus states; Request CV is a lightly underlined text action with an arrow/download icon, never a filled or oversized button.
- Motion: short opacity/translate entrances; respect reduced motion; no parallax.
- Responsive: content stacks below 768px. Below 640px the compact header wraps naturally when name/avatar and social controls cannot fit; actions remain aligned to the right. Capabilities form a two-column grid from 768px and a single column on mobile, with the description beneath each number/title pair. Section spacing, content alignment, and original palette remain intact.

### Personal Identity Header

- `PersonalHeader` remains a Server Component in `src/components/layout/personal-header.tsx`; `ThemeToggle` and the small `DeveloperAvatar` are isolated Client Components. The old Navbar, section-link data, active-section observer, disclosure state, and menu styles remain removed.
- Left: a circular fictional developer mascot followed by “Hey, I’m Youssef Atef.”. The mascot reserves 48px on desktop and 40px below 640px. The greeting uses regular text; the name is medium weight and green (#15803D light / #4ADE80 dark). No professional subtitle or title pill. The identity links to `#top`, the header's own ID. The mascot is an original fictional character, never a representation of Youssef's face or the reference portrait.
- The tiny mascot, compact greeting, and green name provide personal character without status dots, availability claims, or extra decoration. The rest of the site's blue accent remains unchanged.
- Right: user-confirmed GitHub profile, verified LinkedIn profile, verified email, and the existing persistent light/dark toggle. No Get in Touch button or replacement CTA. X is omitted because no URL is verified. GitHub uses the existing Simple Icons package, LinkedIn uses inline SVG, and Mail uses Lucide. External profiles open with `_blank` and `noopener noreferrer`; all controls have descriptive accessible labels.
- Desktop/tablet: horizontally balanced identity and actions, matching background, normal document flow, 40px action targets, and subtle hover/focus styling. The header is neither fixed nor sticky and scrolls offscreen. No bottom rule is needed for header separation.
- Below 640px: the mascot is 40px and controls reduce to 36px; flex wrapping adapts without hiding links or adding a menu. Social actions stay grouped and aligned right, on a second row only when needed. Existing 24px mobile gutters are preserved.
- The latest supplied screenshot governs the greeting style. Preserve Youssef's identity and the rest of the portfolio.

### Developer mascot assets and animation status

- Character: original fictional young adult man with dark curly hair, charcoal modern headphones with a restrained blue accent, neutral gray hoodie, slight natural smile, and soft 3D lighting. No real-person likeness, props, typing, or exaggerated expressions.
- **Current implementation is a static fallback, not a fully animated character.** No suitable Rive, Lottie, or animated raster asset was supplied or present. Genuine blinking, breathing, head movement, and hover head-turn/expression clips remain pending. Do not claim those behaviors are complete or fake them with transforms.
- Generated through the built-in image-generation tool. Preserved source: `docs/assets/developer-mascot-source.png`. Exact final prompt and provenance: `docs/assets/MASCOT_PROMPT.md`. Runtime: `public/mascot/developer-static.webp`, transparent 192×192, 9,342 bytes. Source was optimized using existing Sharp tooling, with no new dependencies.
- Asset configuration: `src/data/developer-avatar.ts`. `staticSrc` points to the WebP; `idleSrc` and `hoverSrc` remain null. Add only genuine, carefully exported animated WebP clips matching the static framing. Use an occasional blink, subtle breathing/head movement, and a seamless restrained loop; hover should provide a gentle authored response, returning to idle on pointer leave. Typing is excluded unless a genuine asset supplies it.
- `DeveloperAvatar` uses a native image in a fixed circular shell. It is decorative (`aria-hidden`, empty image alt) beside the name; it adds no focus stop, text label, or click target. Image pointer events are disabled, preserving the parent identity link. A failed hover asset falls back to idle/static, failed idle falls back to static, and a failed static image shows YA initials within the same reserved dimensions.
- Optional animation selection is gated by `prefers-reduced-motion: no-preference`, viewport intersection, and document visibility. Reduced motion always selects the static frame. Hover assets are selected only for mouse pointer entry and revert on leave/cancel; there is no cursor-following transform or simulated face movement.
- With both animation paths null, no animation observer or visibility listener starts. There are no animation loops, timers, requestAnimationFrame callbacks, canvas, WebGL, Three.js, Lottie, or Rive runtime. CSS only clips/sizes the asset and retains the existing quiet border hover. Actual animated-asset decoding cost, seamless looping, and animation transitions cannot be verified until those assets are supplied.

### Experience timeline

- Preserve all roles, dates, locations, responsibilities, and the existing desktop date/content columns and mobile stacking.
- A continuous 1px spine sits in the gutter immediately before the company content on desktop, and along the left edge on mobile. Positioning it beside the content allows short branches without crossing date text.
- Main spine uses the primary theme color (`--accent`: #2563EB light / #7DA8FF dark), with reduced opacity. This replaces the earlier red treatment at the user's request.
- Each entry has a 16px × 1px horizontal branch, ending 8px before its content. The small dot sits at the branch/spine junction. The current SB Technology branch/marker also uses `--accent`, so no red remains in the timeline. Efficient Vision retains its brand blue #0036CC from its [official website stylesheet](https://www.effvision.com/_next/static/chunks/1gm3bf_t0m7hq.css).
- `brandColor` belongs to the typed experience data. `ExperienceSection` passes scoped CSS custom properties; no client code or dependencies are added.
- Spine uses 24% color in light mode and 38% in dark; connectors use 38% / 52%. `color-mix()` with transparency keeps lines restrained on the semantic background. Dots mix their entry color with the background without halos. No generic gray timeline borders remain. The line is decorative; all company names and dates stay readable in normal text colors.
- At mobile widths the dates remain above each company; branch and marker offsets account for content top padding. Shared gutter coordinates keep the branch attached to the spine at all breakpoints.

### Hero composition

The hero starts immediately with “Complex problems. Thoughtful software.” at its existing 32–48px type scale. No repeated name/title row or editorial label. Keep the supplied introduction and supporting description unchanged. Location and Request CV form one wrapping metadata/action row directly beneath the copy, inside a 680px content column. “Thinking in systems. Building for people.” sits just below as a quiet supporting note, visible on mobile too. There is no detached right-hand rail or vertical divider. Request CV is a subtle text link with an icon and understated underline; no filled button or Get in Touch action. Explore What I Bring and its arrow/pill decoration are completely removed. The CV link downloads the supplied original file at /Youssef_Atef_CV.pdf. Its email fallback applies only to a future null CV path. The Contact section and all contact details remain intact; LinkedIn stays there and in the header, not the Hero.

### Stack presentation

The section metadata label is `STACK` (replacing `THE TOOLKIT`); the heading “The tools follow the problem.” remains. All 21 verified skills appear together in one wrapping semantic list, preserving the existing names and order. Category groups remain in the data for organization but do not create visual section containers. Every item contains a consistently sized 18px icon and a readable label, a subtle border, a small radius, and no decorative background. Use natural wrapping and understated blue hover borders/text; both themes inherit semantic colors. This refinement changes only the label, not the skill collection or its styles.

Brand icons use Simple Icons (TypeScript, JavaScript, React, Next.js, Redux, React Query for TanStack Query, Tailwind, Node.js, NestJS, Express, PostgreSQL, MongoDB, Git, GitHub). Azure DevOps uses the Devicon logo stored locally in `public/azure-devops.svg`, rendered as a `currentColor` CSS mask. Non-brand practices use existing Lucide icons: Cable for RESTful API Design, ShieldCheck for RBAC, Layers for Multi-Tenant SaaS Architecture, Blocks for Reusable Component Architecture, Gauge for Performance Optimization, Languages for Internationalization. These concepts have no official technology brand logo. Icons are decorative because adjacent names supply accessible labels. No skill bars, scores, large cards, categories, or invented technologies.

## 9. Design references

The original two screenshots and earlier header reference were not attached. A later greeting screenshot supplied the small avatar, brief “Hey, I'm” greeting, and green name direction. The subsequent mascot request replaces the initials with an explicitly fictional 3D character, while preserving that greeting and theme contrast. Keep minimalist, left-aligned composition, whitespace, the site's blue foundation, compact professional links, and a simple theme toggle. Comparison to the original full-page references remains pending.

## 10. Technical architecture

Next.js App Router with static export, strict TypeScript, Tailwind CSS, selective shadcn/ui Button using Radix Slot and CVA, Lucide icons, Simple Icons, Motion, next-themes. Server Components are the default, including PersonalHeader. SkillIcon maps verified names to brand SVG paths or existing Lucide icons on the server; no brand icon library is loaded client-side. Client boundaries cover the theme provider/toggle, DeveloperAvatar, and small reveal wrappers. Content lives in `src/data/portfolio.ts`; shared types in `src/types/portfolio.ts`; section and layout components are focused. Semantic CSS variables power both themes and the centralized type scale. The theme provider applies system preference and persistent manual choice before paint.

## 11. Important decisions & constraints

- Build in the user-provided repository; no publication requested.
- No invented professional facts, domain, availability, or social profiles. The user-authorized mascot is explicitly fictional and is not a personal likeness.
- No Projects section or generic service-card grid.
- What I Bring leads with four concise capabilities; experience holds supporting detail. The toolkit is a compact unified icon-and-label collection.
- Both themes, reduced motion, semantic markup, strict types, and accessible controls are mandatory.
- Content and presentation stay separate; no `any`.
- CV download is conditional on the real PDF. Missing assets are documented, never replaced with fake artifacts.

## 12. Future changes & notes

- The original Youssef_Atef_CV.pdf is supplied and integrated at `public/Youssef_Atef_CV.pdf` (10,883 bytes). PDF signature and source/copy SHA-256 hashes were checked. `profile.cv` points to `/Youssef_Atef_CV.pdf`.
- The original full-page screenshots remain pending for visual comparison.
- Add deployment-specific canonical/OG URLs only after a domain is confirmed.
- The hero retains “Complex problems. Thoughtful software.” with a balanced 32–48px two-tone headline and integrated location/social/CV metadata. The header greets Youssef by name; the professional title remains in verified profile data and SEO, without a header subtitle. Request CV is the sole Hero text action. Section order, palette, fonts, motion, Contact section, and all verified skills remain intact. No Footer or Explore indicator remains.
- Request CV downloads the original PDF; the existing email fallback applies only if `profile.cv` becomes null. Never create a synthetic replacement. Hero LinkedIn is removed at the user's request; verified LinkedIn remains in the header and Contact section.
- Direct dependency versions and package-lock are pinned. Next.js 16.4.6, React 19.3.1, TypeScript 6.0.3, Tailwind 4.3.5. ESLint 9.39.5 matches the declared peers of Next.js's bundled plugins; npm's upstream deprecation notice is documented in README.
- `scripts/preview.mjs` serves the `out/` static export locally. `scripts/verify.mjs` uses installed Microsoft Edge through Playwright Core and axe. It checks large desktop, desktop, laptop, tablet, and mobile widths in both themes, including all 21 skill labels, icon geometry, text sizing, and simplified capabilities. Current execution results belong in README. No remote browser service or downloaded browser is required.
- A raster social image is supplied alongside its editable SVG. `NEXT_PUBLIC_SITE_URL` enables its absolute metadata URLs only when a real domain is confirmed. Otherwise title, description, Open Graph text, and Person JSON-LD are emitted without a fabricated origin.
- Light/dark screenshots were inspected locally; direct comparison to the user's references is still pending their delivery. No field performance or full assistive-technology certification is claimed.
- Future sessions must read README, read this brief, inspect code, preserve established choices, and update both documents after verified changes.
- Validation results and current blockers belong in README. Last updated 2026-11-17.
