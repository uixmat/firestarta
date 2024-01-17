# NextAuth with OAuth & Route Handlers, Prisma, Postgres, Tailwind, shadcn/ui and Sass.

This repository serves as a starting point (or boilerplate) for any Next.js project that requires user authentication and management. It currently uses Prisma with a Postgres database and is being built out using shadcn/ui components besides custom sass components when needed.

## The stack

- Next.js
- NextAuth
- Typescript
- Prisma
- Postgres / Vercel Storage
- Sass
- Tailwindcss
- shadcn/ui
- Sonner toasts
- Lucide icons

## Setup

Create a `.env.local` file and generate NextAuth secret using:

```bash
openssl rand -base64 32
```

### `.env.local` 

```
# Next Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

GITHUB_SECRET=
GITHUB_ID=

DATABASE_URL=
```

To setup Github visit [https://github.com/settings/apps](https://github.com/settings/apps) to create a new app. the callback URL should be: `[origin]/api/auth/callback/[provider]` as stated in the [NextAuth](https://next-auth.js.org/configuration/providers/oauth) documentation.

## Getting Started

```bash
npx prisma migrate dev --name init
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
