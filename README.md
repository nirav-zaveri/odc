# Oracle Dental Care — Website

The official website for **Oracle Dental Care**, a multi-speciality dental clinic in Navsari,
Gujarat, led by Dr. Konica Chhajed. Built as a modern React site with a built-in blog the doctor
can update herself — no code required.

> **Note on content:** most of the text on this site (working hours, team bios, testimonials,
> some contact details) is placeholder content written to demonstrate the design. Real data still
> needs to be confirmed — see [Placeholder data to replace](#placeholder-data-to-replace) below.

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
    images.js            ← stock photo placeholders (swap for real photos any time)
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

1. Drop the image file in `src/assets/` (e.g. `src/assets/doctor.jpg`).
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
author: "Dr. Konica Chhajed"
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

## Placeholder data to replace

Everything below is mock content used to demonstrate the design — confirm the real values with
the clinic before launch (all are marked `PLACEHOLDER` in `src/data/site.js`):

- Clinic email address and website domain
- Working hours
- Instagram / Facebook links
- Year the clinic was founded (used for the "X+ years" stat)
- Team members beyond Dr. Chhajed
- Patient testimonials (currently illustrative, not real reviews)
- All photos (currently stock photography — see the "Do you have real photos" note in project
  history; swap via `src/data/images.js` any time)
- The 5 sample blog posts are original writing for this project, not content the clinic has
  actually published — read them before launch and decide whether to keep, edit, or replace them.

## Where the old site went

This project previously shipped as a static HTML/Tailwind site. That version is preserved as-is
on the `legacy-static-site` branch of this repository for reference.
