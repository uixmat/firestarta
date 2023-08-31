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
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({token, user, session, trigger}) {
      if(trigger === "update") {
        const typedUser = user as User;
        return {
          ...token,
          ...session,
          jobTitle: typedUser.jobTitle,
        }
      }
      return token;
    },
    async session({session, token}) {
      session.user = token as any;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  debug: true,
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }