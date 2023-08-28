## Dependencies

- Next.js
- Typescript
- Sass
- NextAuth

## Setup

Install dependencies:

```bash
yarn install
```
Create a `.env.local` file and generate NextAuth secret using:

```bash
openssl rand -base64 32
```

## `.env.local` 

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
