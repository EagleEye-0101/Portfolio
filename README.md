# Kalimuddin Portfolio

Editorial-grade personal portfolio — warm paper palette, Instrument Serif typography, no vibecoded gradients.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

**Local / Vercel:** set in `.env.local`:

```
CONTACT_EMAIL=kalim.codes@gmail.com
RESEND_API_KEY=re_...
```

**GitHub Pages (static export):** set `NEXT_PUBLIC_FORMSPREE_ID` and use:

```bash
npm run build:pages
```

## Deployment

| Target | Command | Notes |
|--------|---------|-------|
| **Vercel** | `vercel` or connect repo | Default `npm run build`. Add env vars in dashboard. |
| **GitHub Pages** | `npm run build:pages` | Outputs to `out/`. Set `NEXT_PUBLIC_BASE_PATH` to your repo name. |
| **Custom domain** | Deploy to Vercel, add DNS CNAME | Set domain in Vercel project settings. |

## Refresh GitHub data

```bash
npm run fetch-github
```

Requires `gh` CLI authenticated with repo scope.
