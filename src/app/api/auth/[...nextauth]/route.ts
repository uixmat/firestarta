import NextAuth, { NextAuthOptions, Session as NextAuthSession, User } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import prisma from "@/lib/prisma";

interface CustomUser extends User {
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
    async jwt({ token, trigger, session, account, user }) {
      // Initial sign-in
      if (account && user) {
        const userFromDb = await prisma.user.findUnique({
          where: { email: user.email as string },
        });
        if (userFromDb?.jobTitle) {
          token.jobTitle = userFromDb.jobTitle;
        }
      }
      if (trigger === 'update' && session?.name) {
        token.name = session.name;
      }
      if (trigger === 'update' && session?.jobTitle) {
        token.jobTitle = session.jobTitle;
      }
      return token;
    },
    async session({session, token}) {
      if (token?.jobTitle) {
        (session.user as CustomUser).jobTitle = token.jobTitle as string;
      }
      return session;
    },
  },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }