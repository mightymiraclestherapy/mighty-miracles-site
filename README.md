# Mighty Miracles Therapy — Website

This is the static site rebuilt from the GoDaddy-hosted MightyMiraclesTherapy.com,
so it can live in GitHub and be edited by Claude going forward.

## Files
- `index.html` — the main page (hero, services, about, testimonials, FAQ, contact)
- `faq.html` — a standalone FAQ page (same questions, own URL, for SEO — GoDaddy had one too)
- `styles.css` — all styling
- `script.js` — mobile menu, cookie banner, footer year

This repo (`mightymiraclestherapy/mighty-miracles-site`) already has all five files committed to `main`.

## Turn on GitHub Pages (if not already on)
1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. Save. GitHub gives you a URL like `https://mightymiraclestherapy.github.io/mighty-miracles-site/` within a minute or two.

## Point your domain at it (optional, once you're ready to go live)
Once mightymiraclestherapy.com should point here instead of GoDaddy's builder:
1. In the repo **Settings → Pages**, add your custom domain (`mightymiraclestherapy.com`) and save — this creates a `CNAME` file for you.
2. At your domain's DNS host (GoDaddy, unless you move the domain too), add:
   - An `A` record for `@` pointing to GitHub Pages' IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record for `www` pointing to `yourusername.github.io`
3. Wait for DNS to propagate (can take a few hours), then check "Enforce HTTPS" in Pages settings.

Don't do this step until the new site looks right to you — until then it's safe to preview at the free `github.io` URL with zero risk to the live site.

## Known gaps to fix before going fully live
- **Images are still hotlinked from GoDaddy's asset CDN** (wsimg.com). These are licensed stock photos tied to the GoDaddy account — they may stop working if that GoDaddy subscription is ever cancelled, and continuing to use them long-term outside GoDaddy's builder may not be covered by the original license. Replace them with your own photos or a stock library you're licensed for (Claude can help resize/optimize them once you have them).
- **Contact is a direct "email us" button** (`mailto:melissa@mightymiraclestherapy.com`) rather than a form — no backend needed, but it only works well on devices with a mail app configured. If that becomes a problem, ask Claude to add a real form back in (e.g. via Formspree).
- **Social links** (Facebook/Instagram/LinkedIn) are placeholders (`facebook.com`, `instagram.com`, `linkedin.com`) — same as the original site. Swap in your real profile URLs once they exist.
- **No real booking page existed** on the original site (the "Appointments" link 404'd) — "Let's Go" and "Count Me In" currently scroll to the contact form. When you're ready for real online booking, ask Claude to wire in a scheduler (e.g. Acuity/Calendly) or your practice-management system.

## Editing going forward
Once this is in GitHub, just tell Claude what to change (new text, a new photo, a new section) and it can edit these files directly and push the update.
