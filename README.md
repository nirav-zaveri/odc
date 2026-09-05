# Oracle Dental Care — Website

The official website for **Oracle Dental Care**, a multi-speciality dental clinic in Navsari,
Gujarat, led by Dr. Konika Chhajed Zaveri. Built as a modern React site with a built-in blog the doctor
can update herself — no code required.

> **Note on content:** the clinic's own details — address, phone, working hours, founding date,
> patient count, and all 40 testimonials — are real and confirmed. What is still stand-in is the
> photography (apart from Dr. Konika's portrait) and the blog posts, which were written for this
> project rather than published by the clinic. See
> [Content still to replace](#content-still-to-replace) below.

## Tech stack

- **[React 18](https://react.dev/)** + **[Vite](https://vitejs.dev/)** — fast, simple build tooling
- **[React Router](https://reactrouter.com/)** — client-side page navigation
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first styling, themed to the clinic's brand colors
- **[Framer Motion](https://www.framer.com/motion/)** — the scroll animations, hero motion, and page transitions
- **[Lucide](https://lucide.dev/)** — icon set (free, MIT licensed)
- **[Decap CMS](https://decapcms.org/)** — free, open-source git-based admin panel for the blog
- Deployed on **[Netlify](https://www.netlify.com/)**

No backend/database — the whole site is static files, and blog posts are plain Markdown files
committed to this repository.

## Getting started

```bash
npm install
npm run dev       # start the local dev server (http://localhost:5173)
npm run build     # production build, output in /dist
npm run preview   # preview the production build locally
npm run lint       # lint the codebase
```

## Project structure

```
public/
  admin/               ← Decap CMS admin panel (the doctor's blog editor)
  images/uploads/       ← images uploaded through the blog editor land here
  favicon*.png, icon-*.png, apple-touch-icon.png  ← generated from the real logo

src/
  assets/               ← the real Oracle Dental Care logo (extracted from the provided PDF)
  components/           ← reusable UI building blocks (Navbar, Footer, cards, etc.)
  content/blog/          ← blog posts, as Markdown files with frontmatter
  data/
    site.js             ← ⭐ ALL clinic content lives here: address, phone, services, team, FAQs…
    images.js            ← every photo on the site, in one place (real + stock stand-ins)
  pages/                ← one file per route (Home, Services, About, Contact, Blog, BlogPost)
  utils/
    blog.js             ← loads & parses every file in src/content/blog automatically
```

### Editing site content

**You will almost never need to touch a component file.** Nearly everything on the site —
address, phone number, services list, team members, testimonials, FAQs, stats — is defined in
one place: **`src/data/site.js`**. Open it, edit the relevant field, save, and the whole site
updates. Every field that's still placeholder/mock data is commented `// PLACEHOLDER`.

Photos are similarly centralized in **`src/data/images.js`**. To replace a placeholder stock photo
with a real one:

1. Drop the image file in `src/assets/` (e.g. `src/assets/clinic-hero.jpg`).
2. In `src/data/images.js`, import it and point the relevant entry's `src` at it.

## The blog

There are two ways to publish a blog post — pick whichever fits.

### Option A — the admin panel (recommended for the doctor)

Once DecapBridge is connected (see below), go to **`yoursite.com/admin`**, log in, and use the
visual editor: title, cover photo, tags, and a rich-text/Markdown body. Hit **Publish** and the
post goes live within about a minute (Netlify rebuilds the site automatically).

### Option B — add a Markdown file directly

Create a new file in `src/content/blog/`, e.g. `src/content/blog/my-new-post.md`:

```markdown
---
title: "Your Post Title"
slug: "your-post-title"
date: "2026-08-27"
excerpt: "A one-sentence summary shown on the blog list page."
cover: "https://images.unsplash.com/photo-xxxxxxx?w=1600&h=900&auto=format&fit=crop"
tags: ["Patient Guide"]
author: "Dr. Konika Chhajed Zaveri"
draft: false
---

Your post content, in Markdown, goes here.
```

Commit and push — the post appears automatically, newest first, no other code changes needed.

## Deploying to Netlify

1. **Push this repository to GitHub** (already done if you're reading this from the repo).
2. In Netlify, click **Add new site → Import an existing project**, and select this repo.
   Netlify will read `netlify.toml` automatically — build command and output folder are already
   configured, no manual setup needed.
3. Deploy. Your site will be live at a `*.netlify.app` URL (add a custom domain under **Domain
   settings** whenever you're ready).

### Enabling the blog admin panel (one-time setup)

The `/admin` editor needs an identity/auth provider so it can commit posts to this repo on the
doctor's behalf. This project originally used Netlify's own **Identity + Git Gateway**, but
Netlify deprecated Git Gateway, so it now uses **[DecapBridge](https://decapbridge.com)** instead
— a free, purpose-built replacement that speaks the same protocol. This only needs to be set up
once, by whoever manages the site:

1. Sign up at [decapbridge.com](https://decapbridge.com) (free tier: up to 3 sites, 10
   collaborators).
2. Create a site, connect it to this GitHub repo (`nirav-zaveri/odc`), and set the content path to
   `public/admin` and the branch to whichever branch Netlify actually deploys from.
3. DecapBridge generates a `backend:` block for `config.yml` — it's already wired into
   `public/admin/config.yml` in this repo. If you ever recreate the DecapBridge site (new site ID),
   update the `auth_endpoint`/`auth_token_endpoint` values there to match.
4. In the DecapBridge dashboard, invite the doctor's email as a collaborator. She'll get an email
   to confirm, and from then on can log in any time at `yoursite.com/admin`.

**Important:** the `branch:` field in `public/admin/config.yml` must exactly match the branch your
Netlify site deploys from — if they don't match, published posts will commit to a branch that
never goes live. Update both together whenever you switch Netlify's production branch (e.g. after
merging into `main`).

No GitHub account or technical knowledge is required for the doctor herself.

## Security

### What the code does

- **Security headers** are set in `netlify.toml`: a strict `Content-Security-Policy`,
  `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`,
  `Referrer-Policy: strict-origin-when-cross-origin`, a `Permissions-Policy` denying every
  device capability the site doesn't use, `Cross-Origin-Opener-Policy`, and HSTS.
- **The CSP is allow-listed, not permissive.** Scripts may only load from the site's own origin;
  images only from the site, Unsplash, and Pexels; fonts only from Google Fonts; the only
  permitted iframe is the Google Maps embed. `object-src` and `frame-ancestors` are `'none'`.
- **`/admin` gets its own, looser CSP** because Decap CMS is a third-party app loaded from a CDN.
  It keeps the structural directives that block real attacks (`frame-ancestors 'none'`,
  `object-src 'none'`, `base-uri 'self'`) but does not constrain the CMS's own script, network,
  worker, or blob usage — see the trade-offs below for why.
- **The CSP is mirrored in `vite.config.js`** under `preview.headers`, so
  `npm run build && npm run preview` reproduces the production policy locally. **If you change the
  policy in one place, change it in the other** — otherwise a violation only surfaces after deploy.
- **Blog post content is sanitized.** Markdown is rendered through `marked` and then passed
  through `DOMPurify` (`src/components/MarkdownContent.jsx`) before being inserted, so a malicious
  or malformed post cannot inject script into the page.
- **No secrets in the repo.** There is no backend and no API key. The DecapBridge site ID in
  `public/admin/config.yml` is a public client-side identifier, not a credential.
- **`/admin` is kept out of search** via `robots.txt`, an `X-Robots-Tag` header, and a `noindex`
  meta tag.

### What only an account owner can do — launch checklist

The code is only half of it. These live in the Netlify, GitHub, and DecapBridge dashboards:

- [ ] **Netlify → Site configuration → Access & security → Visitor access** is set to **Public**.
      (If this is on "Password protected" or "team members only", the whole site returns 401.)
- [ ] **Two-factor authentication enabled** on the Netlify account, the GitHub account, and
      DecapBridge. These three accounts can each change what the public site says — for a medical
      practice that is the highest-value thing to protect here.
- [ ] **DecapBridge collaborators reviewed** — it should be invite-only, and the list should
      contain only people who should be able to publish. Remove anyone who no longer needs access.
- [ ] **GitHub repository collaborators reviewed** — anyone with write access can change the live
      site on the next deploy.
- [ ] **GitHub branch protection** on the production branch: require a pull request, and disallow
      force pushes. This prevents an accidental (or malicious) direct push going straight live.
- [ ] **Netlify build environment variables** — there should be none beyond `NODE_VERSION`. If any
      appear later, confirm none are secrets, since the build log is visible to collaborators.
- [ ] **Netlify deploy notifications** on, so someone is told when the site changes.
- [ ] **Recovery**: confirm who holds the domain registrar (GoDaddy), Netlify, GitHub, and
      DecapBridge logins, and that the clinic — not just a contractor — can regain access to each.

### Deliberate trade-offs, so nobody has to rediscover them

- **`/admin` is reachable by anyone** — the login page loads for the public. That's inherent to a
  git-based CMS with no server. It's safe because authentication and authorisation live with
  DecapBridge and GitHub: without an invited account, nothing can be read or written. Keeping the
  collaborator list tight is therefore the real control.
- **`style-src` allows `'unsafe-inline'`.** React and Framer Motion set inline `style` attributes,
  so this cannot be removed without dropping the animations. Inline *scripts* remain blocked,
  which is the direction that actually matters for XSS.
- **`/admin` allows `'unsafe-eval'`.** Decap CMS's bundle requires it. This is scoped to the
  `/admin` path only and does not apply to any page a patient visits.
- **`/admin`'s resource and network directives are not allow-listed.** An earlier, tighter policy
  here broke image uploads with *"Failed to persist media"* — Decap's real surface (blob workers,
  `fetch` against `blob:`/`data:` URLs, DecapBridge's own endpoints) is wider than it documents and
  cannot be enumerated reliably from outside. Since the CMS already loads and `eval`s arbitrary
  code from a CDN, narrowing `connect-src` beneath that bought little, while breaking the clinic's
  publishing workflow was expensive. The structural directives above are kept, and the public pages
  — the ones patients actually visit — keep the strict allow-listed policy.

## Brand & design system

Colors were sampled directly from the clinic's real logo and letterhead, not guessed:

| Token | Hex | Source |
|---|---|---|
| `primary` | `#0D53A5` | Sampled from the logo mark |
| `secondary` (accent) | `#00ADEF` | Sampled from the letterhead footer bar |

Both are defined as full Tailwind color scales in `tailwind.config.js`, so every shade used across
the site (`bg-primary-50` … `bg-primary-900`, etc.) is derived consistently from the real brand
colors. Fonts are **Plus Jakarta Sans** (headings) and **Inter** (body text), loaded free from
Google Fonts.

## Content still to replace

The clinic's factual details in `src/data/site.js` are confirmed and real. Two things are not:

- **Photography.** Three images are the clinic's own — the Home hero, Dr. Konika's portrait, and
  the first tile of the About gallery. The remaining five are licensed stock imagery standing in
  for the real premises: the other three About gallery tiles, and the photo beside the Implant
  Centre section on the Home page. Real photos of the reception, the surgery, and a consultation
  in progress would replace all of them — see [Adding images](#adding-images).
  The uncropped originals live in `public/images/uploads/`, so a different crop can be cut from
  them at any time without asking the clinic for the files again.
- **The blog posts.** They are original writing produced for this project, not articles the clinic
  has published. They are accurate and on-brand, but they are ours, not hers — worth a read-through
  and an edit pass in the doctor's own voice.

## Adding images

There are three ways to get an image into the site. Pick by who is doing it.

### The doctor, for a blog post — the admin panel

In `/admin`, either use the **Cover Image** field on a post, or open the **Media** library from the
top bar and upload there without creating a post at all. Files land in `public/images/uploads/` and
are served from `/images/uploads/<filename>`.

If an upload fails with **"Failed to persist media"**, it is almost always file size: these go
through the GitHub API as base64, so keep uploads **under about 2 MB**. Resize or export the photo
smaller and try again — a web page never needs a full-resolution camera original.

### Anyone with repo access, any image — GitHub's web uploader

No tooling, no command line, and it takes files up to 25 MB:

1. Go to the repo on github.com and switch to the branch Netlify deploys from.
2. Navigate into the folder you want — `public/images/uploads/` for blog and general imagery,
   `src/assets/` for photos referenced from `src/data/images.js`.
3. **Add file → Upload files**, drag the images in, then **Commit changes** at the bottom.

Netlify rebuilds automatically. This path bypasses the CMS entirely, so it also works as the
fallback whenever `/admin` is unhappy.

### A developer — commit it

Drop the file in `src/assets/`, import it in `src/data/images.js`, and point the relevant entry's
`src` at it. Imported assets get content-hashed filenames and long-lived cache headers, which is
why the doctor's portrait lives here rather than in `public/`.

## Where the old site went

This project previously shipped as a static HTML/Tailwind site. That version is preserved as-is
on the `legacy-static-site` branch of this repository for reference.
