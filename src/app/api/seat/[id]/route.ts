import { validateIdParam } from "@/lib/utils";
import { deleteSeat, getSeat } from "@features/seat/services/crud";

/**
 * GET /api/seat/[id]
 *
 * Gets a seat's information based on the dynamic `id` parameter in the URL path.
 * Example request: GET /api/seat/123
 *
 * Route param:
 * - id (string): seat ID passed as part of the URL (e.g., /api/seat/123)
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return getSeat(id);
  }
}

/**
 * DELETE /api/seat/[id]
 *
 * Deletes a seat based on the dynamic `id` parameter in the URL path.
 * Example request: DELETE /api/seat/123
 *
 * Route param:
 * - id (string): seat ID passed as part of the URL (e.g., /api/seat/123)
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return deleteSeat(id);
  }
}
