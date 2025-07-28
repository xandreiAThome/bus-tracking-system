import { validateIdParam } from "@/lib/utils";
import {
  deleteUser,
  updateUserRole,
  getUser,
} from "@/features/user/services/crud";

// DELETE /api/user/[id] - delete user by id
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam(params.id);
  if (id instanceof Response) return id;
  return deleteUser(id);
}

// PATCH /api/user/[id] - edit user by id
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam(params.id);
  if (id instanceof Response) return id;
  const body = await req.json();
  const { role } = body;
  if (!role) {
    return Response.json({ message: "No fields to update" }, { status: 400 });
  }
  return updateUserRole(id, role);
}

/**
 * GET /api/user/[id]
 *
 * Fetches a single user by ID.
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam(params.id);
  if (id instanceof Response) return id;
  return getUser(id);
}
