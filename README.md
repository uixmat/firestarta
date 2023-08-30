# NextAuth with OAuth & Route Handlers, Prisma and MonogoDB
This is a very simple repository showing you how to render session data using NextAuth OAuth providers (Github in this case) both on server and client side in the app directory. A user is created in MonogoDB by using Prisma ORM.

## Dependencies

- Next.js
- NextAuth
- Prisma
- Typescript
- Sass
- MonogDB _(or any db of your choosing)_

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
```

To setup Github visit [https://github.com/settings/apps](https://github.com/settings/apps) to create a new app. the callback URL should be: `[origin]/api/auth/callback/[provider]` as stated in the [NextAuth](https://next-auth.js.org/configuration/providers/oauth) documentation.

## Getting Started

```bash
npx prisma migrate
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
