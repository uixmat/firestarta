import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import prisma from "@/lib/prisma";

interface CustomUser extends User {
  jobTitle?: string;
  // Add subscriptions here and to the session
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    })
  ],
  callbacks: {
    async jwt({ token, trigger, session, account, user }) {
      // Initial sign-in
      if (account && user) {
        token.userId = user.id;
        const userFromDb = await prisma.user.findUnique({
          where: { email: user.email as string },
        });
        if (userFromDb?.jobTitle) {
          token.jobTitle = userFromDb.jobTitle;
        }
      }
      // Triggers
      if (trigger === 'update' && session?.name) {
        token.name = session.name;
      }
      if (trigger === 'update' && session?.jobTitle) {
        token.jobTitle = session.jobTitle;
      }
      return token;
    },
    // Custom Session
    async session({session, token}) {
      if (token?.userId) {
        (session.user as CustomUser).id = token.userId as string;
      }
      if (token?.jobTitle) {
        (session.user as CustomUser).jobTitle = token.jobTitle as string;
      }
      if (token?.userId) {
        (session.user as CustomUser).id = token.userId as string;
        // Fetch user with subscriptions
        const userWithSubscriptions = await prisma.user.findUnique({
          where: { id: token.userId as string },
          include: {
            subscriptions: true, // Include subscriptions in the result
          },
        });
        // Add subscriptions to the session
        (session.user as CustomUser).subscriptions = userWithSubscriptions?.subscriptions;
      }
      return session;
    },
  },
}
