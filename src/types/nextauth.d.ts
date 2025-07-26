// src/types/next-auth.d.ts
import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      // ...DefaultSession["user"];
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "user" | "admin" | "driver" | "cashier" | null; // Add your custom role field here
    };
  }

  interface User extends DefaultUser {
    role?: string; // Add your custom role field here
  }
}
