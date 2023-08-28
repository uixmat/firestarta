# NextAuth with OAuth & Route Handlers 
This is a very simple repository showing you how to render session data using NextAuth OAuth providers (Github in this case) both on server and client side in the app directory. 

## Dependencies

- Next.js
- NextAuth
- Typescript
- Sass

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
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
