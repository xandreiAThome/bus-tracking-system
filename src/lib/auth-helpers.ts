import { auth } from "@/features/auth/services/auth";
import { NextResponse } from "next/server";
import { Session } from "next-auth";

/**
 * Helper function to check authentication in API routes
 * Returns the session if authenticated, or an error response if not
 */
export async function checkAuth() {
  const session = await auth();

  if (!session?.user) {
    return {
      error: NextResponse.json(
        { message: "Unauthorized - Please sign in" },
        { status: 401 }
      ),
      session: null,
    };
  }

  return { error: null, session };
}

/**
 * Helper function to check if user has required role
 * @param session - The user session
 * @param allowedRoles - Array of roles that are allowed to access this endpoint
 * @returns Error response if unauthorized, null if authorized
 */
export function checkRole(
  session: Session | null,
  allowedRoles: ("admin" | "driver" | "cashier" | "user")[]
) {
  if (!session?.user?.role || !allowedRoles.includes(session.user.role)) {
    return NextResponse.json(
      {
        message: `Access denied. Required roles: ${allowedRoles.join(", ")}. Your role: ${session?.user?.role || "none"}`,
      },
      { status: 403 }
    );
  }

  return null;
}

/**
 * Combined helper to check both authentication and authorization
 * @param allowedRoles - Array of roles allowed to access this endpoint
 * @returns { error: Response | null, session: Session | null }
 */
export async function checkAuthAndRole(
  allowedRoles: ("admin" | "driver" | "cashier" | "user")[]
) {
  const { error: authError, session } = await checkAuth();

  if (authError) {
    return { error: authError, session: null };
  }

  const roleError = checkRole(session, allowedRoles);
  if (roleError) {
    return { error: roleError, session: null };
  }

  return { error: null, session };
}

/**
 * Helper to block users with "user" role specifically
 * @param session - The user session
 * @returns Error response if user has "user" role, null if allowed
 */
export function blockUserRole(session: Session | null) {
  if (session?.user?.role === "user") {
    return NextResponse.json(
      { message: "Access denied. Contact administrator for access." },
      { status: 403 }
    );
  }

  return null;
}
