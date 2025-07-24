import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // If this is a sign out redirect or redirect to root, go to root (sign in page)
      if (url === "/" || url === baseUrl || url.includes("signOut")) {
        return baseUrl; // This goes to "/" (your sign-in page)
      }
      // Otherwise redirect to productListing after successful sign in
      return `${baseUrl}/tripsOverview`;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
