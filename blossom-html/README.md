# Blossom Party Lawn — Website

Site for Blossom Party Lawn, Ognaj, Ahmedabad (New Science City Road, Gujarat 380060).
Phone: +91 84708 04805 · WhatsApp: [wa.me/918470804805](https://wa.me/918470804805)

Two versions live in this repo:

| Folder          | Stack                          | Purpose                                                        |
| --------------- | ------------------------------ | -------------------------------------------------------------- |
| `blossom-html`  | Static HTML/CSS/JS             | **Deployed now to GitHub Pages**                              |
| `blossom-nextjs`| Next.js 14 (App Router)        | Kept in-repo for the upcoming front-end build switch            |

## GitHub Pages (live)

Pages is wired to the **HTML version only** for now — GitHub Pages serves static
files, so the hand-built static site is what gets published (root-relative URLs
already match the `/bloom-party-lawn/` project-path base).

- Pages URL: `https://wavesdigitalai-ai.github.io/blossom-party-lawn/`
- Deployed automatically by `.github/workflows/deploy-pages.yml` on every push to `main`
  (workflow copies `blossom-html/**` to the Pages artifact root).

## Next.js version (local, not deployed)

```bash
cd blossom-nextjs
npm install     # already-installed deps are committed-able via package-lock.json
npm run build
npm start
```

When the switch to Next.js is made later, a Vercel/cloud front-end deploy (or an
Actions build that runs the Next build) will take over and the Pages workflow can
be retired.

## Content notes

- Canonical domain placeholder in metadata/sitemap: `https://www.blossompartylawn.in/`
- Images live in `blossom-html/images/` and `blossom-nextjs/public/images/`
  (shared set of 20 files).
