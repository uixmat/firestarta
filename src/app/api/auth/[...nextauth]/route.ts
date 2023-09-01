import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter, AdapterUser } from "next-auth/adapters";
import prisma from "@/lib/prisma";

interface User extends AdapterUser {
  jobTitle?: string;
}

export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session }) {
      if (trigger === 'update' && session?.name) {
        token.name = session.name
      }
      return token
    }
  },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }