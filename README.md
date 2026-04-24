# Sportify — Landing Page

Social sports viewing platform. YC-backed. Lahore, Pakistan.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, interactive Rival Room widget, features, waitlist CTA |
| `/about` | About — mission, company snapshot, timeline, IP info |
| `/board` | Board — all 9 directors, bylaws highlights, share class table |
| `/investors` | Investors — financials, cash flow, appraisal, balance sheet |
| `/tos` | Legal — TOS, liability cap, AUP, general provisions |

## Tech Stack

- React 18 + React Router v6
- Pure CSS-in-JS (inline styles, no external CSS framework)
- Google Fonts: Bebas Neue, DM Sans, JetBrains Mono

## Local Development

```bash
npm install
npm start
# Opens at http://localhost:3000
```

## Deploy to Vercel (Step-by-Step)

### Option A — Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Inside the sportify folder, run:
vercel

# 3. Follow prompts:
#    - Login / create account
#    - "Set up and deploy?" → Y
#    - "Which scope?" → your username
#    - "Link to existing project?" → N
#    - "Project name?" → sportify (or anything)
#    - "In which directory is your code located?" → ./  (press Enter)
#    - Framework detected: Create React App → confirm

# 4. Your site is live! URL shown in terminal.
```

### Option B — GitHub + Vercel Dashboard

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial Sportify landing page"
git remote add origin https://github.com/YOUR_USERNAME/sportify.git
git push -u origin main

# 2. Go to https://vercel.com/new
# 3. Import your GitHub repo
# 4. Framework: Create React App (auto-detected)
# 5. Click Deploy → done in ~60 seconds
```

### Environment

No environment variables needed. The app is fully static.

---

© 2026 Sportify LLC
