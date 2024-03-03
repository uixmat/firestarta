<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://github.com/uixmat/firestarta-ghassets/blob/main/assets/logo-dark.png">
<img alt="Firestarta.dev" src="https://github.com/uixmat/firestarta-ghassets/blob/main/assets/logo-light.png" width="320">
</picture>

### A Next.js SaaS Boilerplate

This repository serves as a starting point (or boilerplate) for any Next.js SaaS project that requires user authentication and management and subscription payments. It currently uses Prisma with a Postgres database and is being built out using shadcn/ui components besides custom sass components when needed.

## Live :point_right: [Firestarta.dev](https://firestarta.dev)

![Vercel](https://vercelbadge.vercel.app/api/uixmat/firestarta)

[![Made with Supabase](https://supabase.com/badge-made-with-supabase-dark.svg)](https://supabase.com)

> [!NOTE]
> Now using [yarn 4.1.0](https://yarnpkg.com/getting-started/install) through [Corepack](https://yarnpkg.com/corepack).

## The stack
> Changes or additions to teh stack will be updated here

- Next.js
- NextAuth
- Typescript
- Prisma
- Supabase (Postgres)
- Lemon Squeezy (Subscriptions)
- Sass
- shadcn/ui
- Lucide icons

## Features
> Features are developed in no specific order

- [x] App directory
- [x] Route Groups
- [x] Intercepting & Parallel Routes
- [x] CSR/SSR
- [x] Subscriptions with Lemon Squeezy
- [x] Basic SEO
- [x] User Profiles
- [x] Account Pages
- [x] Custom Components
- [x] ~~Light/Dark Modes~~ _temporarily removed_
- [x] Responsive Design
- [ ] Light mode (Theme)
- [ ] Dasboard layouts
- [ ] Cookies
- [x] Internationalisation (Multi-lingual)
- [ ] Custom errors
- [x] Loading states `loading.tsx`
- [ ] Sitemap
- [ ] Manifest
- [ ] Blog

## Preview
<img alt="Firestarta.dev" src="https://github.com/uixmat/firestarta-ghassets/blob/main/assets/hero.png" />

## Setup
Create a `.env.local` file and generate NextAuth secret using:

```bash
openssl rand -base64 32
```

### `.env.local` 
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

GITHUB_SECRET=
GITHUB_ID=

DATABASE_URL=

LEMONSQUEEZY_STORE_ID=
LEMONSQUEEZY_API_KEY=
LEMONSQUEEZY_WEBHOOK_SECRET=
```
### Set up GitHub Authentication
> [!TIP] 
> To setup Github visit [https://github.com/settings/apps](https://github.com/settings/apps) to create a new app. the callback URL should be: `[origin]/api/auth/callback/[provider]` as stated in the [NextAuth](https://next-auth.js.org/configuration/providers/oauth) documentation.

## Getting Started
```bash
npx prisma migrate dev --name init
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
