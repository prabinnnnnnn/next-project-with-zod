import { prisma } from "@/lib/index";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_SECRET_ID) {
  throw new Error("github client or github secret id is missng");
}
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_ID,
    }),
  ],
  callbacks: {
    async session({ user, session }) {
      if (user && session) {
        session.user.id = user.id;
      }

      return session;
    },
  },
});
