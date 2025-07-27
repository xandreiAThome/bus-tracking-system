import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/",
  },
  callbacks: {
    /**
     * On sign in, upsert the Google user into the database.
     * If the user already exists (matched by email), update their name and image.
     * This ensures all Google logins are stored in the user table for later use.
     */
    async signIn(params: {
      user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
      };
      account?: { provider?: string | undefined } | null;
      profile?: unknown;
      email?: unknown;
      credentials?: unknown;
    }) {
      const { user, account } = params;
      if (account?.provider === "google" && user?.email) {
        try {
          // Upsert user by email
          await prisma.user.upsert({
            where: { email: user.email },
            update: {
              name: user.name ?? undefined,
              image: user.image ?? undefined,
            },
            create: {
              name: user.name ?? "",
              email: user.email,
              image: user.image ?? undefined,
              role: "user",
            },
          });
        } catch (err) {
          console.error("Prisma error on Google sign-in:", err);
          return false;
        }
      }
      return true;
    },

    /**
     * Redirect users after sign in or sign out.
     * - On sign out or root, go to sign-in page.
     * - Otherwise, go to trips overview after successful sign in.
     */
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      if (url === "/" || url === baseUrl || url.includes("signOut")) {
        return baseUrl;
      }
      return `${baseUrl}/tripsOverview`;
    },

    async jwt({ token, user }: { token: JWT; user?: User }) {
      // Add custom property to token on sign in
      if (user && user.email) {
        // Query Prisma for the user's role
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: { role: true },
        });
        if (dbUser?.role) {
          token.role = dbUser.role;
        }
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      // Ensure session.user exists
      if (!session.user) session.user = {};
      // Copy custom property from token to session.user
      if (typeof token.role === "string") {
        session.user.role = token.role as
          | "user"
          | "admin"
          | "driver"
          | "cashier";
      }
      return session;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
