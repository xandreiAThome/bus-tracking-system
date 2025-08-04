import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import pool from "@/lib/db";
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
      // Only handle Google logins and only if email is present
      if (account?.provider === "google" && user?.email) {
        try {
          await pool.query(
            `INSERT INTO user (name, email, image, role)
             VALUES (?, ?, ?, 'user')
             ON DUPLICATE KEY UPDATE name=VALUES(name), image=VALUES(image)`,
            [user.name, user.email, user.image]
          );
        } catch (err) {
          // Log DB errors for debugging
          console.error("DB error on Google sign-in:", err);
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
        // Query your DB for the user's role
        const [rows] = (await pool.query(
          "SELECT role FROM user WHERE email = ? LIMIT 1",
          [user.email]
        )) as [Array<{ role: string }>, unknown];

        if (Array.isArray(rows) && rows[0]?.role) {
          token.role = rows[0].role;
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
