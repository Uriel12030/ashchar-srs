# Ashchar Ltd. — Website

A production-ready Next.js website for **Ashchar Ltd.**, an Israeli
operational solutions company providing rapid logistics, infrastructure,
accommodation, and field support services to government, defense, and
private sector clients.

Built with:

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**

---

## Run locally

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in your contact details
cp .env.local.example .env.local

# 3. Start the dev server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

---

## Deploy to Vercel

1. Push the repository to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and **import the repository**.
3. Vercel auto-detects Next.js — no build settings changes are needed.
4. Add the following **Environment Variables** in the Vercel project settings:
   - `NEXT_PUBLIC_EMAIL`
   - `NEXT_PUBLIC_PHONE`
   - `NEXT_PUBLIC_WHATSAPP`
5. Click **Deploy**.

Every push to the main branch will trigger a new production deploy.

---

## Editing content

All editable copy lives in `/data`:

| File                    | What to edit                                            |
| ----------------------- | ------------------------------------------------------- |
| `data/site.ts`          | Company name, tagline, description, contact helpers     |
| `data/services.ts`      | The 9 services, their descriptions, and capabilities    |
| `data/content.ts`       | Value strip, Why Ashchar, How It Works, Use Cases       |
| `data/navigation.ts`    | Top-level navigation links                              |

Page-level copy (hero headlines, About page text, etc.) lives directly in
the page files under `/app`.

---

## Updating contact details

Contact details (email, phone, WhatsApp) are driven by environment variables
so they can be updated without a code change.

Create `.env.local` (copied from `.env.local.example`) and set:

```
NEXT_PUBLIC_EMAIL=info@your-domain.com
NEXT_PUBLIC_PHONE=+972-3-000-0000
NEXT_PUBLIC_WHATSAPP=+972500000000
```

- `NEXT_PUBLIC_WHATSAPP` should be the full international number with no
  spaces, dashes, or plus sign — e.g. `972500000000`. Spaces/dashes are
  stripped automatically but digits only is safest.
- On Vercel, set these in **Project → Settings → Environment Variables** and
  redeploy.

The values surface in:

- The footer contact block
- The Contact page direct channels
- The floating WhatsApp button
- The Header / Footer links

---

## Project structure

```
.
├── app/                  # App Router pages & API routes
│   ├── api/contact/      # POST /api/contact — handles form submissions
│   ├── about/
│   ├── contact/
│   ├── services/
│   ├── layout.tsx        # Root layout: Header, Footer, WhatsApp
│   ├── page.tsx          # Home
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── home/             # Homepage sections
│   ├── Button.tsx
│   ├── ContactForm.tsx
│   ├── Container.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Icons.tsx
│   ├── Logo.tsx
│   ├── PageHero.tsx
│   ├── SectionHeading.tsx
│   ├── ServiceCard.tsx
│   └── WhatsAppFloat.tsx
├── data/                 # Editable content & config
│   ├── content.ts
│   ├── navigation.ts
│   ├── services.ts
│   └── site.ts
├── public/
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Contact form

The form at `/contact` submits to `/api/contact`. The current handler
validates input and logs inquiries server-side. To actually deliver emails
in production, wire the handler in `app/api/contact/route.ts` to an email
provider (Resend, SendGrid, Postmark, etc.) or a CRM webhook.

The form degrades gracefully: if the API call fails, the user is shown the
direct email and a pre-filled `mailto:` link.

---

## License

© Ashchar Ltd. — All rights reserved.
